import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../css/welcome_jay.css";
import rtlogo from "../../imgs/Background.png";

class Welcome_page extends Component {
  redToTeam = (e) => {
    e.preventDefault();
    this.props.history.push("/admin_team");
  };

  redToIndi = (e) => {
    e.preventDefault();
    this.props.history.push("/admin_individual");
  };

  render() {
    return (
      <div className="wlcmjay_main">
        <div className="wlcmjay_hdr">
          <h1>Welcome Jai</h1>
          <img src={rtlogo}></img>
        </div>
        <div className="wlcm_btn">
          <button
            className="team_btn"
            onClick={(e) => this.redToTeam(e)}
            type="button"
            value="Team"
          >
            Team
          </button>
          <button
            className="indi_btn"
            onClick={(e) => this.redToIndi(e)}
            type="button"
            value="Individual"
          >
            Individual
          </button>
        </div>
      </div>
    );
  }
}
export default Welcome_page;
