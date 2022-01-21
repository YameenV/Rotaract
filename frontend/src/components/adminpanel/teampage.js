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
    if(nextProps.portdata){
      if(nextProps.portdata.userData === 'Sucess'){
        window.location.reload()
        alert('Score updated')
      }
    }
  }

  addTeam = (e) => {
    e.preventDefault();

    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    
        let time = datetime.split('/')
        let day = time[0]
        let month = time[1]
        let year = time[2].split(' @')
        let newyear = year[0]

    let cloneAray = [...this.state.teams]
    let obj = {
      team_id: 'oxvz87-381xzvq3',
    reason: this.state.reason,
    team_name: this.state.teamname,
    captain_name: this.state.captainname,
    day:day,
    year:newyear,
    month:month,
    score:this.state.score
    }
    cloneAray.push(obj)
    this.setState({
      teams:cloneAray
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
    if(this.state.teamsarray.length > 0){
      
      if(this.state.teamsarray.length > 1){
        alert('You can only update score of one team at a time')
        this.setState({
          teamsarray:[]
        })
      }
      else{
        let sender = this.state.teamsarray[0]
        this.setState({
          captain_name:sender.captainname,
          team_name:sender.teamname
        })
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        
            let time = datetime.split('/')
            let day = time[0]
            let month = time[1]
            let year = time[2].split(' @')
            let newyear = year[0]
    
        let obj = {
          team_id: 'oxvz87-381xzvq3',
          reason: this.state.reason,
          team_name: sender.captain_name,
          captain_name: sender.captain_name,
          day:day,
          year:newyear,
          month:month,
          score:this.state.score
        }
        console.log(obj)
        this.props.incremenTeamScore(obj)
      }
    
    }
    else{
      if(this.state.teams.length > 1){
        alert('You can only update score of one team at a time')
        this.setState({
          teams:[]
        })
      }
      else{
        this.props.incremenTeamScore(this.state.teams[0])
      }
    
    }

    
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

  deleteItemsearch = (key) =>{
    let cloneArray = [...this.state.teamsarray]
    cloneArray.splice(key,1)
    this.setState({
      teamsarray:cloneArray
    })
  }
 

  render() {
    console.log(this.props)
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
        {this.state.name  ? (
         <div>
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
                value={this.state.reason}
                onChange={(e) => this.setState({ reason: e.target.value })}
                type="text"
                placeholder="Reason"
              />

              

              <button onClick={this.addTeam}>Add</button>

              <div className="jayteam_conatiner">
                {this.state.teamsarray.length>0 ? (
                  <div className="allteamsselected">
                    {this.state.teamsarray.map((item, i) => (
                      <span className="jayselectedteams">
                        <span>{item.team_name}</span>
                        <button
                          className="jayteam_selteambutton"
                          type="button"
                          onClick={(e) => this.deleteItemsearch(i)}
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
          </div>
        ) : ( <div>
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
              value={this.state.reason}
              onChange={(e) => this.setState({ reason: e.target.value })}
              type="text"
              placeholder="Reason"
            />

            

            <button onClick={this.addTeam}>Add</button>

            <div className="jayteam_conatiner">
              {this.state.teams ? (
                <div className="allteamsselected">
                  {this.state.teams.map(({team_name},i) => (
                    <span className="jayselectedteams">
                      <span>{team_name}</span>
                      <button
                        className="jayteam_selteambutton"
                        type="button"
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
        </div>)}
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