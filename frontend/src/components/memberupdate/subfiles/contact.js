import React, { Component } from 'react'

class Contact extends Component {

    state = {
        number:'',
        email:'',
        linkedin:'',
        instagram:'',
        twitter:'',
        github:''
    }
    giveData = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
              <form className="contact_form" onSubmit={this.giveData}>
                <label>Contact No.</label>
                <input value={this.state.number} onChange={(e)=>{this.setState({number:e.target.value})}} type="text"/>

                <label>Email</label>
                <input value = {this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} type="text"/>

                <label>LinkedIn</label>
                <input value = {this.state.linkedin} onChange={(e)=>{this.setState({linkedin:e.target.value})}} type="text"/>

                <label>Instagram</label>
                <input value = {this.state.instagram} onChange={(e)=>{this.setState({instagram:e.target.value})}} type="text"/>

                <label>Twitter</label>
                <input value = {this.state.twitter} onChange={(e)=>{this.setState({twitter:e.target.value})}} type="text"/>

                <label>Github</label>
                <input value={this.state.github} onChange={(e)=>{this.setState({github:e.target.value})}} type="text"/>

                <button type="submit">Submit</button>
              </form>
            </div>
        )
    }
}
export default Contact
