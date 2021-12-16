import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
class Welcome_page extends Component {

    redToTeam = (e) =>{
        e.preventDefault()
        this.props.history.push('/admin_team')
    }

    redToIndi = (e) =>{
        e.preventDefault()
       this.props.history.push('/admin_individual')
    }

    render() {
        return (
            <div>
                Welcome jai
              <button onClick={(e)=>this.redToTeam(e)} type="button" value = "Team">Team</button>
              <button onClick={(e)=>this.redToIndi(e)}type="button" value = "Individual">Individual</button>
            </div>
        )
    }
}
export default Welcome_page

