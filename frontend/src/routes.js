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
import Navbar from './components/navbar/navbar'
import PortFolioContainer from './components/portfolio/portfolioContainer'
import AdminPublish from './components/admin_publish/adminPublish'
import Homepage from './components/Homepage/homepageContainer'


const Routes = () =>{
    return(
        <div>
            <Switch>
            <Route exact path = "/" component={Homepage}/>
            <Route exact path = "/leaderboard" component={Leaderboard_dekstop}/>
            <Route exact path = "/event" component = {Eventcontainer}/>
            <Route exact path = "/navbar"  component = {Navbar}/>
            <Route exact path = "/announcement" component = {AnnContainer}/>
            <Route exact path = "/member" component = {MemberContainer}/>
            <Route exact path = "/admin_login" component = {Loginpage} />
            <Route exact path = "/admin_welcome" component = {Welcome_page}/>
            <Route exact path = "/admin_team" component = {Teampage}/>
            <Route exact path = "/admin_individual" component = {Individualpage}/>
            <Route exact path = "/portfolio" component={PortFolioContainer}/>
            <Route exact path = "/admin_publish" component={AdminPublish}/>
            
            </Switch>
        </div>
    )
}

export default Routes