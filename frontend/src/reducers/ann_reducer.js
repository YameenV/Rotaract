export default function(state={},action){
    switch(action.type){
        case 'get_announcement':
            return {...state,annData:action.payload}
        default:
            return state
    }
}
