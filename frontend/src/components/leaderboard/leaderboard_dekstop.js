import React, { Component } from "react";
import '../../css/leaderboard.css'
import ListOfPPL from "./listcomponent/listofppl";
import ROTLOGO from "../../imgs/RCUCoEsLogo.png";
import search from "../../icons/search.png";
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from '../../actions/index'
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import Navbar from '../../components/navbar/navbar'
import neu from "../../background/leaderboard.mp4"

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
          <video autoPlay muted loop
            style={{
              objectFit: "cover",
              width: "100%",
              height:"inherit",
              // height:"100%",
              zIndex:"-1",
              position: "fixed",
              left: "0",
              overflow:"hidden"

            }}
          >
            <source src={neu} type="video/mp4" />
          </video>


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
