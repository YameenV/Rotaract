import React, { Component } from 'react'
import '../../../css/memberupdate.css'

class Contact extends Component {

    state = {
        mobile_number:'',
        email_address:'',
        linkedin:'',
        twitter:'',
        github:'',
        whatsapp:''
    }
    sendData = (e) =>{
        e.preventDefault();
        this.props.pers('contact',this.state)
    }
    render() {
        return (
            <div className="contact_div" >
              <form className="contact_form" onSubmit={this.sendData}>
                <label>Contact No.</label>
                <input value={this.state.mobile_number} onChange={(e)=>{this.setState({mobile_number:e.target.value})}} type="text"/>

                <label>Email</label>
                <input value = {this.state.email_address} onChange={(e)=>{this.setState({email_address:e.target.value})}} type="text"/>

                <label>LinkedIn</label>
                <input value = {this.state.linkedin} onChange={(e)=>{this.setState({linkedin:e.target.value})}} type="text"/>

                <label>Twitter</label>
                <input value = {this.state.twitter} onChange={(e)=>{this.setState({twitter:e.target.value})}} type="text"/>

                <label>Github</label>
                <input value={this.state.github} onChange={(e)=>{this.setState({github:e.target.value})}} type="text"/>

                <label>Whatsapp</label>
                <input value = {this.state.whatsapp} onChange={(e)=>{this.setState({whatsapp:e.target.value})}} type="text"/>

                <button type="submit">Submit</button>
              </form>
            </div>
        )
    }
}
export default Contact
