import React,{useState} from 'react'

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
        <div>
            <form onSubmit={sendMemberLogin}>
            <label>Username</label><br/>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type = 'text' /><br/>
            <label>Password</label><br/>
            <input value={password} type = 'password' onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Coreregister
