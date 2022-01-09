from typing import List
from config.db import conn, db
from schemas import schemas
from models import model
from fastapi import HTTPException
from datetime import datetime
import pytz 
from bson.objectid import ObjectId
from pandas import DataFrame

tz_NY = pytz.timezone('Asia/Kolkata')   
datetime_NY = datetime.now(tz_NY)

# User
async def create_user(user: model.User):
    try:
        db.collection("User").add(user.dict())
        return "Sucess"
    except: return "Failed"
    
async def update_user(user:model.User, userId:str):
    try: 
        db.collection("User").document(userId).set(user.dict())
        return "Sucess"
    except: return "Failed"

async def get_user_by_name(name:str):
    users = db.collection("User").where("full_name","==",name).limit(1).get()
    if users: return users[0].to_dict()
    else: raise HTTPException(status_code=404 , detail="Name does not exist")


# Protected
async def get_user_for_score():
    users = db.collection("User").get()
    userList = []
    for user in users:
        a = user.to_dict()
        print(user.id)
        user = {
            "user_id":user.id,
            "full_name":a["full_name"],
            "current_position": a["rotractClub"]["current_position"],
            "img":a["img"]
        }
        userList.append(user)
    return userList

async def increment_user_score(users:List[model.UserForScore], score: model.IndividualScore):
    for user in users:
        user = {
            "user_id":user.user_id,
            "full_name":user.full_name,
            "current_position":user.current_position,
            "img":user.img,
        }        
        db.collection("Score").add(dict(member = user, score = score.score, month = score.month, day = score.day, year = score.year, increment_type = score.increment_type, reason = score.reason))
    return "Sucess"


async def create_team(team: model.Team):
    db.collection("Team").add(dict(team.dict(), date_time = datetime_NY.strftime("%Y-%m-%d")))
    return "sucess"


async def get_team_for_score():
    teams = db.collection("Team").get()
    tem = []
    for team in teams:
        a = team.to_dict()
        team = {
            "id":team.id,
            "team_name": a["team_name"],
            "captain_name":a["captain_name"]
        }
        tem.append(team)
    return tem

async def increment_team_score(score: model.TeamScore):
    db.collection("TeamScore").add(score.dict())
    return "Sucess"


async def get_user_leaderboard():
    scores = db.collection("Score").get()
    leaderboardUser = []
    curr_dict = {}
    for score in scores:
        sc = score.to_dict()
        name = sc["member"]["full_name"]
        point = sc["score"]
        _p = None
        try:
            curr_dict[name] += point
        except:
            curr_dict[name] = point
            _dict = {
                "current_position":sc["member"]["current_position"],
                "full_name": sc["member"]["full_name"],
                "img": sc["member"]["img"]
            }
            leaderboardUser.append(_dict)

    for x, y in curr_dict.items():
        for i in leaderboardUser:
            if x == i["full_name"]:
                i["score"] = y 
    return leaderboardUser


async def get_team_leaderboard():
    teams = db.collection("TeamScore").get()
    teamList = []
    for team in teams:
        tea = team.to_dict()
        teamList.append(tea)
    df = DataFrame(teamList)
    d = df.groupby(["team_name"])["score"].agg("sum")
    print(d)
    
async def create_event(event: model.Event):
    try:
        db.collection("Event").add(event.dict())
        return "success"
    except:
        return "Failed"

async def get_event():
    try:
        event = db.collection("Event").get()
        events = []
        for eve in event:
            _e = eve.to_dict()
            events.append(_e)
        return events
    except:
        return "Failed"


async def create_latestannouncement(announcement: model.LatestAnnouncement):

    db.collection("Announcement").add(announcement.dict())


async def get_latestannouncement():
    try:
        ann = db.collection("Announcement").get()
        anns = []
        for a in ann:
            _a = a.to_dict()
            anns.append(_a)
        return anns
    except:
        return "Failed"






















































async def get_user_club_position_by_name(name):
    _id = await get_user_id_by_name(name)
    user_position = schemas.serializeList(conn.local.user.find({"_id": ObjectId(_id[0]["_id"])}, {"rotractClub.current_position":1, "_id":0}).limit(0))
    if not user_position: raise HTTPException(status_code=404 , detail="Position not found")
    else: return user_position[0]["rotractClub"]["current_position"]

async def get_user_id_by_name(name):
    _id = schemas.serializeList(conn.local.user.find({ 'full_name': {"$eq": name}}, {"_id": 1}).limit(1))
    if not _id: raise HTTPException(status_code=404 , detail="Name does not exist")
    else: return _id
    
async def get_user_club_position_by_name(name):
    _id = await get_user_id_by_name(name)
    user_position = schemas.serializeList(conn.local.user.find({"_id": ObjectId(_id[0]["_id"])}, {"rotractClub.current_position":1, "_id":0}).limit(0))
    if not user_position: raise HTTPException(status_code=404 , detail="Position not found")
    else: return user_position[0]["rotractClub"]["current_position"]


# async def increment_user_score(userId: List[str], score: model.IndividualScore):
#     for userId in userId:
#         db.collection("User").document(userId).collection("Score").add(score.dict())
#     return "Sucess"

async def get_score_by_name(name):
    _id = await get_user_id_by_name(name)
    return schemas.serializeList(conn.local.individualscore.find({ 'user_id': {"$eq": _id[0]["_id"]}}))


# Team 

# async def create_team(team: model.Team):
#     conn.local.team.insert_one(dict(team.dict(), date_time = datetime_NY.strftime("%Y-%m-%d %H:%M:%S.%f")))
#     return schemas.serializeList(conn.local.team.find())

async def get_team_id_by_name(name):
    _id = schemas.serializeList(conn.local.team.find({ 'team_name': {"$eq": name}}, {"_id": 1}).limit(1))
    if not _id: raise HTTPException(status_code=404 , detail="Team does not exist")
    return _id

# async def increment_team_score(names: str, score: model.TeamScore):
#     _id = await get_team_id_by_name(names)
#     if _id: conn.local.teamscore.insert_one(dict(team_id = _id[0]["_id"], team_name = score.team_name,captain_name= score.captain_name, score = score.score, month = score.month, day = score.day, year = score.year, reason = score.reason))
#     return schemas.serializeList(conn.local.teamscore.find())

async def get_team_score_by_name(name):
    _id = await get_team_id_by_name(name)
    return schemas.serializeList(conn.local.teamscore.find({ 'team_id': {"$eq": _id[0]["_id"]}}))


# leaderboard Routes

# async def get_user_leaderboard():
#     return schemas.serializeList(conn.local.individualscore.aggregate([{"$match":{}},{"$group":{"_id":"$user_id","name":{ "$first": "$name" },"current_position":{ "$first": "$current_position" },"total":{"$sum": "$score"}}}]))

# async def get_team_leaderboard():
#     return schemas.serializeList(conn.local.teamscore.aggregate([{"$match":{}},{"$group":{"_id":"$team_id","team_name":{ "$first": "$team_name" },"captain_name":{ "$first": "$captain_name" },"total":{"$sum": "$score"}}}]))    


# Latestannouncement

# async def create_latestannouncement(announcement: model.LatestAnnouncement):
#     conn.local.latestannouncement.insert_one(announcement.dict())
#     return schemas.serializeList(conn.local.latestannouncement.find())

# async def get_latestannouncement():
#     return schemas.serializeList(conn.local.latestannouncement.find().limit(5))


# Events

# async def create_event(event: model.Event):
#     conn.local.event.insert_one(event.dict())
#     return schemas.serializeList(conn.local.event.find())

# async def get_event():
#     return schemas.serializeList(conn.local.event.find().limit(30))