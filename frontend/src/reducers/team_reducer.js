export default function(state={},action){

    switch(action.type){
        case 'Leaderboard_user_data':
            return {...state,teamData:action.payload}
        case 'Leaderboard_team_data':
            return {...state,teamData:action.payload}
 

        default:
            return state

    }



}