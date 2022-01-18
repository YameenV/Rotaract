import React from 'react'
import MemberContainer from './membermain'
import { useLocation } from 'react-router-dom'
export default function MemberMain() {
    let location = useLocation()
    let state = location.state
   
    return (
        <div>
            {
                state.email ? (<MemberContainer things = {state}/>):(
                    <div>
                        User denied
                    </div>
                )
            }
            
        </div>
    )
}
