import React, { useEffect } from "react";
import "../../../css/leaderboard.css";

const ListOfPPL = (props) => {
  let data = props.rawData;
  console.log(data);
  const returnList = (pdata) =>
    pdata.length > 0 ? (
      pdata
        .filter((item) => {
          if (props.keyword === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(props.keyword.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item, i) => (
          <div className="leader_list-group">
            <div className="leader_list-group-number">{i}</div>
            <div>
              <img className="leader_list-group-number" src={item.image}></img>
            </div>
            <div
              className="leader_list-group-team"
              style={{ width: "100px", textAlign: "center" }}
            >
              Alliance
            </div>
            <div
              className="leader_list-group-name"
              style={{ width: "100px", textAlign: "center" }}
            >
              {item.name}
            </div>
            <div className="leader_list-group-score">{item.total}</div>
          </div>
        ))
    ) : (
      <div className="leader_list-group">
        <div className="leader-row-all-1">
          <div className="leader-data-div">
          <div className="leader_list-group-number">None</div>
          <div>
            <img className="leader_list-group-number" src="x"></img>
          </div>
          <div
            className="leader_list-group-team"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          <div
            className="leader_list-group-name"
            style={{ width: "100px", textAlign: "center" }}
          > 
            None
          </div>
          </div>
          <div className="leader_list-group-score">None</div>
        </div>
        <div className="leader-row-all-2">
        <div className="leader-data-div">
          <div className="leader_list-group-number">None</div>
          <div>
            <img className="leader_list-group-number" src="x"></img>
          </div>
          <div
            className="leader_list-group-team"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          <div
            className="leader_list-group-name"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          </div>
          <div className="leader_list-group-score">None</div>
        </div>
        <div className="leader-row-all-3">
        <div className="leader-data-div">
          <div className="leader_list-group-number">None</div>
          <div>
            <img className="leader_list-group-number" src="x"></img>
          </div>
          <div
            className="leader_list-group-team"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          <div
            className="leader_list-group-name"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          </div>
          <div className="leader_list-group-score">None</div>
        </div> 
        <div className="leader-row-all-4">
        <div className="leader-data-div">
          <div className="leader_list-group-number">None</div>
          <div>
            <img className="leader_list-group-number" src="x"></img>
          </div>
          <div
            className="leader_list-group-team"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          <div
            className="leader_list-group-name"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          </div>
          <div className="leader_list-group-score">None</div>
        </div>       
        <div className="leader-row-all-5">
        <div className="leader-data-div">
          <div className="leader_list-group-number">None</div>
          <div>
            <img className="leader_list-group-number" src="x"></img>
          </div>
          <div
            className="leader_list-group-team"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          <div
            className="leader_list-group-name"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          </div>
          <div className="leader_list-group-score">None</div>
        </div>  
         <div className="leader-row-all-6">
         <div className="leader-data-div">
          <div className="leader_list-group-number">None</div>
          <div>
            <img className="leader_list-group-number" src="x"cv></img>
          </div>
          <div
            className="leader_list-group-team"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          <div
            className="leader_list-group-name"
            style={{ width: "100px", textAlign: "center" }}
          >
            None
          </div>
          </div>
          <div className="leader_list-group-score">None</div>
        </div> 
      </div>
    );

  return <div>{data.length > 0 ? returnList(data) : returnList(data)}</div>;
};

export default ListOfPPL;
