import React, { Component } from 'react'
import Portfolio from './portfolio'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
 class PortFolioContainer extends Component {
    render() {
        return (
            <div>
                <Portfolio/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        portdata:state.portfolio
    }
}

export default connect(mapStateToProps,actions)(PortFolioContainer)

