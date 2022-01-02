import React,{useState} from 'react'
import '../../css/core_login.css'
import Navbar from '../navbar/navbar'


 function Coreregister() {


    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const sendMemberLogin = (e) =>{
        e.preventDefault();
        let info = {
            username,
            password
        }
        console.log(info)
    }

    return (
        <div className='core_login-main'>
            <Navbar/>
            <div className='core_login-conn'>
            <div className='core_login-text'> Member Login</div>
            {/* <form onSubmit={sendMemberLogin}> */}
            {/* <label>Username</label><br/>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type = 'text' /><br/>
            <label>Password</label><br/>
            <input value={password} type = 'password' onChange={(e)=>setPassword(e.target.value)}/>
            <br/> */}
            <button className='core_login-but' type='submit'>Login With Google</button>
            {/* </form> */}
            </div>
        </div>
    )
}
export default Coreregister
