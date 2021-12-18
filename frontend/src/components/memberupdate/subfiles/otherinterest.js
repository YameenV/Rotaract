import React, { Component } from 'react'
import '../../../css/memberupdate.css'

class Otherinterest extends Component {

    state = {
        hobbies:'',
        Interest:''
    }

    render() {
        return (
            <div className="other_div">
                <form className="other_form">
                <label>Hobbies</label>
                
                <input type = "text" value={this.state.hobbies} onChange={(e)=>{this.setState({hobbies:e.target.value})}}/>
                   
                <label>
                    Interests
                </label>
                <input type = "text" value={this.state.Interest} onChange={(e)=>{this.setState({Interest:e.target.value})}}/>
                
                <button type="submit">Submit</button>
                </form>

                
               

            </div>
        )
    }
}

export default Otherinterest
