import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Leaderboard_dekstop from './components/leaderboard/leaderboard_dekstop'
import Eventlanding from './components/event/eventlanding'
import OneViewEvent from './components/event/oneview'
import Announcement from './components/announcement/announcement'
const Routes = () =>{
    return(
        <div>
            <Switch>
            <Route exact path = "/" component={Leaderboard_dekstop}/>
            <Route exact path = "/events" component = {Eventlanding}/>
            <Route exact path = "/event_one_view" component= {OneViewEvent}/>
            <Route exact path = "/announcement" component = {Announcement}/>
            </Switch>
        </div>
    )
}

export default Routes