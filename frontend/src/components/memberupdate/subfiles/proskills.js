import React, { Component } from "react";
import "../../../css/memberupdate.css";

class Proskills extends Component {
  state = {
    skill: "",
    feild_of_interest: "",
    experience: "31",
    project: "",
    artical: "",
    intership: "",
    future_goal: "",
  };

  giveData = (e) => {
    e.preventDefault();
    let skill = this.state.skill.split(',')
    let feild_of_interest = this.state.feild_of_interest.split(',')
    let project = this.state.project.split(',')
    let artical = this.state.artical.split(',')
    let intership =this.state.intership.split(',')
    let obj = {
      skill,
      feild_of_interest,
      experience:this.state.experience,
      project,
      artical,
      intership,
      future_goal:this.state.future_goal
    }

    this.props.pers("proskills", obj);
    this.props.takeChange('edubackground')
  };

  render() {
    return (
      <div className="professional_div">
        <form
          className="rot_form"
          onSubmit={this.giveData}
          className="professional_form"
        >
          <label>
            Technology/ Programing Languages /Software /Skill you know :
          </label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ skill: e.target.value });
            }}
            value={this.state.skill}
          />

          <label>Field of Interest :</label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ feild_of_interest: e.target.value });
            }}
            value={this.state.feild_of_interest}
          />

          <label>Experience in that field :</label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ experience: e.target.value });
            }}
            value={this.state.experience}
          />

          <label>
            Projects / Open source contribution / Articles / blog you had worked
            on
          </label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ project: e.target.value });
            }}
            value={this.state.project}
          />

          <label>Internship you had done :</label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ intership: e.target.value });
            }}
            value={this.state.intership}
          />

          <label>Your future goal :</label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ future_goal: e.target.value });
            }}
            value={this.state.future_goal}
          />

          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default Proskills;
