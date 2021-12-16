import React, { Component } from "react";
import '../../css/leaderboard.css'
import ListOfPPL from "./listcomponent/listofppl";
import ROTLOGO from "../../imgs/RCUCoEsLogo.png";
import search from "../../icons/search.png";
import {connect} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from '../../actions/index'
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
// import Navbar from '../../components/navbar/navbar'
class Leaderboard_dekstop extends Component {
  state = {
    inputVal: "",
    indidata:[]
  };

  setVal = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  getUserBoard = () =>{
    this.props.getLeaderUserData()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){
      this.setState({
        indidata:nextProps.data.teamData
      })
    }
  }


  render() {
    
    return (
      
     
      <div className="leader_main">
        <div className="leader_header">
          {/* <div className="leader_rotLogo">
            <img className="leader_rotLogo-image" src={ROTLOGO} />
          </div> */}
          <div className="leader_sphere">
            <div className="l_sphere-1"></div>
            <div className="l_sphere-2"></div>
            <div className="l_sphere-3"></div>
            <div className="l_sphere-4"></div>
            <div className="l_sphere-5"></div>
          </div>
          {/* <ul className="navlinks">
            <li>Home</li>
            <li>Login</li>
            <li>Events</li>
            <li>Contact Us</li>
            <li>Announcements</li>
          </ul> */}

          <div className="leader_title">LEADERBOARD</div>

          <p className="leader_Mantaintext">
            Maintained By Jai Prajapat - Human Resource & Development Director
          </p>

          <div className="leader_button-username">

            <ButtonGroup className="leader_button-group">
              <div className="leader_button-1">Team</div>
              <div onClick={this.getUserBoard} className="leader_button-2">Individual</div>
            </ButtonGroup>

            <div className="leader_username-input">
              <div className="leader_search">
                <InputGroup>
                  <FormControl
                    className="leader_inputfield"
                    placeholder="Search"
                    value={this.state.inputVal}
                    onChange={this.setVal}
                    aria-label="Username"
                  />
                </InputGroup>
              </div>
            </div>
          </div>
        </div>

          {
            this.state.indidata.length > 0 ? (
              <div className="leader_list-container">
          <ListOfPPL rawData={this.state.indidata} keyword={this.state.inputVal} />
        </div>
            ):(
              <ListOfPPL rawData = {this.state.indidata} keyword = {this.state.inputVal}/>
            )

          }
        


        <footer className="leader_footer">
          <p className="leader_footer-text">FOOOTER</p>
        </footer>
      </div>
      
    );
  }
}

const mapStateToProps = (state) =>{
return{
  data:state.team
}
}


export default connect(mapStateToProps,actions)(Leaderboard_dekstop);
