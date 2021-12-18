import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import "../../css/admin_login_jay.css";

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
        <div>
          <h1>Login</h1>
          <p>Sign in and start managing your leaderboard</p>
        </div>
        <form onSubmit={this.sendLoginInfo}>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.setUserName(e.target.value)}
          />
          <br />
          <label>password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Loginpage