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
  
  deleteNameSearch = (e, key)=>{
    e.preventDefault()
    this.props.deleteSearchName(key)
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
    let seachData = this.props.searchname
    
    let L = this.props.fileLength;
    return (seachData) ? (
      <div>
        {
          seachData.map((item,i)=>(
            <div key={i}>
              <span className="csv_members">
        {item.full_name}
        <button onClick={(e) => this.deleteNameSearch(e, i)} className="csv_dltbtn">
          X
        </button>
      </span>
            </div>
          ))
        }
        
        
      </div>
    ):(
      <div>{recData.length > 0 ? this.processNames(recData, L) : null}
      
      <div>

      </div>
      
      </div>
    )
      
   
  }
}
export default MemberNames;
