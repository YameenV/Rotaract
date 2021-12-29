import React, { Component } from 'react'
import "../../../css/portfolio.css"

class Personalcard extends Component {
    render() {
        let personaldata =this.props.personaldata
        
        let contacts = this.props.contacts
        let image = "https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo"
        return (
            <div className='pro-personal_div'>
            <div className='pro-personal_imgcon'><img className='pro-personal_img' src={image}/></div>
            <div className='pro-personal_name'>{personaldata.fullname}</div>
            <div className='pro-personal_text'>Age: {personaldata.age}</div>
            <div className='pro-personal_text'>Gender: {personaldata.gender}</div>
            <div className='pro-personal_text'>District: {personaldata.district}</div>
            <div className='pro-personal_text'>Mobile number: {contacts.mobile_number}</div>
            <div className='pro-personal_text'>Email address: {contacts.email_address}</div>
            <div className='pro-personal_text'>Twitter: {contacts.twitter}</div>
            <div className='pro-personal_text'>Whatsapp: {contacts.whatsapp}</div>
            </div>
        )
    }
}
export default Personalcard
