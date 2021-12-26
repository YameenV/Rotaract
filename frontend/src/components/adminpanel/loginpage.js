import React, { useState } from "react";
import "../../css/admin_login_jay.css";
import rtlogo from "../../imgs/RCUCoEsLogo.png";

function Loginpage(props) {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  
  const sendToWelcome =(e) =>{
    e.preventDefault();
    props.history.push("/admin_welcome");
  }
  return (
    <div>
      <div className="admin_panel_login_main">
        <img src={rtlogo}></img>
        <div className="jay_login">
          <div className="jay_header_txt">
            <h1>Login</h1>
            <p>Sign In and Start Managing your Leaderboard!</p>
          </div>
          <form onSubmit={sendToWelcome}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => this.setUserName(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => this.setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Loginpage;
