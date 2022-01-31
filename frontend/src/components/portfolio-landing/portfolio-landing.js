import React, { useState, useEffect } from "react";
import "../../css/portfolio-landing.css";
import ashu from "../../imgs/god/ashutosh.jpeg";
import astro from "../../imgs/astro.png";
import { ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import Navbar from "../navbar/navbar"
import {connect} from 'react-redux'
import * as actions from '../../actions/index'

const Landing = (props) => {
  const [name, SetName] = useState("");
  
  useEffect(()=>{
    props.getAllUsers()
  },[])

  let data = [
    {
      img: ashu,
      membername: "Rtr. Ashutosh Upadhyay",
      status: "President",
    },
    {
      img: ashu,
      membername: "Amaan shaikh",
      status: "President",
    },
    {
      img: ashu,
      membername: "Aakash Varma",
      status: "President",
    },
    {
      img: ashu,
      membername: "Sanloni sharma",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
    {
      img: ashu,
      membername: "Rajesh ulhas",
      status: "President",
    },
  ];
  console.log(props)
  return (
    <div className="main-11">
      <Navbar flags={1} />
      <div className="landing-header">
        
        <h1> Rotracter 2021-2022</h1>
        <div className="member-landing_search">
          <InputGroup>
            <FormControl
              className="memberlanding_inputfield"
              placeholder="Search Rotracter"
              aria-label="Username"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
      <div className="landing-containers">
        {data
          .filter((item) => {
            if (item.membername === "") {
              return item;
            } else if (
              item.membername.toLowerCase().includes(name) ||
              item.membername.includes(name)
            ) {
              return item;
            }
          })
          .map((member, i) => {
            return (
              <div className="member-div-1" key={i}>
                <div className="member-div-1-div">
                  <img src={member.img} className="member-div-1-image"></img>
                </div>
                <div className="member-div-1-name">{member.membername}</div>
                <div className="member-div-1-status">{member.status}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    users:state.portfolio
  }
}

export default connect(mapStateToProps,actions)(Landing);
