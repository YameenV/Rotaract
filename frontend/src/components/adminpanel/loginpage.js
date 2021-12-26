import React, { useState } from "react";
import "../../css/admin_login_jay.css";
import rtlogo from "../../imgs/RCUCoEsLogo.png";

function Loginpage() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const sendLoginInfo = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <div>
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
        <form onSubmit={sendLoginInfo}>
          <label>Username</label>
          <input type="text" onChange={(e) => setusername(e.target.value)} />
          <br />
          <label>password</label>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
