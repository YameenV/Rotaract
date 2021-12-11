import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Leaderboard_dekstop from './components/leaderboard/leaderboard_dekstop'
import Eventcontainer from './components/event/eventcontainer'
import AnnContainer from './components/announcement/annContainer'
import MemberContainer from './components/memberupdate/index'
const Routes = () =>{
    return(
        <div>
            <Switch>
            <Route exact path = "/" component={Leaderboard_dekstop}/>
            <Route exact path = "/events" component = {Eventcontainer}/>
            <Route exact path = "/announcement" component = {AnnContainer}/>
            <Route exact path = "/member" component = {MemberContainer}/>
            </Switch>
        </div>
    )
}

export default Routes