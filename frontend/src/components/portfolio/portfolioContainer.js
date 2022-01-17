import React, { Component } from "react";
import Portfolio from "./portfolio";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import "../../css/portfolio.css"
import Navbar from "../navbar/navbar"
import port from "../../background/PortfolioQuasar.mp4"
import bgastro from "../../background/astro_bw.mp4"

class PortFolioContainer extends Component {
  state = {
    full_name: "",
    personalinfo: {
      age: 20,
      bloodgroup: "A+",
      fullname: "Abhinav pandey",
      gender: "male",
      district: "palghar",
    },
    about: {
      describe: "I am 20 yrs old",
      yourself_in_ten_years: "I cant see the future",
    },
    contacts: {
      email_address: "somefakeemail@123",
      github: "githibAccount21",
      linkedin: "linkednaccount",
      mobile_number: "941242587",
      twitter: "fakeTwitter",
      whatsapp: "941242587",
    },
    otherinterest: {
      Interest: ["typing"],
      hobbies: ["typing"],
    },
    professionalskill: {
      achievement: ["NA"],
      artical: ["NA"],
      experience: 4,
      field_of_interest: ["NA"],
      future_goal: "NA",
      internship: ["NA"],
      project: ["hello world"],
      skill: ["NA"],
    },
    education_background: {
      currently_studying: "college",
      certification_done: ["school"],
      future_plan: ["no plans"],
      book: ["mein kampf"],
    },
    rotractClub: {
      joning_reason: "exciting",
      avenue: ["NA"],
      current_position: "GBM",
      number_of_year: "0",
      suggestion: "NA",
      testimonial: "NA",
    },
  };

  findRtr = (e) => {
    e.preventDefault();
    console.log(this.state.full_name);
    if (this.state.full_name !== "") {
      this.props.getUserByName(this.state.full_name);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.portdata.userData) {
      let data = nextProps.portdata.userData[0];
      let checker = nextProps.portdata.userData.response;
      if (checker === undefined) {
        this.setState({
          personalinfo: {
            age: data.age,
            bloodgroup: data.blood_group,
            fullname: data.full_name,
            gender: data.gender,
            district: data.district,
          },
          about: {
            describe: data.about.describe[0],
            yourself_in_ten_years: data.about.yourself_ten_years[0],
          },
          contacts: {
            email_address: data.contact.email_address,
            github: data.contact.github,
            linkedin: data.contact.linkedin,
            mobile_number: data.contact.mobile_number,
            twitter: data.contact.twitter,
            whatsapp: data.contact.whatsapp,
          },
          otherinterest: {
            Interest: data.other_interest.Interest,
            hobbies: data.other_interest.hobbies,
          },
          professionalskill: {
            achievement: data.professional_skill.achievement,
            artical: data.professional_skill.artical,
            experience: data.professional_skill.experience,
            field_of_interest: data.professional_skill.feild_of_interest,
            future_goal: data.professional_skill.future_goal,
            internship: data.professional_skill.internship,
            project: data.professional_skill.project,
            skill: data.professional_skill.skill,
          },
          education_background: {
            currently_studying: data.education_background.currently_studying,
            certification_done: data.education_background.certification_done,
            future_plan: data.education_background.future_plan,
            book: data.education_background.book,
          },
          rotractClub: {
            joning_reason: data.rotractClub.joning_reason,
            avenue: data.rotractClub.avenue,
            current_position: data.rotractClub.current_position,
            number_of_year: data.rotractClub.number_of_year,
            suggestion: data.rotractClub.suggestion,
            testimonial: data.rotractClub.testimonial,
          },
        });
      } else {
        let fourofour = checker.data.detail;
        alert(fourofour);
      }
    }
  }
  render() {
    return (
      <div className="pro-main">
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            mixBlendMode: "screen",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            position: "fixed",
          }}
        >
          <source src={bgastro} type="video/mp4" />
        </video>
        <Navbar />

        <div className="pro-conn">
          <form onSubmit={this.findRtr} className="pro-search-con">
            <input
              className="pro-input"
              type="text"
              value={this.state.full_name}
              onChange={(e) => this.setState({ full_name: e.target.value })}
            />
            <button className="pro-button" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
          {this.state.personalinfo.age ? (
            <Portfolio alldata={this.state} />
          ) : null}
        </div>
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
