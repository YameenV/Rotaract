import React, { Component } from 'react'
import '../../css/register.css'
import Navbar from '../navbar/navbar'
import ROTLOGO from "../../imgs/Background.png";
export default class index extends Component {
  state = {
    email: "",
  };

  sendEmail = (e) => {
    e.preventDefault();
    console.log(this.state.email);
  };
  render() {
    return (
      <div className="memregister_main">
        <Navbar />
        <div className="memregister-con">
          <div className="memeregister_text_image">
            <div className="memeregister_text">
              <h1>Join now!</h1>
              <p>
                
            What are your waiting for ? <br/>
            Register and Join the club now to experience the expansion of the universe !!
              </p>
            </div>
            <img className="memregister_rotLogo-image" src={ROTLOGO} />
          </div>
          {/* <div className='memeregister_button-con'> */}
          <form className="memeregister_button-div" onSubmit={this.sendEmail}>
            <input
              className="memeregister_button-in"
              type="text"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Email"
            />
            <button className="memeregister_button-button" type="submit">
              Register
            </button>
          </form>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

