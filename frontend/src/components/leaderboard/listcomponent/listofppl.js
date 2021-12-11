import React, { useEffect } from 'react'
import '../../../css/leaderboard.css'

const ListOfPPL = (props) => {
    let data = props.rawData
    console.log(data)
    const returnList = (pdata) => (
        pdata ?
            pdata.filter((item) => {
                if (props.keyword === "") {
                    return item
                }
                else if (item.name.toLowerCase().includes(props.keyword.toLowerCase())) {
                    return item
                }
            }).map((item, i) => (

                <div className="leader_list-group">
                    <div classname="leader_list-group-number">{i}</div>
                    <div><img classname="leader_list-group-number" src={item.image}></img></div>
                    <div classname="leader_list-group-team"style={{width:"100px", textAlign:"center"}}>Alliance</div>
                    <div classname="leader_list-group-name"style={{width:"100px", textAlign:"center"}} >{item.name}</div>
                    <div classname="leader_list-group-score" >{item.total}</div>
                </div>
            ))
            : null
    )
   


    return (
        <div>
            {returnList(data)}
        </div>
    )
}

export default ListOfPPL
