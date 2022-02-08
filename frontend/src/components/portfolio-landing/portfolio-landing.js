import React, { useState, useEffect } from "react";
import "../../css/portfolio-landing.css";
import ashu from "../../imgs/god/ashutosh.jpeg";
import astro from "../../imgs/astro.png";
import { ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const Landing = (props) => {
  const [name, SetName] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    props.getAllUsers();
  }, []);

  useEffect(() => {
    if (props.users) {
      setData(props.users.userData);
    }
  }, [props]);

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
        {data && data.length > 0 ? (
          <>
            {data
              .filter((item) => {
                if (item.full_name === "") {
                  return item;
                } else if (
                  item.full_name.toLowerCase().includes(name) ||
                  item.full_name.includes(name)
                ) {
                  return item;
                }
              })
              .map((member, i) => {
                return (
                  <div className="member-div-1" key={i}>
                    <Link to={`/portfolio/${member.full_name}`}>
                      <div className="member-div-1-div">
                        <img
                          src={member.img}
                          className="member-div-1-image"
                        ></img>
                      </div>
                      <div className="member-div-1-name">
                        {member.full_name}
                      </div>
                      <div className="member-div-1-status">
                        {member.current_position}
                      </div>
                    </Link>
                  </div>
                );
              })}
          </>
        ) : (
          <div className="member-div-1">
            <div className="member-div-1-div">
              <img alt="#none" className="member-div-1-image"></img>
            </div>
            <div className="member-div-1-name">
              Please check your connection
            </div>
            <div className="member-div-1-status">Server might be down</div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.portfolio,
  };
};

export default connect(mapStateToProps, actions)(Landing);
