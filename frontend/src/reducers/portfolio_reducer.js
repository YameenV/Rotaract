export default function(state={},action){

    switch(action.type){
        case 'portfolio_dat':
            return {...state,teamData:action.payload}

        default:
            return state

    }



}