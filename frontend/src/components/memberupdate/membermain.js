import React, { Component } from 'react'
import LauncherDiv from './launcherDiv'
import '../../css/memberupdate.css'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import MemberPic from "../../imgs/ashutosh1.jpg";
import Navbar from '../navbar/navbar';
import mem from '../../background/memupdate.mp4'

class MemberContainer extends Component {

    state = {
        typeofupdate: 'personalinfo'
    }


    changeType = (t) => {
        this.setState({
            typeofupdate: t
        })
    }

    sendUser = (data) => {
        if (data) {
            this.props.createUser(data)
        }
    }


    render() {

        return (
            <div className="main_member">
                <video autoPlay muted loop
                    style={{
                        position:"absolute",
                        objectFit:"cover",
                        width:"100%",
                        height:"100%",
                        zIndex:"-1",
                        position:"fixed",
                        top:"0",
                        left:"0"
                      }}
                >
                    <source src={mem} type="video/mp4" />
                </video>

                <Navbar />

                <div className="member_logo">
                    <img className="member_rotimage" src={MemberPic} />
                </div>
                <div className="member_container">
                    {/* <div className="main_member_name"> */}
                    <div className="member_name">Ashutosh Upadhyay</div>
                    <div className="member_status">President</div>
                    {/* </div> */}
                    <div className="main_data">

                        <div className="button_div">
                            <div className="changer_buttons">
                                <button className="button" onClick={(e) => this.changeType(e.target.value)} value="personalinfo">Personal information</button>
                                <button className="button" onClick={(e) => this.changeType(e.target.value)} value="Contact">Contact</button>
                                <button className="button" onClick={(e) => this.changeType(e.target.value)} value="rotaractclub">Rotaract Club</button>
                                <button className="button" onClick={(e) => this.changeType(e.target.value)} value="proskilss">Professional Skills</button>
                                <button className="button" onClick={(e) => this.changeType(e.target.value)} value="edubackground">Educational background</button>
                                <button className="button" onClick={(e) => this.changeType(e.target.value)} value="otherinterest">Other interests</button>
                                <button className="button" onClick={(e) => this.changeType(e.target.value)} value="about">About</button>
                            </div>
                        </div>
                        <div className="member_line">
                            <div className="vl"> </div>
                        </div>
                        <div className="unknown">
                            {this.state.typeofupdate !== '' ? (
                                <LauncherDiv data={this.state.typeofupdate} sender={this.sendUser} />
                            ) : (null)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.portfolio
    }
}

export default connect(mapStateToProps, actions)(MemberContainer)

