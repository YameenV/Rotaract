import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'
import Coreregister from './coreregister';
 class CoreConatainer extends Component {

  takeId = (id) =>{
    if(id){
      this.props.checkAlreadyThere(id)
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.portdata){
      console.log(nextProps.portdata)
    }
  }

  render() {
    return (
        <div>
            <Coreregister OneFunction ={this.takeId}/>
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    portdata:state.portfolio
  }
}


export default connect(mapStateToProps,actions)(CoreConatainer)
