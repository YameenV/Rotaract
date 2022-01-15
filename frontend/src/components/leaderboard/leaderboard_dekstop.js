import React, { Component } from "react";
import '../../css/leaderboard.css'
import ListOfPPL from "./listcomponent/listofppl";
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from '../../actions/index'
import {  ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import Navbar from '../../components/navbar/navbar'
import neu from "../../background/prot.mp4"

class Leaderboard_dekstop extends Component {
  state = {
    inputVal: "",
    indidata: []  
  };

  setVal = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  getUserBoard = () => {
    this.props.getLeaderUserData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        indidata: nextProps.data.teamData
      })
    }
  }


  render() {

    return (


      <div className="leader_main">
        
        <div className="leader_header">
        <Navbar />

          
          


          <div className="leader_title">LEADERBOARD</div>
          <video autoPlay muted loop
            style={{
              objectFit: "contain",
              width: "100%",
              height:"inherit",
              // height:"100%",
             mixBlendMode: "screen",
              position: "fixed",
              left: "0",
              // transform: "scale(-1,1)",

              overflow:"hidden" }}
          >
            <source src={neu} type="video/mp4" />
          </video>

          <p className="leader_Mantaintext">
            Maintained By Jai Prajapat - Human Resource & Development Director
          </p>
          
          <div className="leader_button-username">
            <div className="leader-button-toggle">
            <ButtonGroup className="leader_button_group">
              <div className="leader_button_1">Team</div>
              <div onClick={this.getUserBoard} className="leader_button_2">Individual</div>
            </ButtonGroup>
            </div>
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
          ) : (
            <ListOfPPL rawData={this.state.indidata} keyword={this.state.inputVal} />
          )

        }



        <footer className="leader_footer">
          <p className="leader_footer-text">FOOOTER</p>
        </footer>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.team
  }
}


export default connect(mapStateToProps, actions)(Leaderboard_dekstop);
