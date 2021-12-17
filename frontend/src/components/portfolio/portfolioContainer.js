import React, { Component } from "react";
import Portfolio from "./portfolio";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class PortFolioContainer extends Component {

    state = {
        full_name:"",
        personalinfo:{
          age:0,
          bloodgroup:'',
          fullname:'',
          gender:'',
          district:''
        },
        about:{
          describe:'',
          yourself_in_ten_years:''

        },
        contacts:{
          email_address:'',
          github:'',
          linkedln:'',
          mobile_number:'',
          twitter:'',
          whatsapp:''
        },
        otherinterest:{
          Interest: [],
          hobbies:[]
        },
        professionalskill:{
          achievement:[],
          artical:[],
          experience:'',
          field_of_interest:[],
          future_goal:'',
          internship:[],
          project:[],
          skill:[]
        },
        education_background: {
          currently_studying: '',
          certification_done: [],
          future_plan: [],
          book: []
        },
        rotaractclub:{
          joning_reason:'',
          avenue:[],
          current_position:'',
          number_of_year:'',
          suggestion:'',
          testimonial:''

        }
    }

    findRtr = (e) =>{
        e.preventDefault();
        console.log(this.state.full_name)
        if(this.state.full_name !== ''){
            this.props.getUserByName(this.state.full_name)
        }
    } 

    componentWillReceiveProps(nextProps){
      if(nextProps.portdata){
        let data = nextProps.portdata.userData[0]
        
        this.setState({
          personalinfo:{
            age:data.age,
            bloodgroup:data.blood_group,
            fullname:data.full_name,
            gender:data.gender,
            district:data.district
          },
          about:{
            describe:data.about.describe[0],
            yourself_in_ten_years:data.about.yourself_ten_years[0]
          },
          contacts:{
            email_address:data.contact.email_address,
            github:data.contact.github,
            linkedin:data.contact.linkedin,
            mobile_number:data.contact.mobile_number,
            twitter:data.contact.twitter,
            whatsapp:data.contact.whatsapp
          },
          otherinterest:{
            Interest: data.other_interest.Interest,
            hobbies:data.other_interest.hobbies
          },
          professionalskill:{
            achievement:data.professional_skill.achievement,
            artical:data.professional_skill.artical,
            experience:data.professional_skill.experience,
            field_of_interest:data.professional_skill.feild_of_interest,
            future_goal:data.professional_skill.future_goal,
            internship:data.professional_skill.internship,
            project:data.professional_skill.project,
            skill:data.professional_skill.skill
          },
          education_background:{
            currently_studying: data.education_background.currently_studying,
            certification_done: data.education_background.certification_done,
            future_plan: data.education_background.future_plan,
            book: data.education_background.book
          },
          rotractClub: {
            joning_reason:data.rotractClub.joning_reason,
            avenue: data.rotractClub.avenue,
            current_position: data.rotractClub.current_position,
            number_of_year: data.rotractClub.number_of_year,
            suggestion: data.rotractClub.suggestion, 
            testimonial: data.rotractClub.testimonial
          }

        })
      }
    }


  render() {
     
    return (
      <div>
        <div>
          <form onSubmit={this.findRtr}>
            <input
              type="text"
              value={this.state.full_name}
              onChange={(e) => this.setState({ full_name: e.target.value })}
            />
            <button type="submit">Find</button>
          </form>
        </div>
        {
          this.state.personalinfo.age ? (
            <Portfolio alldata = {this.state}/>
          ):(
            null
          )
        }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    portdata: state.portfolio,
  };
};

export default connect(mapStateToProps, actions)(PortFolioContainer);
