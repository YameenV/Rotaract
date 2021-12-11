from fastapi import FastAPI
from models import model
from servies import servies
from typing import List
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# User Routes

@app.post('/create_user')
async def create_user(user: model.User):
    return await servies.create_user(user)

@app.get('/get_user_by_name/{name}')
async def create_user(name: str):
    return await servies.get_user_by_name(name.lower())

@app.get('/get_user_id_by_name/{name}')
async def get_user_id_by_name(name:str):
    return await servies.get_user_id_by_name(name.lower())

@app.get('/get_user_club_position_by_name')
async def get_user_club_position_by_name(name:str):
    return await servies.get_user_club_position_by_name(name.lower())

@app.post('/increment_user_score')
async def increment_user_score(name:List[str], score: model.IndividualScore):
    return await servies.increment_user_score(name, score)

@app.get('/get_score_by_name/{name}')
async def get_score_by_name(name):
    return await servies.get_score_by_name(name.lower())


# Team Routes

@app.post('/create_team')
async def get_score_by_name(team: model.Team):
    return await servies.create_team(team)

@app.get('/get_team_id_by_name/{name}')
async def get_user_id_by_name(name:str):
    return await servies.get_team_id_by_name(name.lower())

@app.post('/increment_team_score')
async def increment_team_score(name: str, score: model.TeamScore):
    return await servies.increment_team_score(name, score)

@app.get('/get_team_score_by_name/{name}')
async def get_team_score_by_name(name: str):
    return await servies.get_team_score_by_name(name.lower())


# Leaderboard Routes

@app.get('/get_user_leaderboard')
async def get_user_leaderboard():
    return await servies.get_user_leaderboard()

@app.get('/get_team_leaderboard')
async def get_team_leaderboard():
    return await servies.get_team_leaderboard()


# Latestannouncement

@app.post('/create_latestannouncement')
async def create_latestannouncement(announcement: model.LatestAnnouncement):
    return await servies.create_latestannouncement(announcement)

@app.get('/get_latestannouncement')
async def get_latestannouncement():
    return await servies.get_latestannouncement()


# Events 

@app.post('/create_event')
async def create_event(event: model.Event):
    return await servies.create_event(event)

@app.get('/get_event')
async def get_event():
    return await servies.get_event()