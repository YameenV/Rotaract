import React, { useEffect, useState } from 'react'
import '../../css/core_login.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import { auth } from '../firebase/config.js'
import { signInWithPopup, GoogleAuthProvider, getIdToken } from "firebase/auth";
import { checkAlreadyThere } from '../../actions/index'
import { connect } from 'react-redux'

function Coreregister(props) {

  const [user, setuser] = useState([])
  const [authenticated, SetAuthenticated] = useState('')
  let history = useHistory();
  const SignWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        if (!onSign(re.user)) {
          throw new Error("Not a Rotaract Member")
        }
        else {
          SetAuthenticated(re._tokenResponse.idToken)
        
            history.push(
              {
                pathname: '/member/update',
                state: { name: re.user.displayName, email: re.user.email, photo: re.user.photoURL, uid: re.user.uid }
              }
            )

          


        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function onSign(googleUser) {
    const whitelist = ["yameenvinchu38@gmail.com", "pandeysandeep1190@gmail.com"];
    const userHasAccess = whitelist.some(
      function (email) {
        return googleUser.email === email
      }
    )
    if (userHasAccess) {
      return true
    }
    return false
  }

  return (

    <div className="core_login-main">
      <Navbar />
      <div className="core_login-conn">
        <div className="core_login-text"> Member Login</div>
        <div className="core_login-supptext">
          Welcome Saviour ! <br />
          Login to get control of your Planet back.
        </div>
        <button
          className="core_login-but"
          type="submit"
          onClick={SignWithGoogle}
        >
          Login With Google
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    portdata: state.portfolio
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: () => dispatch(checkAlreadyThere())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coreregister)
