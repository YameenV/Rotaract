import axios from 'axios'






export function getLeaderUserData(){
    const request = axios.get('https://obscure-basin-25126.herokuapp.com/get_user_leaderboard')
    .then(response=>response.data)
    return{
        type:'Leaderboard_user_data',
        payload:request
    }
}

export function getLeaderTeamData(){
    const request = axios.get('https://obscure-basin-25126.herokuapp.com/get_team_leaderboard')
    .then(response=>response.data)
    return{
        type:'Leaderboard_team_data',
        payload:request
    }
}


export function getEvents(){
    const request = axios.get('https://obscure-basin-25126.herokuapp.com/get_event')
    .then(response => response.data)
    return{
        type:'get_all_events',
        payload:request
    }
}

export function getOneEvent(name){
    const request = axios.get(`https://obscure-basin-25126.herokuapp.com/get_one_event?name=${name}`)
    .then(response => response.data)
    return{
        type:'get_one_event',
        payload:request
    }
}

export function getAnnouncement(){
    const request = axios.get('https://obscure-basin-25126.herokuapp.com/get_latestannouncement')
    .then(response => response.data)
    return{
        type:'get_announcement',
        payload:request
    }
}




export function createAnnouncement(adata){
    console.log(adata)
    const request = axios.post('https://obscure-basin-25126.herokuapp.com/create_latestannouncement',adata)
    .then(response=>response.data)
    return{
        type:'ann_post',
        payload:request
    }
}

export function createEvent(edata){

    const request = axios.post('https://obscure-basin-25126.herokuapp.com/create_event',edata)
    .then(response =>response.data)
    return{
        type:'post_event',
        payload:request
    }
}

export function IncrementIndividual(idata){
    const request = axios.post('https://obscure-basin-25126.herokuapp.com/increment_user_score',idata)
    .then(response=>response.data)
    return{
        type:'inc_data',
        payload:request
    }
}

export function AddTeam(tdata){
    const request = axios.post('https://obscure-basin-25126.herokuapp.com/create_team',tdata)
    .then(response=>response.data)
    return{
        type:'add_team',
        payload:request
    }
}


export function createUser(udata,id){
    const request = axios.post(`https://obscure-basin-25126.herokuapp.com/update_user/${id}`,udata)
    .then(response=>response.data)
    return{
        type:'Create_user',
        payload:request
    }
}


export function getUserForScore(){
    const request = axios.get('https://obscure-basin-25126.herokuapp.com/get_user_for_score')
    .then(response=>response.data)
    return{
        type:'get_users_for_score',
        payload:request
    }
}

export function incrementUserScore(data){
    const request = axios.post('https://obscure-basin-25126.herokuapp.com/increment_user_score',data)
    .then(response=>response.data)
    return{
        type:'increment_score_individual',
        payload:request
    }
}

export function getTeamsForScore(){
    const request = axios.get('https://obscure-basin-25126.herokuapp.com/get_team_for_score')
    .then(response=>response.data)
    return{
        type:'get_teams',
        payload:request
    }
}

export function incremenTeamScore(data){
    const request = axios.post('https://obscure-basin-25126.herokuapp.com/increment_team_score',data)
    .then(response=>response.data)
    return{
        type:'increment_team_score',
        payload:request
    }
}

export function checkAlreadyThere(id){
    const request = axios.get(`https://obscure-basin-25126.herokuapp.com/user_alreadythere/${id}`)
    .then(response=>response.data)
    return{
        type:'check_user',
        payload:request
    }
}

export function makeUser(id,data){
    const request = axios.put(`https://obscure-basin-25126.herokuapp.com/update_user/${id}`,data)
    .then(response=>response.data)
    return{
        type:'create_user',
        payload:request
    }
}

export function getUserByName(name){
    const request = axios.get(`https://obscure-basin-25126.herokuapp.com/get_user_by_name/${name}`)
    .then(response => response.data)
    return{
        type:'portfolio_data',
        payload:request
    }
}

export function getAllUsers(){
    const request = axios.get(`https://obscure-basin-25126.herokuapp.com/get_user_for_portfolio`)
    .then(response=>response.data)
    return{
        type:'all_users',
        payload:request
    }
}