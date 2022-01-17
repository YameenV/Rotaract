import React, { useEffect, useState } from 'react'
import '../../css/core_login.css'
import Navbar from '../navbar/navbar'
import {auth} from '../firebase/config.js'
import {signInWithPopup,GoogleAuthProvider,getIdToken} from "firebase/auth";


function Coreregister() {
    const [user, setuser] = useState([])


    const SignWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((re) => {
            if(!onSign(re.user)){
                throw new Error("Not a Rotaract Memeber")
            }
            else{
                console.log(re)
                console.log("Token",re._tokenResponse.idToken)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function onSign(googleUser) {
        const whitelist = ["yameenvinchu38@gmail.com","pandeysandeep1190@gmail.com"];
        const userHasAccess = whitelist.some(
            function(email){
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            sodales dolor vitae porttitor sagittis. Ut in nunc at magna cursus
            malesuada. In sodales libero at faucibus pulvinar.
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
export default Coreregister
