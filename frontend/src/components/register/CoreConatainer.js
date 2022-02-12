import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'
import Coreregister from './coreregister';


class CoreConatainer extends Component {
  state = {
    user:{},
    id:''
  }

  takeId = (id,user) =>{

    if(id !== ""){
      this.props.checkAlreadyThere(id)
      this.setState({
        user,
        id
      })
    }
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.portdata){
      let check = nextProps.portdata.userData
      console.log(this.state.id)
      if(check === "notfound"){
        let obj = {
          id:this.state.id,
          img:this.state.user.photoURL,
          full_name: this.state.user.displayName,
          age: 21,
          gender: "",
          blood_group: "",
          district: "",
          city: "",
          contact: {
            mobile_number: "",
            email_address: "",
            linkedin: "",
            twitter: "",
            github: "",
            whatsapp: ""
          },
          rotractClub: {
            joning_reason: "",
            avenue: [""],
            current_position: "",
            number_of_year: "",
            suggestion: "",
            testimonial: ""
          },
          professional_skill: {
            skill: [""],
            feild_of_interest: [""],
            experience: 21,
            project: [""],
            artical: [""],
            intership: [""],
            achievement: [""],
            future_goal: ""
          },
          education_background: {
            currently_studying: "",
            certification_done: [""],
            future_plan: [""],
            book: [""]
          },
          other_interest: {
            hobbies: [""],
            Interest: [""]
          },
          about: {
            describe: [""],
            yourself_ten_years: [""]
          }
        }
         this.props.history.push({
          pathname:`/member/update/${this.state.user.displayName}`,
          state:{displayName:this.state.user.displayName,uid:this.state.id}
        }) 
        
         this.props.makeUser(this.state.id,obj) 
      
      }
      else{
        this.props.history.push(
        {
          pathname:`/member/update/${this.state.user.displayName}`,
          state:{displayName:this.state.user.displayName,uid:this.state.id}
        })
      }

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
