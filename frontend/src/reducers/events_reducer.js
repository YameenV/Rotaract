export default function(state={},action){
    switch(action.type){

        case 'get_all_events':
            return {...state,eventData:action.payload}
        case 'get_one_event':
            return {...state,eventData:action.payload}

        case 'post_event':
            return {...state,eventData:action.payload}

        default:
            return state

    }


}