import React, { Component } from 'react'
import "../../../css/portfolio.css"

class Personalcard extends Component {
    render() {
        let personaldata =this.props.personaldata
        
        let contacts = this.props.contacts
        let image = "https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo"
        return (
          <div className="pro-personal_div">
            <div className="pro-personalimgname">
              <div className="pro-personal_imgcon">
                <img className="pro-personal_img" src={image} />
              </div>
              <h2 className="pro-personal_name">
                <b>{personaldata.fullname}</b>
              </h2>
            </div>
            <div className="pro-personaltextcon">
              <div className="pro-personal_text">
                <i class="fas fa-birthday-cake"></i>
                {personaldata.age}
              </div>
              <div className="pro-personal_text">
                <i class="fas fa-venus-mars"></i>
                {personaldata.gender}
              </div>
              <div className="pro-personal_text">
                <i class="fas fa-map-marker-alt"></i>
                {personaldata.district}
              </div>
              <div className="pro-personal_text">
                <i class="fas fa-phone"></i>
                {contacts.mobile_number}
              </div>
              <div className="pro-personal_text">
                <i class="far fa-envelope"></i>
                {contacts.email_address}
              </div>
              <div className="pro-personal_text">
                <i class="fab fa-twitter"></i>
                {contacts.twitter}
              </div>
              <div className="pro-personal_text">
                <i class="fab fa-whatsapp"></i>
                {contacts.whatsapp}
              </div>
            </div>
          </div>
        );
    }
}
export default Personalcard
