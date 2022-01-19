import React, { Component } from "react";
// import MemberNames from "./memberNames";
import "../../css/jayteam.css";
import rtlogo from "../../imgs/RCUCoEsLogo.png";
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
class Teampage extends Component {
  state = {
    name: "",
    upToggle: false,
    upToggle2: false,
    date: "",
    points: 0,
    reason: "",
    teams: [],
    teamname: "",
    year:"",
    month:"",
    day:"",
    captainname: "",
    captainarray: [],
    namesarray: [],
    FileLength: 0,
    inputVal: "",
    score:"",
    season:"",
    teamsarray:[]
  };


  componentWillMount(){
    this.props.getTeamsForScore()
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.portdata){
          this.setState({
            teamsarray:nextProps.portdata.userData
          })
    }
  }

  addTeam = (e) => {
    e.preventDefault();

    this.setState({
      teams: [...this.state.teams, this.state.teamname],
      captainarray: [...this.state.captainarray, this.state.captainname],
    });
  };

  setToggle = (e) => {
    if (this.state.upToggle) {
      this.setState({
        upToggle: false,
      });
    } else {
      this.setState({
        upToggle: true,
      });
    }
  };
  sendData = (e) => {
    e.preventDefault();
    
    var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
               
   var obj = {
    season_name: this.state.season,
    team_name: this.state.teamname,
    captain_name: this.state.captainname,
    date_time: datetime
   }
   this.props.AddTeam(obj)
  
  };

  setDate = (d) => {
    let date = d.split('-')
    let year = date[0]
    let month = date[1]
    let day = date[2]
    console.log(date)
    this.setState({
      date:d,
      year,
      month,
      day
    });
  };
  setToggle2 = (e) => {
    if (this.state.upToggle2) {
      this.setState({
        upToggle2: false
      });
    } else {
      this.setState({
        upToggle2: true
      });
    }
  };

  sendTeamData = (e) => {
    e.preventDefault();
    let newObj = {
      teamsArray: this.state.teams,
    };
    
  };

  deleteItem = (key) => {
    let cloneArray = [...this.state.teams];
    cloneArray.splice(key, 1);
    this.setState({
      teams: cloneArray,
    });
  };

  takeFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      const delim = ",";
      const headers = text.slice(0, text.indexOf("\n")).split(delim);
      const rows = text.slice(text.indexOf("\n") + 1).split("\n");

      let FileLength = rows.length;
      const newArray = rows.map((row) => {
        const value = row.split(delim);
        const eachObj = headers.reduce((obj, header, i) => {
          obj[header] = value[i];
          return obj;
        }, {});
        let KeysArr = Object.keys(eachObj);
        if (KeysArr.includes("Full Name")) {
          this.setState({
            namesarray: [...this.state.namesarray, eachObj["Full Name"]],
            FileLength,
          });
        } else if (KeysArr.includes("Name")) {
          this.setState({
            namesarray: [...this.state.namesarray, eachObj["Name"]],
            FileLength,
          });
        }
      });
    }.bind(this);
    reader.readAsText(file);
  };

  clearNames = () => {
    this.setState({
      namesarray: [],
    });
  };


  deleteItem = (key)=>{
    console.log()
    let cloneArray = [...this.state.teams]
    cloneArray.splice(key,1)
    this.setState({
      teams:cloneArray
    })

  }
 

  render() {
    console.log(this.state.teamsarray)
    return (
      <div className="jayteam_main">
        <div className="jayteam_hdr">
          <h1>Welcome Jai</h1>
          <img  alt=""  src={rtlogo}></img>
        </div>
        <div className="jayteam_tmbtn">Team</div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
          placeholder="Search by Name"
        />
        <h5>OR</h5>
        

        <button onClick={this.setToggle2} className="addteambtn">
          Add team
        </button>
        {this.state.upToggle2 ? (
          <div>
            <form onSubmit={this.sendData}>
              <input
                value={this.state.teamname}
                onChange={(e) => this.setState({ teamname: e.target.value })}
                type="text"
                placeholder="Team name"
              />
              <input
                value={this.state.captainname}
                onChange={(e) => this.setState({ captainname: e.target.value })}
                type="text"
                placeholder="Captain name"
              />
               <input
                value={this.state.score}
                onChange={(e) => this.setState({ score: e.target.value })}
                type="text"
                placeholder="Score"
              />
              <input
                value={this.state.season}
                onChange={(e) => this.setState({ season: e.target.value })}
                type="text"
                placeholder="Season"
              />

              

              <button onClick={this.addTeam}>Add</button>

              <div className="jayteam_conatiner">
                {this.state.teams ? (
                  <div className="allteamsselected">
                    {this.state.teams.map((item, i) => (
                      <span className="jayselectedteams">
                        <span>{item}</span>
                        <button
                          className="jayteam_selteambutton"
                          onClick={(e) => this.deleteItem(i)}
                        >
                          X
                        </button>
                      </span>
                    ))}
                  </div>
                ) : (
                  <div>0 teams selected</div>
                )}
                {this.state.teams.length} teams selected
              </div>
              <div className="updtrestbtn">
                <button type="submit">
                  Update
                </button>
                <button type="reset" className="resetbtn_jayteam">
                  Reset
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    tdata:state.team,
    portdata:state.portfolio
  }
}

export default connect(mapStateToProps,actions)(Teampage);