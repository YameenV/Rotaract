import React, { Component } from "react";
/* import "react-responsive-carousel/lib/styles/carousel.min.css";  */ // requires a loader
/* import { Carousel } from 'react-responsive-carousel'; */
import "../../css/homepage.css";
import { ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
import { GiHamburgerMenu } from "react-icons/gi";
import ROTLOGO from "../../imgs/RCUCoEsLogo.png";
import Earth from "../../imgs/earth.png";
import Universe1 from "../../imgs/universe1.png";
import Universe2 from "../../imgs/universe2.png";
import Universe4 from "../../imgs/universe4.png";
import Pic2 from "../../imgs/pic2.png";
import Pic3 from "../../imgs/pic3.png";
import Pic4 from "../../imgs/pic4.png";
import Pic5 from "../../imgs/pic5.png";
import Pic6 from "../../imgs/pic6.png";
import ashu from "../../imgs/ashutosh1.jpg";
import Moon from "../../imgs/moon.png";
import Navbar from "../navbar/navbar";

/*   [ 320-480 ], [ 481-768 ] , [ 769-1024 ], [ 1025-1200 ], [ 1201+ ] */

class Homepage extends Component {

  state = {
    teamdata:[]
  }
  componentWillReceiveProps(nextProps){
    if(nextProps){
     
      this.setState({
        teamdata:nextProps.teamd.teamData
      })
    }
  }

  getIndividualData = (e) => {
    e.preventDefault();
    this.props.getLeaderUserData()
  };

  

  render() {
    let anndata = this.props.first
    let eventdata = this.props.second
    let teamdata = this.state.teamdata
    return (
      <div>
        <div className="Home_main">
          {/* <Navbar /> */}
          {/* <div> */}
          <div className="earth_div">
            <img className="earth_image" src={Earth}></img>
          </div>

          <div className="universe1_div">
            <img className="universe1_image" src={Universe1}></img>
          </div>
          <div className="second_container">
            <div className="title_header_1">
              <h1>The Core Team</h1>
            </div>

            <div className="Team_member">
              <div className="row_1">
                <div className="row_1_content">
                  <div className="row_1_image_div">
                    <img className="row_1_image1" src={ashu}></img>
                  </div>
                  <div className="row_1_content1_Name">
                    <h1>Ashutosh Upadhyay</h1>
                  </div>
                  <div className="row_1_content1_position">
                    <h2> President</h2>
                  </div>
                </div>
              </div>

              <div className="row_2">
                <div className="row_2_content1">
                  <div className="row_2_image1_div">
                    <img className="row_2_image1" src={Pic2}></img>
                  </div>
                  <div className="row_2_content1_Name">
                    <h1>Harsh Patel</h1>
                  </div>
                  <div className="row_2_content1_position">
                    <h2> Secratory</h2>
                  </div>
                </div>
                <div className="row_2_content2">
                  <div className="row_2_image2_div">
                    <img className="row_2_image2" src={Pic3}></img>
                  </div>
                  <div className="row_2_content2_Name">
                    <h1>Yameen Vinchew</h1>
                  </div>
                  <div className="row_2_content2_position">
                    <h2> Pres-elect</h2>
                  </div>
                </div>
              </div>

              <div className="row_3">
                <div className="row_3_content1">
                  <div className="row_3_image1_div">
                    <img className="row_3_image1" src={Pic4}></img>
                  </div>
                  <div className="row_3_content1_Name">
                    <h1>Abhinav Singh</h1>
                  </div>
                  <div className="row_3_content1_position">
                    <h2> Advisor</h2>
                  </div>
                </div>
                <div className="row_3_content2">
                  <div className="row_3_image2_div">
                    <img className="row_3_image2" src={Pic5}></img>
                  </div>
                  <div className="row_3_content2_Name">
                    <h1>Aman Shaikh</h1>
                  </div>
                  <div className="row_3_content2_position">
                    <h2> Finance Director</h2>
                  </div>
                </div>
                <div className="row_3_content3">
                  <div className="row_3_image1_div">
                    <img className="row_3_image3" src={Pic6}></img>
                  </div>
                  <div className="row_3_content3_Name">
                    <h1>Tejas</h1>
                  </div>
                  <div className="row_3_content3_position">
                    <h2> GBM</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="universe_3_div">
            <img className="universe_2_image" src={Universe4}></img>
          </div>
          <div className="universe_2_div">
            <img className="universe_2_image" src={Universe2}></img>
          </div>
          <div className="universe_3_div">
            <img className="universe_2_image" src={Universe2}></img>
          </div>
          <div className="universe_3_div">
            <img className="universe1_image" src={Universe4}></img>
          </div>

          <div className="test_drive">
            <div className="first_container">
              <div className="container_header">
                <h1>What is Expand Like Universe ?</h1>
              </div>
              <div className="container_content">
                <h2>
                  The universe (Latin: universus) is all of space and time[a]
                  and their contents,[10] including planets, stars, galaxies,
                  and all other forms of matter and energy. The Big Bang theory
                  is the prevailing cosmological description of the development
                  of the universe. According to this theory, space and time
                  emerged together 13.787±0.020 billion years ago,[11] and the
                  universe has been expanding ever since. While the spatial size
                  of the entire universe is unknown,[3] the cosmic inflation
                  equation indicates that it must have a minimum diameter of 23
                  trillion light years,[12] and it is possible to measure the
                  size of the observable universe, which is approximately 93
                  billion light-years in diameter at the present day.
                  <br />
                  <br />
                  The earliest cosmological models of the universe were
                  developed by ancient Greek and Indian philosophers and were
                  geocentric, placing Earth at the center.[13][14] Over the
                  centuries, more precise astronomical observations led Nicolaus
                  Copernicus to develop the heliocentric model with the Sun at
                  the center of the Solar System. In developing the law of
                  universal gravitation, Isaac Newton built upon Copernicus's
                  work as well as Johannes Kepler's laws of planetary motion and
                  observations by Tycho Brahe.
                </h2>
              </div>
            </div>
            <div className="moon_div">
              <img className="moon_image" src={Moon}></img>
            </div>
            <div className="home_announcement">
              <div className="annoncement_header">
                <h1>Announcements</h1>
              </div>
              <div className="announcement_container">
                <div className="for_padding">
                  {anndata.length > 0 ? (
                    anndata.map((item, i) => {
                      return i < 3 ? (
                        <div className={`announcement_content_${i}`}>
                          <div className="content1_header">
                            <div className="content1_image_div">
                              <img className="content1_image" src={Pic3}></img>
                            </div>
                            <div className="content1_name">
                              <div className="content1_name_name">
                                {" "}
                                BY Rushil
                              </div>
                              <div className="content1_name_position">
                                Secratory
                              </div>
                            </div>
                          </div>
                          <div className="content1_message">
                            <h1>{item.announcement}</h1>
                          </div>
                          <div className="content1_date">
                            on {item.day}-{item.month}-{item.year}
                          </div>
                          <hr className="hr1" />
                        </div>
                      ) : null;
                    })
                  ) : (
                    <div className="announcement_content_1">
                      <div className="content1_header">
                        <div className="content1_image_div">
                          <img className="content1_image" src={Pic3}></img>
                        </div>
                        <div className="content1_name">
                          <div className="content1_name_name"> BY Rushil</div>
                          <div className="content1_name_position">
                            Secratory
                          </div>
                        </div>
                      </div>
                      <div className="content1_message">
                        <h1>There might be a network error</h1>
                      </div>
                      <div className="content1_date">on 0-0-0</div>
                      <hr className="hr1" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="homepage_events">
              <div className="home_event_header">
                <h1>Events </h1>
              </div>
              <div className="home_event_container">
                {eventdata.length > 0 ? (
                  eventdata.map((item, i) => {
                    return i < 2 ? (
                      <div className={`event_container_${i + 1}`}>
                        <div className="event_container_1_image_div">
                          <img className="container_1_image"></img>
                        </div>
                        <div className="event_title">{item.title}</div>
                        <div className="event_name">{item.name}</div>
                        <div className="event_container_1_content">
                          {item.description}
                        </div>
                      </div>
                    ) : 
                  null
                    ;
                  })
                ) : (
                  <div className="event_container_1">
                    <div className="event_container_1_image_div">
                      <img className="container_1_image"></img>
                    </div>
                    <div className="event_title">Title</div>
                    <div className="event_name">
                      Please wait for a while the server might be down
                    </div>
                    <div className="event_container_1_content">Description</div>
                  </div>
                )}
              </div>
            </div>

            <div className="home_leaderboard">
              <div className="leaderboard_h">
                <h1>Leaderboards</h1>
              </div>
              <div className="leaderboard_bar">
                { teamdata && teamdata.length > 0 ?  (
                 teamdata.map((item, i) => {
                      return (
                        <div className={`leaderboard_bar_${i + 1}`}>
                          <div className={`bar_image_div_${i + 1}`}>
                            <img
                              className={`bar_${i + 1}_image`}
                              src="../../bdujab"
                            ></img>
                          </div>
                          <div className={`bar_${i + 1}_name`}>
                            <h2>{item.name}</h2>
                          </div>
                        </div>
                      );
                    })
                ): 
                  
                      <div className="leaderboard_bar_1">
                  <div className="bar_image_div_1">
                    <img
                      className="bar_1_image"
                      src="../../bdujab"
                    ></img>
                  </div>
                  <div className="bar_1_name">
                    <h2>Bar 1</h2>
                  </div>
                </div>

              
              
                } 
              </div>
              <div className="leaderboard_switch">
                <ButtonGroup className="leader_button-group">
                  <div className="leader_button-1" onClick={this.getTeamData}>
                    Team
                  </div>
                  <div
                    className="leader_button-2"
                    onClick={this.getIndividualData}
                  >
                    Individual
                  </div>
                </ButtonGroup>
              </div>
              <div className="leaderboard_more">View all</div>
            </div>
            <div className="team_info">
              <div className="team_info_header">
                <h1>The Team</h1>
              </div>
              <div className="team_info_detail">
                <div className="team_info_1">
                  <div className="team_info_1_image">
                    <img className="team_info_image" src={Pic2}></img>
                  </div>
                  {/* <div className="team_info_1_name">
              <h2>Harsh Patel</h2>
            </div> */}
                </div>
                <div className="team_info_2">
                  <div className="team_info_2_image">
                    <img className="team_info_image" src={Pic2}></img>
                  </div>
                  {/* <div className="team_info_2_name">
              <h2>Harsh Patel</h2>
            </div> */}
                </div>
                <div className="team_info_3">
                  <div className="team_info_3_image">
                    <img className="team_info_image" src={Pic2}></img>
                  </div>
                  {/* <div className="team_info_3_name">
              <h2>Harsh Patel</h2>
            </div> */}
                </div>
              </div>
              <div className="team_info_more"> View More</div>
              <div className="team_info_search">
                <InputGroup className="homepage_leader_inputfield">
                  <FormControl
                    className="homepage_leader_SEARCH"
                    placeholder="Search Rotaracter"
                    // value={this.state.sad}
                    // onChange={this.setVal}
                    aria-label="Username"
                  />
                </InputGroup>

                {/* <input className="team_info_input" type="search" placeholder="Search more"></input> */}
              </div>
            </div>
            <div className="home_registration">
              <div className="home_register_head">
                Join Rotaract club of UCOE Today !
              </div>
              <div className="home_register_button_div">
                <button className="home_register_button">Register</button>
              </div>
            </div>

            <div className="homepage_mention">
              <div className="mention_header">Design & Developed by </div>
              <div className="mention_content">
                <div className="mention_content_1">
                  <div className="mention_content_1_image_div">
                    <img></img>
                  </div>
                  <div className="mention_content_1_name">Harsh Patel</div>
                </div>
                <div className="mention_content_2">
                  <div className="mention_content_2_image_div">
                    <img></img>
                  </div>
                  <div className="mention_content_2_name">
                    Ashutosh Upadhyay
                  </div>
                </div>
                <div className="mention_content_3">
                  <div className="mention_content_3_image_div">
                    <img></img>
                  </div>
                  <div className="mention_content_3_name">Yameen Vinchu</div>
                </div>
                <div className="mention_content_4">
                  <div className="mention_content_4_image_div">
                    <img></img>
                  </div>
                  <div className="mention_content_4_name">Aman Shaikh</div>
                </div>
                <div className="mention_content_5">
                  <div className="mention_content_5_image_div">
                    <img></img>
                  </div>
                  <div className="mention_content_5_name">Abhinav Pandey</div>
                </div>
                <div className="mention_content_6">
                  <div className="mention_content_6_image_div">
                    <img></img>
                  </div>
                  <div className="mention_content_6_name">Tejas Devrudkar</div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="footer_div">
              <h1>footer</h1>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    teamd:state.team
  }
}

export default connect(mapStateToProps,actions)(Homepage)
