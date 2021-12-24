import React, { Component } from "react";
import Personalinfo from './subfiles/personalinfo'
import Contact from './subfiles/contact'
import Rotaractclub from './subfiles/rotaractclub'
import Proskills from './subfiles/proskills'
import Educational from './subfiles/educational'
import Otherinterest from './subfiles/otherinterest'
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
    
    }

  }

  render() {
    console.log(this.state)
    return (
      <div className = "changing_container">
        {this.props.data === "personalinfo" ? (
         <Personalinfo pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "Contact" ? <Contact  pers={this.getPersonalData}/> : null}
        {this.props.data === "rotaractclub" ? (
         <Rotaractclub  pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "proskilss" ? (
          <Proskills  pers={this.getPersonalData}/>
        ) : null}
         {this.props.data === "edubackground" ? (
          <Educational  pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "otherinterest" ? (
          <Otherinterest  pers={this.getPersonalData}/>
        ) : null}
        {this.props.data === "about" ? <About  pers={this.getPersonalData}/> : null}
      </div>
    );
  }
}
export default LauncherDiv;
