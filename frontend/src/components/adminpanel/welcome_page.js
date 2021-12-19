import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../css/welcome_jay.css";

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
        <div className="wlcmjay_gpcard">
          <h1>Welcome Jai</h1>
          <button onClick={(e) => this.redToTeam(e)} type="button" value="Team">
            Team
          </button>
          <button
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
