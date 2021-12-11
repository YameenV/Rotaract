import {combineReducers} from 'redux'
import team from './team_reducer'
import event from './events_reducer'
import announcement from './ann_reducer'

const rootReducer = combineReducers({
    team,
    event,
    announcement
    })

export default rootReducer