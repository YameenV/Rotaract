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

        default:
            return state

    }



}