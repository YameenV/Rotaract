import axios from 'axios'


export function getLeaderUserData(){
    const request = axios.get('/get_user_leaderboard')
    .then(response=>response.data)
    return{
        type:'Leaderboard_user_data',
        payload:request
    }
}

export function getLeaderTeamData(){
    const request = axios.get('/get_team_leaderboard')
    .then(response=>response.data)
    return{
        type:'Leaderboard_team_data',
        payload:request
    }
}


export function getEvents(){
    const request = axios.get('/get_event')
    .then(response => response.data)
    return{
        type:'get_all_events',
        payload:request
    }
}

export function getOneEvent(name){
    const request = axios.get(`/get_one_event?name=${name}`)
    .then(response => response.data)
    return{
        type:'get_one_event',
        payload:request
    }
}

export function getAnnouncement(){
    const request = axios.get('/get_latestannouncement')
    .then(response => response.data)
    return{
        type:'get_announcement',
        payload:request
    }
}
