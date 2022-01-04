import React from 'react'
import '../../css/core_login.css'
import Navbar from '../navbar/navbar'
import {auth} from '../firebase/config.js'
import {signInWithPopup,GoogleAuthProvider} from "firebase/auth";


 function Coreregister() {

    const SignWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((re) => {
            if(!onSign(re.user)){
                throw new Error("Not a Rotaract Memeber")
            }
            else{
                console.log(re)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function onSign(googleUser) {
        const whitelist = ['yameenvinchu38@gmail.com'];
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
        <div className='core_login-main'>
            <Navbar/>
            <div className='core_login-conn'>
            <div className='core_login-text'> Member Login</div>
            <button className='core_login-but' type='submit'onClick={SignWithGoogle}>Login With Google</button>
            </div>
        </div>
    )
}
export default Coreregister
