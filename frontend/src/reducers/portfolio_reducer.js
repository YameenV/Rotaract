export default function(state={},action){

    switch(action.type){
        case 'portfolio_data':
            return {...state,userData:action.payload}

        case 'Create_user':
            return {...state,userData:action.payload}

        case 'get_users_for_score':
            return {...state,userData:action.payload}

        case 'increment_score_individual':
            return {...state,userData:action.payload}
        
        case 'get_teams':
            return {...state,userData:action.payload}
            
        case 'increment_team_score':
            return {...state,userData:action.payload}

        case 'check_user':
            return {...state,userData:action.payload}

        default:
            return state

    }



}