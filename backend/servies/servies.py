
from typing import List
from config.db import conn
from schemas import schemas
from models import model
from fastapi import HTTPException
from datetime import datetime
import pytz 
from bson.objectid import ObjectId


tz_NY = pytz.timezone('Asia/Kolkata')   
datetime_NY = datetime.now(tz_NY)

# User

async def create_user(user: model.User):
    conn.local.user.insert_one(user.dict())
    return schemas.serializeList(conn.local.user.find())

async def get_user_id_by_name(name):
    _id = schemas.serializeList(conn.local.user.find({ 'full_name': {"$eq": name}}, {"_id": 1}).limit(1))
    if not _id: raise HTTPException(status_code=404 , detail="Name does not exist")
    else: return _id

async def get_user_by_name(name):
    _id = await get_user_id_by_name(name)
    user = schemas.serializeList(conn.local.user.find({"_id":ObjectId(_id[0]["_id"])}).limit(1))
    if not user: raise HTTPException(status_code=404 , detail="user does not exist")
    else: return user
    

async def get_user_club_position_by_name(name):
    _id = await get_user_id_by_name(name)
    user_position = schemas.serializeList(conn.local.user.find({"_id": ObjectId(_id[0]["_id"])}, {"rotractClub.current_position":1, "_id":0}).limit(0))
    if not user_position: raise HTTPException(status_code=404 , detail="Position not found")
    else: return user_position[0]["rotractClub"]["current_position"]


async def increment_user_score(names: List[str], score: model.IndividualScore):
    for name in names:
        _id = await get_user_id_by_name(name)
        user_position = await get_user_club_position_by_name(name)
        if _id and user_position : conn.local.individualscore.insert_one(dict(user_id = _id[0]["_id"], name = name, current_position = user_position, score = score.score, month = score.month, day = score.day, year = score.year ,increment_type = score.increment_type, reason = score.reason))

    return schemas.serializeList(conn.local.individualscore.find())

async def get_score_by_name(name):
    _id = await get_user_id_by_name(name)
    return schemas.serializeList(conn.local.individualscore.find({ 'user_id': {"$eq": _id[0]["_id"]}}))


# Team 

async def create_team(team: model.Team):
    conn.local.team.insert_one(dict(team.dict(), date_time = datetime_NY.strftime("%Y-%m-%d %H:%M:%S.%f")))
    return schemas.serializeList(conn.local.team.find())

async def get_team_id_by_name(name):
    _id = schemas.serializeList(conn.local.team.find({ 'team_name': {"$eq": name}}, {"_id": 1}).limit(1))
    if not _id: raise HTTPException(status_code=404 , detail="Team does not exist")
    return _id

async def increment_team_score(names: str, score: model.TeamScore):
    _id = await get_team_id_by_name(names)
    if _id: conn.local.teamscore.insert_one(dict(team_id = _id[0]["_id"], team_name = score.team_name,captain_name= score.captain_name, score = score.score, month = score.month, day = score.day, year = score.year, reason = score.reason))
    return schemas.serializeList(conn.local.teamscore.find())

async def get_team_score_by_name(name):
    _id = await get_team_id_by_name(name)
    return schemas.serializeList(conn.local.teamscore.find({ 'team_id': {"$eq": _id[0]["_id"]}}))


# leaderboard Routes

async def get_user_leaderboard():
    return schemas.serializeList(conn.local.individualscore.aggregate([{"$match":{}},{"$group":{"_id":"$user_id","name":{ "$first": "$name" },"current_position":{ "$first": "$current_position" },"total":{"$sum": "$score"}}}]))

async def get_team_leaderboard():
    return schemas.serializeList(conn.local.teamscore.aggregate([{"$match":{}},{"$group":{"_id":"$team_id","team_name":{ "$first": "$team_name" },"captain_name":{ "$first": "$captain_name" },"total":{"$sum": "$score"}}}]))    


# Latestannouncement

async def create_latestannouncement(announcement: model.LatestAnnouncement):
    conn.local.latestannouncement.insert_one(announcement.dict())
    return schemas.serializeList(conn.local.latestannouncement.find())

async def get_latestannouncement():
    return schemas.serializeList(conn.local.latestannouncement.find().limit(5))


# Events

async def create_event(event: model.Event):
    conn.local.event.insert_one(event.dict())
    return schemas.serializeList(conn.local.event.find())

async def get_event():
    return schemas.serializeList(conn.local.event.find().limit(30))