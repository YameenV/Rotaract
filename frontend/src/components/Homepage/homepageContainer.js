import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
import Homepage from './homepage'
class HomepageContainer extends Component {

    state = {
        AnnouncementData:[],
        EventData:[],
        
    }


    componentWillMount(){
        this.props.getEvents()
        this.props.getAnnouncement();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
          let edata = nextProps.eventdata.eventData;
          let adata = nextProps.anndata.annData;
          this.setState({
            AnnouncementData: adata,
            EventData: edata,
          });
        }
      }

    

    render() {
        return (
            <div>
                {this.state.AnnouncementData ? (
                    <div>
                        <Homepage 
                        first = {this.state.AnnouncementData}  second = {this.state.EventData}/>
                    </div>
                ):(
                    <div>

                    <Homepage first = {[]}  second ={[]}/>
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        eventdata: state.event,
        anndata: state.announcement,
        teamdata: state.team,
    }
}

export default connect(mapStateToProps,actions)(HomepageContainer)