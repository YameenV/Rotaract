import React from 'react'
import MemberContainer from './membermain'
import { useLocation } from 'react-router-dom'
export default function MemberMain() {
    let location = useLocation()
    let state = location.state
    console.log(location,"this is location")
   
    return (
        <div>
            {
                state ? (<MemberContainer things = {state}/>):(
                    <MemberContainer/>
                )
            }
            
        </div>
    )
}
