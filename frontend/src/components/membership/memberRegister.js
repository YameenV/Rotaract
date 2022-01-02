import React, { Component } from 'react'
import '../../css/register.css'
import Navbar from '../navbar/navbar'
import ROTLOGO from "../../imgs/RCUCoEsLogo.png";
export default class index extends Component {

    state = {
        email: ''
    }

    sendEmail = (e) => {
        e.preventDefault()
        console.log(this.state.email)
    }
    render() {
        return (
            <div className='memregister_main'>
                <Navbar/>
                <div className='memregister-con'>
                <div className='memeregister_text_image'>
                    <div className='memeregister_text'>
                    <h1>Join now!</h1>
                    <p>
                        Duis eros purus, accumsan sed aliquam at, molestie quis leo. Nunc sit amet est
                        vehicula, iaculis libero at, tempus ipsum. Proin justo erat, mollis vitae quam sed,
                        lacinia vu
                    </p>
                    </div>
                    <div className='memregister_rotLogo-image-div'>
                    <img className="memregister_rotLogo-image" src={ROTLOGO} />
                    </div>
                </div>
                {/* <div className='memeregister_button-con'> */}
                <form className="memeregister_button-div" onSubmit={this.sendEmail}>
                    <input className="memeregister_button-in"type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    <button className="memeregister_button-button" type="submit">Register</button>
                </form>
                </div>
                {/* </div> */}
            </div>
        )
    }
}

