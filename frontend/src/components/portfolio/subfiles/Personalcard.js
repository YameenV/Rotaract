import React, { Component } from 'react'

class Personalcard extends Component {
    render() {
        let personaldata =this.props.personaldata
        let contacts = this.props.contacts
        return (
            <div>
                
            <div>Age: {personaldata.age}</div>
            <div>Gender: {personaldata.gender}</div>
            <div>District: {personaldata.district}</div>
            <div>Mobile number: {contacts.mobile_number}</div>
            <div>Email address: {contacts.email_address}</div>
            <div>Twitter: {contacts.twitter}</div>
            <div>Whatsapp: {contacts.whatsapp}</div>


            </div>
        )
    }
}
export default Personalcard
