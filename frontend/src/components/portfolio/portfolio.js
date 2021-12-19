import React, { Component } from 'react'
import Personalcard from './subfiles/Personalcard'
import Scoregraph from './subfiles/Scoregraph'
import OtherData from './subfiles/otherData.js'
import "../../css/portfolio.css"


class Portfolio extends Component {


    render() {
        let recData = this.props.alldata
        return (
            <div classname="pro-contaner">
                <div className="pro-cont-presonal_graph">
                <div className='pro-personal'>
                <Personalcard personaldata = {recData.personalinfo} contacts = {recData.contacts}/>
                </div>
               
                <div className='pro-graph'>
                    <Scoregraph/>
                </div>
                </div>

                <div>
                    <OtherData 
                    about = {recData.about} 
                    otherInterest = {recData.otherinterest} 
                    proskills = {recData.professionalskill} 
                    rotractClub={recData.rotractClub}
                    education_background={recData.education_background}
                    />
                </div>
               
            </div>
        )
    }
}
export default Portfolio