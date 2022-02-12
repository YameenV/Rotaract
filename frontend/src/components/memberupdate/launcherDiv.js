import React, { Component } from "react";
import Personalinfo from './subfiles/personalinfo'
import Contact from './subfiles/contact'
import Rotaractclub from './subfiles/rotaractclub'
import Proskills from './subfiles/proskills'
import Educational from './subfiles/educational'
import Otherinterest from './subfiles/otherinterest'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
import About from './subfiles/about'
import '../../css/memberupdate.css'

class LauncherDiv extends Component {

  state = {
    
      full_name: "",
      age: 0,
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
        avenue: [],
        current_position: "",
        number_of_year: "",
        suggestion: "",
        testimonial: ""
      },
      professional_skill: {
        skill: [],
        feild_of_interest: [],
        experience: 0,
        project: [],
        artical: [],
        intership: [],
        achievement: [],
        future_goal: ""
      },
      education_background: {
        currently_studying: "",
        certification_done: [],
        future_plan: [],
        book: []
      },
      other_interest: {
        hobbies: [],
        Interest: []
      },
      about: {
        describe: [],
        yourself_ten_years: []
      }
    
  }

  getPersonalData = (type,data) =>{
    
    switch(type){
      case 'rotaract':
        this.setState({rotractClub:data})
        break;
      case 'proskills':
        this.setState({professional_skill:data})
        break;
      case 'personalInfo':
        this.setState({
          age:data.age,
          gender:data.gender,
          city:data.place,
          full_name:data.full_name,
          district:data.district
        })
        break;
      case 'otherinterest':
        this.setState({other_interest:data})
        break;
      case 'contact':
        this.setState({contact:data})
        break;
      case 'about':
         this.setState({about:data})
         break;
      case 'education_background':
          this.setState({education_background:data})
          break;
      default:
        return
    }

  }


  send = () =>{
    
    this.props.sender(this.state)
    console.log(this.state,"asas1")
    console.log("hello abhinav")
  }

  changeTaker = (change) =>{
    console.log(change)
    this.props.typeChanger(change)
  }

  render() {
    
    return (
      <div className = "changing_container">
        {this.props.data === "personalinfo" ? (
         <Personalinfo 
         takeChange = {this.changeTaker}
         pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "Contact" ? <Contact 
        takeChange = {this.changeTaker}
        pers={this.getPersonalData}/> : null}
        {this.props.data === "rotaractclub" ? (
         <Rotaractclub 
         takeChange = {this.changeTaker}
         pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "proskilss" ? (
          <Proskills  
          takeChange = {this.changeTaker}
          pers={this.getPersonalData}/>
        ) : null}
         {this.props.data === "edubackground" ? (
          <Educational 
          takeChange = {this.changeTaker}
          pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "otherinterest" ? (
          <Otherinterest 
          takeChange = {this.changeTaker}
          pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "about" ? <About 
        takeChange = {this.changeTaker}
        submitter = {this.send}
        pers={this.getPersonalData}/> : null}

        
      </div>
    );
  }
}


export default LauncherDiv;
