

import React, { Component } from 'react'

export default class Membership extends Component {

state = {
    email:''
}

sendEmail = (e) =>{
e.preventDefault()
console.log(this.state.email)
}
    render() {
        return (
            <div>
                <Navbar />
                <div>
                <h1>Join now!</h1>
                <p>
                Duis eros purus, accumsan sed aliquam at, molestie quis leo. Nunc sit amet est 
                vehicula, iaculis libero at, tempus ipsum. Proin justo erat, mollis vitae quam sed, 
                lacinia vu
                </p>
            </div>
            <form onSubmit={this.sendEmail}>
                <input type="text" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                <button type="submit">Register</button>
            </form>
            </div>
        )
    }
}

