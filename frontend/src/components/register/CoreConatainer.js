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
      if(check === "notfound"){
        let obj = {
          id:this.state.id,
          img:this.state.user.photoURL,
          full_name: "dgsrg",
          age: 21,
          gender: "agrsg",
          blood_group: "argae",
          district: "aweg4r",
          city: "wsgva",
          contact: {
            mobile_number: "awre",
            email_address: "ergersa",
            linkedin: "arhedrh",
            twitter: "baerfb",
            github: "wasfrg",
            whatsapp: "argawrg"
          },
          rotractClub: {
            joning_reason: "garhbsr",
            avenue: ['grgw'],
            current_position: "gwegeth",
            number_of_year: "aarh",
            suggestion: "arhbeh",
            testimonial: "aetbadse"
          },
          professional_skill: {
            skill: ["gfwsrg"],
            feild_of_interest: ["gwrg"],
            experience: 21,
            project: ["faieopof"],
            artical: ["sigvins"],
            intership: ["aineifp"],
            achievement: ["psrbinsnr"],
            future_goal: "aefwg"
          },
          education_background: {
            currently_studying: "bseth",
            certification_done: ["ianesf"],
            future_plan: ["pepignwe"],
            book: ["aeignwpoeg"]
          },
          other_interest: {
            hobbies: ["psirnfbpowsmr"],
            Interest: ["ojawof"]
          },
          about: {
            describe: ["dmogove"],
            yourself_ten_years: ["asodev"]
          }
        }
        this.props.history.push('/member/update')
        this.props.makeUser(this.state.id,obj)
      }
      else if(check === "userexist"){
        this.props.history.push('/member/update')
      }

    }
  }

  render() {
  console.log(this.props)
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
