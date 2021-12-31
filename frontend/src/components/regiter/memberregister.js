import React,{useState} from 'react'

function MemberRegister() {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    return (
        <div>
            <form>
            <input type = 'text' />
            <input type = 'password' />
            </form>
        </div>
    )
}
export default MemberRegister