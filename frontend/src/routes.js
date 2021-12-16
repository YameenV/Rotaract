import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Leaderboard_dekstop from './components/leaderboard/leaderboard_dekstop'
import Eventcontainer from './components/event/eventcontainer'
import AnnContainer from './components/announcement/annContainer'
import MemberContainer from './components/memberupdate/index'
import Loginpage from './components/adminpanel/loginpage'
import Welcome_page from './components/adminpanel/welcome_page'
import Teampage from './components/adminpanel/teampage'
import Individualpage from './components/adminpanel/individual'
const Routes = () =>{
    return(
        <div>
            <Switch>
            <Route exact path = "/" component={Leaderboard_dekstop}/>
            <Route exact path = "/events" component = {Eventcontainer}/>
            <Route exact path = "/announcement" component = {AnnContainer}/>
            <Route exact path = "/member" component = {MemberContainer}/>
            <Route exact path = "/admin_login" component = {Loginpage} />
            <Route exact path = "/admin_welcome" component = {Welcome_page}/>
            <Route exact path = "/admin_team" component = {Teampage}/>
            <Route exact path = "/admin_individual" component = {Individualpage}/>
            </Switch>
        </div>
    )
}

export default Routes