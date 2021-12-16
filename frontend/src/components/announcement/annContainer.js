import React, { Component } from 'react'
import Announcement from './announcement'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
class AnnContainer extends Component {

    state = {
        annDATA:[]
    }

    componentWillMount(){
        this.props.getAnnouncement();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState({
                annDATA:nextProps.ann.annData
            })
        }
    }

    render() {
       
        return (
            <div>
                {this.state.annDATA.length > 0 ?(
                    <Announcement adata = {this.state.annDATA}/>
                ):(
                    <Announcement adata = {this.state.annDATA}/>
                )}
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        ann:state.announcement
    }
}

export default connect(mapStateToProps,actions)(AnnContainer)