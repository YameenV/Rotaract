from pydantic import BaseModel, Field
from typing import Any, Optional, List, Dict


class Event(BaseModel):
    name: str 
    title: str
    types: str
    description: str
    img:str
    event_link:str

class LatestAnnouncement(BaseModel):
    name: str
    title : str
    announcement: str
    month:int
    day:int
    year:int

class TeamScore(BaseModel):
    team_id: str
    team_name:str
    captain_name:str
    score:int 
    month:int
    day:int
    year:int
    reason:str

class Team(BaseModel):
    season_name: str
    team_name:str
    captain_name:str
    date_time:str
    
# Scores
class UserForScore(BaseModel):
    user_id: str
    full_name: str
    current_position: str
    img:str

class IndividualScore(BaseModel):
    user_id: str
    full_name: str
    current_position: str
    img:str
    score: float
    month: int
    day: int
    year:int
    increment_type: str
    reason: str

class Contact(BaseModel):
    mobile_number: str
    email_address: str
    linkedin: str
    twitter: str
    github: str
    whatsapp: str

class RotractClub(BaseModel):
    joning_reason: str
    avenue: List[str] = []
    current_position: str
    number_of_year: str
    suggestion: str
    testimonial: str
    

class ProfessionalSkill(BaseModel):
    skill: List[str] = []
    feild_of_interest: List[str] = []
    experience: int
    project: List[str] = []
    artical: List[str] = []
    intership: List[str] = []
    achievement: List[str] = []
    future_goal: str

class EducationalBackgroud(BaseModel):
    currently_studying: str
    certification_done: List[str] = []
    future_plan: List[str] = []
    book: List[str] = []

class OtherInterest(BaseModel):
    hobbies: List[str] = []
    Interest: List[str] = []

class About(BaseModel):
    describe: List[str] = []
    yourself_ten_years: List[str] = []

class User(BaseModel):
    full_name: str
    age: int
    gender: str
    blood_group: str
    district: str 
    city: str
    img: str
    contact: Contact
    rotractClub: RotractClub
    professional_skill: ProfessionalSkill
    education_background: EducationalBackgroud
    other_interest: OtherInterest
    about: About 


    
