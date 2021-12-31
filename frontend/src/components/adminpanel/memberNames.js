import React, { Component } from "react";

class MemberNames extends Component {
  state = {
    namesArray: [],
    sendingName:[]
  };

  deleteName = (e,key) =>{
    e.preventDefault()
    this.props.deleteName(key)
  }
  

  processNames = (recData, L) => {
    let EndArray = [];
   
    recData.forEach((element) => {
      if (element.includes("Rtr") || element.includes("Rtr.")) {
        let newEle;
        newEle = element.slice(4);
        EndArray.push(newEle);
      } else {
        EndArray.push(element);
      }

    }
    
    
    );


return (
  <div className="csvindi_members">
    {EndArray.filter((item) => {
      if (this.props.keyword === "") {
        return item;
      } else if (
        item.toLowerCase().includes(this.props.keyword.toLowerCase())
      ) {
        return item;
      }
    }).map((item, i) => (
      <span className="csv_members">
        {item}
        <button onClick={(e) => this.deleteName(e, i)} className="csv_dltbtn">
          X
        </button>
      </span>
    ))}
  </div>
);
  };

  render() {
    let recData = this.props.nameData;
    let L = this.props.fileLength;
    return (
      <div>{recData.length > 0 ? this.processNames(recData, L) : null}
      
      <div>

      </div>
      
      </div>
    );
  }
}
export default MemberNames;
