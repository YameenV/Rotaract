import {combineReducers} from 'redux'
import team from './team_reducer'
import event from './events_reducer'
import announcement from './ann_reducer'
import portfolio from './portfolio_reducer'

const rootReducer = combineReducers({
    team,
    event,
    announcement,
    portfolio
    })

export default rootReducer