import React, { useState } from "react";
import "../../css/admin_login_jay.css";

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
        <div>
          <h1>Login</h1>
          <p>Sign in and start managing your leaderboard</p>
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
