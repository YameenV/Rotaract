import React, { Component } from 'react'
import Personalcard from './subfiles/Personalcard'
import Scoregraph from './subfiles/Scoregraph'
import OtherData from './subfiles/otherData.js'

class Portfolio extends Component {
    render() {
        return (
            <div>

                <div>
                <Personalcard/>
                </div>
               
                <div>
                <Scoregraph/>
                </div>

                <div>
                    <OtherData/>
                </div>
               
            </div>
        )
    }
}
export default Portfolio