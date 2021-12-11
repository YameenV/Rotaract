import React, { useEffect } from 'react'
import '../../../css/leaderboard.css'

const ListOfPPL = (props) => {

    // ------------------ api calling demo ---------------------
    // const axios = require('axios').default;
    // function callapi(){
    //     axios
    //     .get('http://127.0.0.1:8000/get_latestannouncement')
    //     .then(res => console.log(res.data))
    //     .catch(error => console.log(error.message))
    // }
    // useEffect(() => {
    //     callapi()
    //   });

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
                    <div classname="leader_list-group-number">{item.srnoval}</div>
                    <div><img classname="leader_list-group-number" src={item.image}></img></div>
                    <div classname="leader_list-group-team"style={{width:"100px", textAlign:"center"}}>{item.team}</div>
                    <div classname="leader_list-group-name"style={{width:"100px", textAlign:"center"}} >{item.name}</div>
                    <div classname="leader_list-group-score" >{item.score}</div>
                </div>
            ))
            : null
    )
    var data = [
        {
            parent: 'leaderpeeps_container one',
            srno: 'leaderpeeps_container one srno',
            srnoval: '1',
            image:"https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo",
            logo: 'leaderpeeps_container one logo',
            nameclass: 'leaderpeeps_container one name',
            name: 'Ashutosh',
            scoreclass: 'leaderpeeps_container one score',
            teamclass: 'leaderpeeps_container one team',
            team: 'Alliance',
            score: '450',
        },
        {
            parent: 'leaderpeeps_container two',
            srno: 'leaderpeeps_container two srno',
            srnoval: '2',
            image:"https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo",
            logo: 'leaderpeeps_container two logo',
            nameclass: 'leaderpeeps_container two name',
            name: 'Sandeep',
            scoreclass: 'leaderpeeps_container two score',
            teamclass: 'leaderpeeps_container two team',
            team: 'Gochi Gang',
            score: '450',
        },
        {
            parent: 'leaderpeeps_container three',
            srno: 'leaderpeeps_container three srno',
            srnoval: '3',
            image:"https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo",
            logo: 'leaderpeeps_container three logo',
            nameclass: 'leaderpeeps_container three name',
            name: 'Riya',
            scoreclass: 'leaderpeeps_container three score',
            teamclass: 'leaderpeeps_container three team',
            team: 'Peaky Blinders',
            score: '450',
        },
        {
            parent: 'leaderpeeps_container four',
            srno: 'leaderpeeps_container four srno',
            srnoval: '4',
            image:"https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo",
            logo: 'leaderpeeps_container four logo',
            nameclass: 'leaderpeeps_container four name',
            name: 'Bhavesh',
            scoreclass: 'leaderpeeps_container four score',
            teamclass: 'leaderpeeps_container four team',
            team: 'Amigos',
            score: '450',
        },
        {
            parent: 'leaderpeeps_container five',
            srno: 'leaderpeeps_container five srno',
            srnoval: '5',
            image:"https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo",
            logo: 'leaderpeeps_container five logo',
            nameclass: 'leaderpeeps_container five name',
            name: 'Ravi',
            scoreclass: 'leaderpeeps_container five score',
            teamclass: 'leaderpeeps_container five team',
            team: 'Hustlers',
            score: '450',
        },
        {
            parent: 'leaderpeeps_container six',
            srno: 'leaderpeeps_container six srno',
            srnoval: '6',
            image:"https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo",
            logo: 'leaderpeeps_container six logo',
            nameclass: 'leaderpeeps_container six name',
            name: 'Rahul',
            scoreclass: 'leaderpeeps_container six score',
            teamclass: 'leaderpeeps_container six team',
            team: 'Musketeers',
            score: '450',
        }

    ]


    return (
        <div>
            {returnList(data)}
        </div>
    )
}

export default ListOfPPL
