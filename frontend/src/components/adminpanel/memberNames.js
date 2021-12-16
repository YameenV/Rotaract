import React, { Component } from "react";

class MemberNames extends Component {
  state = {
    namesArray: [],
  };

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
    });
    return (
      <div>
        {EndArray.filter((item) => {
          if (this.props.keyword === "") {
            return item;
          } else if (
            item.toLowerCase().includes(this.props.keyword.toLowerCase())
          ) {
            return item;
          }
        }).map((item) => (
          <div>{item}</div>
        ))}
      </div>
    );
  };

  render() {
    let recData = this.props.nameData;
    let L = this.props.fileLength;
    return (
      <div>{recData.length > 0 ? this.processNames(recData, L) : null}</div>
    );
  }
}
export default MemberNames;
