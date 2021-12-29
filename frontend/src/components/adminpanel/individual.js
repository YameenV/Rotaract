import React, { Component } from "react";
import MemberNames from "./memberNames";
import "../../css/jayindi.css";
import rtlogo from "../../imgs/RCUCoEsLogo.png";

class Individualpage extends Component {
  state = {
    name: "",
    upToggle: false,
    upToggle2: false,
    incrementType: "",
    date: "",
    points: "",
    reason: "",
    namesarray: [],
    FileLength: 0,
    inputVal: "",
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
      <div className="jayindi_main">
        <div className="jayindi_hdr">
          <h1>Welcome jai</h1>
          <img src={rtlogo}></img>
        </div>
        <div className="jay_indibtn">Individual</div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
          placeholder="search by name"
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
              <select>
                <option>Increment type</option>
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
                placeholder="points"
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
      </div>
    );
  }
}

export default Individualpage;
