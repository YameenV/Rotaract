import React, { Component } from "react";
import { ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
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
import "../../css/new-registration.css";
import { Link } from "react-router-dom";

class New_Homepage extends Component {
  render() {
    return (
      <div className="home-main-1">
        <div className="earth_div-i">
          <img className="earth_image-i" src={Earth}></img>
        </div>

        <div className="home-main-2">
          <div className="first_container-i">
            <div className="container_header-i">
              <h1>What is Expand Like Universe ?</h1>
            </div>
            <div className="container_content-i">
              <h2>
                The universe (Latin: universus) is all of space and time[a] and
                their contents,[10] including planets, stars, galaxies, and all
                other forms of matter and energy. The Big Bang theory is the
                prevailing cosmological description of the development of the
                universe. According to this theory, space and time emerged
                together 13.787±0.020 billion years ago,[11] and the universe
                has been expanding ever since. While the spatial size of the
                entire universe is unknown,[3] the cosmic inflation equation
                indicates that it must have a minimum diameter of 23 trillion
                light years,[12] and it is possible to measure the size of the
                observable universe, which is approximately 93 billion
                light-years in diameter at the present day.
                <br />
                <br />
                The earliest cosmological models of the universe were developed
                by ancient Greek and Indian philosophers and were geocentric,
                placing Earth at the center.[13][14] Over the centuries, more
                precise astronomical observations led Nicolaus Copernicus to
                develop the heliocentric model with the Sun at the center of the
                Solar System. In developing the law of universal gravitation,
                Isaac Newton built upon Copernicus's work as well as Johannes
                Kepler's laws of planetary motion and observations by Tycho
                Brahe.
              </h2>
            </div>
          </div>

          <div className="second_container-i">
            <div className="title_header_1-i">
              <h1>The Core Team</h1>
            </div>

            <div className="Team_member-i">
              <div className="row_1-i">
                <div className="row_1_content-i">
                  <div className="row_1_image_div-i">
                    <img className="row_1_image1-i" src={ashu}></img>
                  </div>
                  <div className="row_1_content1_Name-i">
                    <h1>Ashutosh Upadhyay</h1>
                  </div>
                  <div className="row_1_content1_position-i">
                    <h2> President</h2>
                  </div>
                </div>
              </div>

              <div className="row_2-i">
                <div className="row_2_content1-i">
                  <div className="row_2_image1_div-i">
                    <img className="row_2_image1-i" src={Pic2}></img>
                  </div>
                  <div className="row_2_content1_Name-i">
                    <h1>Harsh Patel</h1>
                  </div>
                  <div className="row_2_content1_position-i">
                    <h2> Secratory</h2>
                  </div>
                </div>
                <div className="row_2_content2-i">
                  <div className="row_2_image2_div-i">
                    <img className="row_2_image2-i" src={Pic3}></img>
                  </div>
                  <div className="row_2_content2_Name-i">
                    <h1>Yameen Vinchew</h1>
                  </div>
                  <div className="row_2_content2_position-i">
                    <h2> Pres-elect</h2>
                  </div>
                </div>
              </div>

              <div className="row_3-i">
                <div className="row_3_content1-i">
                  <div className="row_3_image1_div-i">
                    <img className="row_3_image1-i" src={Pic4}></img>
                  </div>
                  <div className="row_3_content1_Name-i">
                    <h1>Abhinav Singh</h1>
                  </div>
                  <div className="row_3_content1_position-i">
                    <h2> Advisor</h2>
                  </div>
                </div>
                <div className="row_3_content2-i">
                  <div className="row_3_image2_div-i">
                    <img className="row_3_image2-i" src={Pic5}></img>
                  </div>
                  <div className="row_3_content2_Name-i">
                    <h1>Aman Shaikh</h1>
                  </div>
                  <div className="row_3_content2_position-i">
                    <h2> Finance Director</h2>
                  </div>
                </div>
                <div className="row_3_content3-i">
                  <div className="row_3_image1_div-i">
                    <img className="row_3_image3-i" src={Pic6}></img>
                  </div>
                  <div className="row_3_content3_Name-i">
                    <h1>Tejas</h1>
                  </div>
                  <div className="row_3_content3_position-i">
                    <h2> GBM</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home_announcement-i">
            <div className="annoncement_header-i">
              <h1>Announcements</h1>
            </div>
            <div className="announcement_container-i">
              <div className="for_padding-i">
                <div className="announcement_content_1-i">
                  <div className="content1_header-i">
                    <div className="content1_image_div-i">
                      <img className="content1_image-i" src={Pic3}></img>
                    </div>
                    <div className="content1_name-i">
                      <div className="content1_name_name-i"> BY Rushil</div>
                      <div className="content1_name_position-i">Secratory</div>
                    </div>
                  </div>
                  <div className="content1_message-i">
                    <h1>There might be a network error</h1>
                  </div>
                  <div className="content1_date-i">on 0-0-0</div>
                  <hr className="hr1-i" />
                </div>
                <div className="announcement_content_1-i">
                  <div className="content1_header-i">
                    <div className="content1_image_div-i">
                      <img className="content1_image-i" src={Pic3}></img>
                    </div>
                    <div className="content1_name-i">
                      <div className="content1_name_name-i"> BY Rushil</div>
                      <div className="content1_name_position-i">Secratory</div>
                    </div>
                  </div>
                  <div className="content1_message-i">
                    <h1>There might be a network error</h1>
                  </div>
                  <div className="content1_date-i">on 0-0-0</div>
                  <hr className="hr1-i" />
                </div>
                <div className="announcement_content_1-i">
                  <div className="content1_header-i">
                    <div className="content1_image_div-i">
                      <img className="content1_image-i" src={Pic3}></img>
                    </div>
                    <div className="content1_name-i">
                      <div className="content1_name_name-i"> BY Rushil</div>
                      <div className="content1_name_position-i">Secratory</div>
                    </div>
                  </div>
                  <div className="content1_message-i">
                    <h1>There might be a network error</h1>
                  </div>
                  <div className="content1_date-i">on 0-0-0</div>
                  <hr className="hr1-i" />
                </div>
              </div>
            </div>
            <Link to="/announcement">
            <div className="leaderboard_more-i">more</div>
            </Link>

          </div>

          <div className="homepage_events-i">
            <div className="home_event_header-i">
              <h1>Events </h1>
            </div>
            <div className="home_event_container-i">
              <div className="event_container_1-i">
                <div className="event_container_1_image_div-i">
                  <img className="container_1_image-i"></img>
                </div>
                <div className="event_title-i">Title</div>
                <div className="event_name-i">
                  Please wait for a while the server might be down
                </div>
                <div className="event_container_1_content-i">Description</div>
              </div>
              <div className="event_container_1-i">
                <div className="event_container_1_image_div-i">
                  <img className="container_1_image-i"></img>
                </div>
                <div className="event_title-i">Title</div>
                <div className="event_name-i">
                  Server Error
                </div>
                <div className="event_container_1_content-i">                  Please wait for a while the server might be downPlease wait for a while the server might be downPlease wait for a while the server might be downPlease wait for a while the server might be downPlease wait for a while the server might be down
</div>
              </div>
              <div className="event_container_1-i">
                <div className="event_container_1_image_div-i">
                  <img className="container_1_image-i"></img>
                </div>
                <div className="event_title-i">Title</div>
                <div className="event_name-i">
                  Please wait for a while the server might be down
                </div>
                <div className="event_container_1_content-i">Description</div>
              </div>
            </div>
            <Link to="/event">
            <div className="leaderboard_more-i">See More</div>
            </Link>
          </div>

          
          
        </div>


        <div className="home_leaderboard-i">
            <div className="leaderboard_h-i">
              <h1>Leaderboards</h1>
            </div>
            <div className="leaderboard_bar_1-i">
              <div className="leaderboard_bar_1-i">
                <div className="bar_image_div_1-i">
                  <img className="bar_1_image-i" src="../../bdujab"></img>
                </div>
                <div className="bar_1_name-i">
                  <h2>Bar 1</h2>
                </div>
              </div>
            </div>
            <div className="leaderboard_switch-i">
              <ButtonGroup className="leader_button-group-i">
                <div className="leader_button-1-i">Team</div>
                <div className="leader_button-2-i">Individual</div>
              </ButtonGroup>
            </div>
            <Link to="/leaderboard">
            <div className="leaderboard_more-i">View all</div>
            </Link>
          </div>

          <div className="team_info-i">
            <div className="team_info_header-i">
              <h1>The Team</h1>
            </div>
            <div className="team_info_detail-i">
              <div className="team_info_1-i">
                <div className="team_info_1_image-i">
                  <img className="team_info_image-i" src={Pic2}></img>
                </div>
              </div>
              <div className="team_info_2-i">
                <div className="team_info_2_image-i">
                  <img className="team_info_image-i" src={Pic2}></img>
                </div>
              </div>
              <div className="team_info_3-i">
                <div className="team_info_3_image-i">
                  <img className="team_info_image-i" src={Pic2}></img>
                </div>
              </div>
            </div>
            <Link to="/portfolio">
            <div className="team_info_more-i"> View More</div>
            </Link>
            <div className="team_info_search-i">
              <InputGroup className="homepage_leader_inputfield-i">
                <FormControl
                  className="homepage_leader_SEARCH-i"
                  placeholder="Search Rotaracter"
                  aria-label="Username"
                />
              </InputGroup>
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
                <div className="mention_content_2_name">Ashutosh Upadhyay</div>
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

        

        <footer className="footer">
          <div className="footer_div">
            <h1>footer</h1>
          </div>
        </footer>
      </div>
    );
  }
}
export default New_Homepage;
