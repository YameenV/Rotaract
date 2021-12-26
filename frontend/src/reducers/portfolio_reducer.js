export default function(state={},action){

    switch(action.type){
        case 'portfolio_data':
            return {...state,userData:action.payload}

        case 'Create_user':
            return {...state,userData:action.payload}

        default:
            return state

    }



}