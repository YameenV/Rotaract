import React, { Component } from "react";
import MemberNames from "./memberNames";
import "../../css/jayteam.css";
import rtlogo from "../../imgs/RCUCoEsLogo.png";

class Teampage extends Component {
  state = {
    name: "",
    upToggle: false,
    upToggle2: false,
    date: "",
    points: "",
    reason: "",
    teams: [],
    teamname: "",
    captainname: "",
    captainarray: [],
    namesarray: [],
    FileLength: 0,
    inputVal: "",
  };

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
    this.setToggle();
    let sendObj = {
      date: this.state.date,
      points: this.state.points,
      reason: this.state.reason,
    };
    console.log(sendObj);
  };

  setDate = (d) => {
    this.setState({
      date: d,
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
    console.log(newObj);
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

  render() {
    return (
      <div className="jayteam_main">
        <div className="jayteam_hdr">
          <h1>Welcome Jai</h1>
          <img src={rtlogo}></img>
        </div>
        <div className="jayteam_tmbtn">Team</div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
          placeholder="Search by Name"
        />
        <h5>OR</h5>
        <button onClick={this.setToggle} className="csvuploadbtn">
          Upload CSV
        </button>
        <button onClick={this.setToggle2} className="addteambtn">
          Add team
        </button>
        {this.state.upToggle2 ? (
          <div>
            <form>
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
                <button onClick={this.sendTeamData} type="submit">
                  Update
                </button>
                <button type="reset" className="resetbtn_jayteam">Reset</button>
              </div>
            </form>
          </div>
        ) : null}
        {this.state.upToggle ? (
          <div>
            <form onSubmit={this.sendData}>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => this.takeFile(e)}
              />
              <div style={{ backgroundColor: "#e3e3e3" }}>
                {this.state.namesarray.length > 0 ? (
                  <div>
                    <MemberNames
                      fileLength={this.state.FileLength}
                      nameData={this.state.namesarray}
                      keyword={this.state.name}
                    />
                    <button type="button" onClick={this.clearNames}>
                      Clear list
                    </button>
                  </div>
                ) : null}
              </div>

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
                placeholder="points"
              />
              <textarea
                value={this.state.reason}
                onChange={(e) => {
                  this.setState({ reason: e.target.value });
                }}
                placeholder="reason"
              ></textarea>

              <button type="submit">Update</button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Teampage;