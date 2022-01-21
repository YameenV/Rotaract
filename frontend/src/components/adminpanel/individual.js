import React, { Component } from "react";
import MemberNames from "./memberNames";
import "../../css/jayindi.css";
import rtlogo from "../../imgs/Background.png";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class Individualpage extends Component {
  state = {
    name: "",
    upToggle: false,
    upToggle2: false,
    incrementType: "",
    date: "",
    year: "",
    day: "",
    month: "",
    points: "",
    takenname: [],
    reason: "",
    namesarray: [],
    FileLength: 0,
    inputVal: "",
    searchNameArray:[],
    
  };
  addTeam = (e) => {
    e.preventDefault();

    this.setState({
      teams: [...this.state.teams, this.state.teamname],
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


    if(this.state.namesarray.length > 0){
      
      let obj = {
          
        user: [
          {
            user_id: 'adpmgp',
            full_name: '',
            current_position: 'gadg',
            img: 'egsdswgv'
          }
        ],
        score: {
          user_id: "faefad",
          full_name:  "af",
          current_position: "gsgdsr",
          img: "grdew",
          score: this.state.points,
          month: this.state.month,
          day: this.state.day,
          year: this.state.year,
          increment_type: this.state.incrementType,
          reason: this.state.reason
        }
      }

     this.state.namesarray.map((user)=>{
       
   let object = {
        user_id: 'afa',
        full_name: user,
        current_position: 'gadg',
        img: 'egsdswgv'
      }
       obj.user.push(object)
       if(obj.user.length == this.state.namesarray.length+1){
         console.log('hello')
        obj.user.splice(0,1)
        let object2 = {
          user_id: "faefad",
          full_name:  "daip",
          current_position: "gsgdsr",
          img: "grdew",
          score: this.state.points,
          month: this.state.month,
          day: this.state.day,
          year: this.state.year,
          increment_type: this.state.incrementType,
          reason: this.state.reason
        }
        obj.score = object2
        this.props.incrementUserScore(obj)
       }
     })
      
    }
    else if(this.state.searchNameArray.length > 0){
      
      let obj = {
          
        user: [
          {
            user_id: '',
            full_name: '',
            current_position: '',
            img: ''
          }
        ],
        score: {
          user_id: "",
          full_name:  "",
          current_position: "",
          img: "grdew",
          score: this.state.points,
          month: this.state.month,
          day: this.state.day,
          year: this.state.year,
          increment_type: this.state.incrementType,
          reason: this.state.reason
        }
      }
    
      this.state.searchNameArray.map((item)=>{
        let object = {
          user_id: item.user_id,
            full_name: item.full_name,
            current_position: item.current_position,
            img: item.img
        }
        obj.user.push(object)
       if(obj.user.length == this.state.searchNameArray.length + 1){
         obj.user.splice(0,1)
         this.props.incrementUserScore(obj)
       }
      })

    }
    
  };

  setDate = (d) => {
    let date = d.split("-");
    let year = date[0];
    let month = date[1];
    let day = date[2];
    console.log(date);
    this.setState({
      date: d,
      year,
      month,
      day,
    });
  };

  setToggle2 = (e) => {
    if (this.state.upToggle2) {
      this.setState({
        upToggle2: false,
      });
    } else {
      this.setState({
        upToggle2: true,
      });
    }
  };

  sendTeamData = (e) => {
    e.preventDefault();
    let newObj = {
      teamsArray: this.state.teams,
    };
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
        console.log(KeysArr)
        if (KeysArr.includes("Full Name")) {
          this.setState({
              namesarray:[...this.state.namesarray, eachObj['Full Name']],
            FileLength,
          });
        } else if (KeysArr.includes("Name")) {
          this.setState({

              namesarray:[...this.state.namesarray, eachObj['Name']],
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

  deleteItem = (key) => {
    
    let cloneArray2 = [...this.state.namesarray];

    cloneArray2.splice(key,1)
    this.setState({
      namesarray:cloneArray2
    });
  };

  deleteSearch = (key) =>{
    let cloneArray = [...this.state.searchNameArray]
    cloneArray.splice(key,1)
    this.setState({
      searchNameArray:cloneArray
    })
  }


  componentWillMount(){
    this.props.getUserForScore()
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.portdata){
      this.setState({
        searchNameArray:nextProps.portdata.userData
      })

    }
  }

  render() {
 console.log(this.props)
    return (this.props.portdata) ? (
      <div className="jayindi_main">
      <div className="jayindi_hdr">
        <h1>Welcome jai</h1>
        <img  alt=""  src={rtlogo}></img>
      </div>
      <div className="jay_indibtn">Individual</div>
      <input
        value={this.state.name}
        onChange={(e) => this.setState({ name: e.target.value,upToggle:true })}
        type="text"
        placeholder="Search by Name"
      />
      <h5>OR</h5>
      <button onClick={this.setToggle}>Upload CSV</button>
      {this.state.upToggle ? (
        <div>
          <form onSubmit={this.sendData} className="uploadcsvindi_nxtform">
            <input
              type="file"
              accept=".csv"
              onChange={(e) => this.takeFile(e)}
            />
            <div className="csvupload_indi">
              {this.state.name ? (
                <MemberNames
                searchname={this.state.searchNameArray}
                keyword={this.state.name}
                deleteName={this.deleteItem}
                deleteSearchName ={this.deleteSearch}
              />
                
              ) : 
              <div>
                      <MemberNames
                    fileLength={this.state.FileLength}
                    nameData={this.state.namesarray}
                    keyword={this.state.name}
                    deleteName={this.deleteItem}
                  />
                    
                  
                  <button
                    type="button"
                    onClick={this.clearNames}
                    className="csvindi_clrbtn"
                  >
                    Clear list
                  </button>
                </div>
              }
            </div>
            <select
              onChange={(e) =>
                this.setState({ incrementType: e.target.value })
              }
            >
              <option>Meeting - BOD, GBM, etc</option>
              <option>Events - attendance</option>
              <option>Individual (active)</option>
              <option>Feedback Form</option>
            </select>
            <input
              type="date"
              value={this.state.date}
              onChange={(e) => {
                this.setDate(e.target.value);
              }}
            />
            <input
              type="text"
              value={this.state.points}
              onChange={(e) => {
                this.setState({ points: e.target.value });
              }}
              placeholder="Points"
            />
            <textarea
              value={this.state.reason}
              onChange={(e) => {
                this.setState({ reason: e.target.value });
              }}
              placeholder="Reason"
            ></textarea>

            <button type="submit">Update</button>
          </form>
        </div>
      ) : null}
      <button className="jayindi_logoutbtn">Logout</button>
    </div>
    ):(<div>
      Nut
    </div>)
     
  }
}
const mapStateToProps = (state) => {
  return {
    indidata: state.team,
    portdata:state.portfolio
  };
};

export default connect(mapStateToProps, actions)(Individualpage);