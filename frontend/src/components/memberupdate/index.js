import React, { Component } from 'react'
import LauncherDiv from './launcherDiv'
class MemberContainer extends Component {

    state = {
        typeofupdate:'personalinfo'
    }


    changeType = (t) =>{
        this.setState({
            typeofupdate:t
        })
    }



    render() {
        console.log(this.state)
        return (
            <div>
                
<div className = "changer_buttons">
<button onClick={(e)=>this.changeType(e.target.value)} value="personalinfo">Personal information</button>
<button onClick={(e)=>this.changeType(e.target.value)} value="Contact">Contact</button>
<button onClick={(e)=>this.changeType(e.target.value)} value="rotaractclub">Rotaract Club</button>
<button onClick={(e)=>this.changeType(e.target.value)} value="proskilss">Professional Skills</button>
<button onClick={(e)=>this.changeType(e.target.value)} value="edubackground">Educational backgroung</button>
<button onClick={(e)=>this.changeType(e.target.value)} value="otherinterest">Other interests</button>
<button onClick={(e)=>this.changeType(e.target.value)} value="about">About</button>
</div>


<div>
    {this.state.typeofupdate !== '' ? (
        <LauncherDiv data = {this.state.typeofupdate}/>
    ):(null)}
</div>

            </div>
        )
    }
}

export default MemberContainer

