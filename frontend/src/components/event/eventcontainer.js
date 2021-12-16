import React, { Component } from 'react'
import Eventlanding from './eventlanding'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
class Eventcontainer extends Component {

    state = {
        eData:[]
    }

    componentWillMount(){   
        this.props.getEvents();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState({
                eData:nextProps.events.eventData
            })
        }
    }

    render() {
        
        return (
            <div>
                {
                    this.state.eData.length > 0 ? (
                        <Eventlanding data = {this.state.eData}/>
                    ):(
                        <Eventlanding data = {this.state.eData}/> 
                    )
                }
               
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        events: state.event
    }
}

export default connect(mapStateToProps,actions)(Eventcontainer)  