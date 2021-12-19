import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import "../../css/admin_login_jay.css";
import rtlogo from "../../imgs/RCUCoEsLogo.png";

class Loginpage extends Component {
  state = {
    username: "",
    password: "",
  };

  setUserName = (u) => {
    this.setState({
      username: u,
    });
  };
  setPassword = (p) => {
    this.setState({
      password: p,
    });
  };

  sendLoginInfo = (e) => {
    e.preventDefault();
    this.props.history.push("/admin_welcome");
  };

  render() {
    return (
      <div className="admin_panel_login_main">
        <img src={rtlogo}></img>
        <div className="jay_login">
          <div className="jay_header_txt">
            <h1>Login</h1>
            <p>Sign In and Start Managing your Leaderboard!</p>
          </div>
          <form onSubmit={this.sendLoginInfo}>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => this.setUserName(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginpage