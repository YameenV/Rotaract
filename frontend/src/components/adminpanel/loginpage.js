import React, { useState } from "react";
import "../../css/admin_login_jay.css";
import rtlogo from "../../imgs/Background.png";

function Loginpage(props) {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const sendToWelcome = (e) => {
    e.preventDefault();
    props.history.push("/admin_welcome");
  };
  return (
    <div>
      <div className="admin_panel_login_main">
        <div className="jay_login">
          <div className="jay_header_txt">
            <h1>Login</h1>
            <p>Sign In and Start Managing your Leaderboard!</p>
          </div>
          <img src={rtlogo}></img>
          <button type="submit">Login with Google</button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
