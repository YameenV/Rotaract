import React, { Component } from 'react'

class Otherinterest extends Component {

    state = {
        hobbies:'',
        Interest:''
    }

    render() {
        return (
            <div>
                <form>
                <label>
                    Hobbies
                </label>
                <br/>
                <input type = "text" value={this.state.hobbies} onChange={(e)=>{this.setState({hobbies:e.target.value})}}/>
                   
                <label>
                    Interests
                </label>
                <input type = "text" value={this.state.Interest} onChange={(e)=>{this.setState({Interest:e.target.value})}}/>
                </form>
               

            </div>
        )
    }
}

export default Otherinterest
