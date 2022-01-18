import React, { Component } from "react";
import "../../css/homepage.css";
import { ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

import Pic1 from "../../imgs/pic2.png";
import Pic2 from "../../imgs/pic3.png";
import Pic3 from "../../imgs/pic4.png";
import Pic4 from "../../imgs/pic5.png";
import Pic5 from "../../imgs/pic6.png";
import Pic6 from "../../imgs/pic3.png";
import Pic7 from "../../imgs/pic4.png";
import Pic8 from "../../imgs/pic5.png";
import Pic9 from "../../imgs/pic6.png";
import Pic10 from "../../imgs/pic2.png";
import ashu from "../../imgs/ashutosh1.jpg";
import akash from "../../imgs/core/Aakash.png";
import Amey from "../../imgs/core/Amey.png";
import Divvya from "../../imgs/core/Divvya.png";
import Jaii from "../../imgs/core/Jaii.png";
import Kaustubh from "../../imgs/core/Kaustubh.png";
import Mihir from "../../imgs/core/Mihir.png";
import Rushil from "../../imgs/core/Rushil.png";
import Shaily from "../../imgs/core/Shaily.png";
import Shreya from "../../imgs/core/Shreya.png";

import ashutosh from "../../imgs/god/ashutosh.jpeg";
import abhinav from "../../imgs/god/abhinav.jpeg";
import aman from "../../imgs/god/aman.jpeg";
import yameen from "../../imgs/god/yameen.png";

import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import home from "../../background/homepage.mp4";

import Footer from "../footer/footer";

class Homepage extends Component {
  state = {
    teamdata: [],
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        teamdata: nextProps.teamd.teamData,
      });
    }
  }

  getIndividualData = (e) => {
    e.preventDefault();
    this.props.getLeaderUserData();
  };

  render() {
    let anndata = this.props.first;
    let eventdata = this.props.second;
    let teamdata = this.state.teamdata;

    return (
      <div className="home-main">
        <div className="earth_div">
          <img className="earth_div_image" src="https://lh3.googleusercontent.com/tZSgaCiE2J4kPEFu92hIeT3P9nfHkoNuKHiG5BHhogcF-mnHQp1tCpooiyfMFAdjwM_XyHCvYFj5-RtDtKPNlOtzJ3dI64_sv-rBfHuovNDjOyQRo39e-ruAMBlZtJwz75wUJbUC=w2400" ></img>
        </div>
        <Navbar flags={1} />
          
        <div className="home_main-2">
          <div className="first_container">
            <div className="container_header">
              <h1>What is Expand Like Universe ?</h1>
            </div>
            <div className="container_content">
              <h2>
                The expansion of the universe is a boom that occurs over time
                within distances between gravitationally unrelated elements of
                the local universe. As we all know, after the Big Bang, the
                universe began to grow mysteriously, and so far no one has
                solved this mystery. So let us get the same satisfaction and do
                as much as possible for ourselves and our members. Everything in
                the universe depends on every difference. For example, the
                desires of the planets, the sunlight required by life, the
                vacuum in the universe, gravity, and other factors that help
                everyone maintain normal stability in various ways. Likewise, we
                need to help everyone reach their realm and expand as much as
                possible. Look at the farthest corner.
                <br/>
                The galaxy, and you will see it precisely because it was in the distant past. However,
                light arriving after 1,000,000,000 years is no longer coming
                from the galaxy. It is ten million light-years away. But it is
                still far from the thing. Why? Because the visible global world
                in which we live is thriving. Likewise, may our club expand
                endlessly and let the Light guide us into an inspiring future
                for our members and everyone associated with our club.
              </h2>
            </div>
          </div>

          <div className="second_container">
            <div className="title_header_1">
              <h1>The Core Team</h1>
            </div>

            <div className="Team_member">
              <div className="row_1_content">
                <div className="row_1_image_div">
                  <img className="row_1_image1" src={akash} alt=""></img>
                </div>
                <div className="row_1_content1_Name">
                  <h1>Rtr.Aakash Varma</h1>
                </div>
                <div className="row_1_content1_position">
                  <h2>President</h2>
                </div>
              </div>

              <div className="row_2_content1">
                <div className="row_2_image1_div">
                  <img className="row_2_image1" src={Kaustubh} alt=""></img>
                </div>
                <div className="row_2_content1_Name">
                  <h1>Rtr.Kaustubh Latake</h1>
                </div>
                <div className="row_2_content1_position">
                  <h2>Vice President</h2>
                </div>
              </div>
              <div className="row_2_content2">
                <div className="row_2_image2_div">
                  <img className="row_2_image2" src={Rushil} alt=""></img>
                </div>
                <div className="row_2_content2_Name">
                  <h1>Rtr.Rushil Vira</h1>
                </div>
                <div className="row_2_content2_position">
                  <h2>Secretary</h2>
                </div>
              </div>

              <div className="row_3_content1">
                <div className="row_3_image1_div">
                  <img className="row_3_image1" src={Mihir} alt=""></img>
                </div>
                <div className="row_3_content1_Name">
                  <h1>Rtr.Mihir Parmar</h1>
                </div>
                <div className="row_3_content1_position">
                  <h2>Finance Director</h2>
                </div>
              </div>
              <div className="row_3_content2">
                <div className="row_3_image2_div">
                  <img className="row_3_image2" src={Jaii} alt=""></img>
                </div>
                <div className="row_3_content2_Name">
                  <h1>Rtr.Jaii Prajapat</h1>
                </div>
                <div className="row_3_content2_position">
                  <h2>HRD</h2>
                </div>
              </div>
              <div className="row_3_content3">
                <div className="row_3_image3_div">
                  <img className="row_3_image3" src={Divvya}></img>
                </div>
                <div className="row_3_content3_Name">
                  <h1>Rtr.Divvya Rambhia</h1>
                </div>
                <div className="row_3_content3_position">
                  <h2>Chairman</h2>
                </div>
              </div>

              <div className="row_4_content1">
                <div className="row_4_image1_div">
                  <img className="row_4_image1" src={Amey}></img>
                </div>
                <div className="row_4_content1_Name">
                  <h1>Rtr.Amey Desai</h1>
                </div>
                <div className="row_4_content1_position">
                  <h2>Jt.Secretary</h2>
                </div>
              </div>
              <div className="row_4_content2">
                <div className="row_4_image2_div">
                  <img className="row_4_image2" src={Shreya}></img>
                </div>
                <div className="row_4_content2_Name">
                  <h1>Rtr.Shreya Patil</h1>
                </div>
                <div className="row_4_content2_position">
                  <h2>Jt.Secretary</h2>
                </div>
              </div>
              <div className="row_4_content3">
                <div className="row_4_image3_div">
                  <img className="row_4_image3" src={Shaily}></img>
                </div>
                <div className="row_4_content3_Name">
                  <h1>Rtr.Shaily Verma</h1>
                </div>
                <div className="row_4_content3_position">
                  <h2>IPP</h2>
                </div>
              </div>
              <div className="row_4_content4">
                <div className="row_4_image4_div">
                  <img className="row_4_image4" src={Pic2}></img>
                </div>
                <div className="row_4_content4_Name">
                  <h1>Rtr. XYZ</h1>
                </div>
                <div className="row_4_content4_position">
                  <h2>SAA</h2>
                </div>
              </div>
            </div>
          </div>

            {/* <div className="moon_div">
              <img className="moon_image" src={Moon}></img>
            </div> */}
          <div className="home_announcement">
            <div className="annoncement_header">
              <h1>Announcements</h1>
            </div>
            <div className="announcement_container">
              <div className="for_padding">
                {anndata && anndata.length > 0 ? (
                  anndata.map((item, i) => {
                    return i < 3 ? (
                      <div className={`announcement_content_${i}`}>
                        <div className="content1_header">
                          <div className="content1_image_div">
                            <img
                              className="content1_image"
                              src={Pic3}
                              alt=""
                            ></img>
                          </div>
                          <div className="content1_name">
                            <div className="content1_name_name"> BY Rushil</div>
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
                  <>
                    <div className="announcement_content_1">
                      <div className="content1_header">
                        <div className="content1_image_div">
                          <img
                            className="content1_image"
                            src={Pic3}
                            alt=""
                          ></img>
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
                  </>
                )}
              </div>
            </div>
            <Link to="/announcement">
              <div className="leaderboard_more">View All</div>
            </Link>
          </div>

          <div className="homepage_events">
            <div className="home_event_header">
              <h1>Events </h1>
            </div>
            <div className="home_event_container">
              {eventdata && eventdata.length > 0 ? (
                eventdata.map((item, i) => {
                  return i < 2 ? (
                    <div className={`event_container_${i + 1}`}>
                      <div className="event_container_1_image_div">
                        <img className="container_1_image" alt=""></img>
                      </div>
                      <div className="event_title">{item.title}</div>
                      <div className="event_name">{item.name}</div>
                      <div className="event_container_1_content">
                        {item.description}
                      </div>
                    </div>
                  ) : null;
                })
              ) : (
                <>
                  <div className="event_container_1">
                    <div className="event_container_1_image_div">
                      <img className="container_1_image" alt=""></img>
                    </div>
                    <div className="event_title">Title</div>
                    <div className="event_name">
                      Please wait for a while the server might be down
                    </div>
                    <div className="event_container_1_content">Description</div>
                  </div>
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
                </>
              )}
            </div>
            <Link to="/event">
              <div className="leaderboard_more">See More</div>
            </Link>
          </div>
        </div>

        <div className="home_leaderboard">
          <div className="leaderboard_h">
            <h1>Leaderboards</h1>
          </div>
          <div className="leaderboard_bar">
            {teamdata && teamdata.length > 0 ? (
              teamdata.map((item, i) => {
                return (
                  <div className={`leaderboard_bar_${i + 1}`}>
                    <div className={`bar_image_div_${i + 1}`}>
                      <img
                        className={`bar_${i + 1}_image`}
                        src="../../bdujab"
                        alt=""
                      ></img>
                    </div>
                    <div className={`bar_${i + 1}_name`}>
                      <h2>{item.name}</h2>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div className="leaderboard_bar_1">
                  <div className="bar_image_div_1">
                    <img
                      className="bar_1_image"
                      src="../../bdujab"
                      alt=""
                    ></img>
                  </div>
                  <div className="bar_1_name">
                    <h2>Bar 1</h2>
                  </div>
                </div>
                <div className="leaderboard_bar_2">
                  <div className="bar_image_div_2">
                    <img className="bar_2_image" src="../../bdujab"></img>
                  </div>
                  <div className="bar_2_name">
                    <h2>Bar 1</h2>
                  </div>
                </div>
                <div className="leaderboard_bar_3">
                  <div className="bar_image_div_3">
                    <img className="bar_3_image" src="../../bdujab"></img>
                  </div>
                  <div className="bar_3_name">
                    <h2>Bar 1</h2>
                  </div>
                </div>
                <div className="leaderboard_bar_4">
                  <div className="bar_image_div_4">
                    <img className="bar_4_image" src="../../bdujab"></img>
                  </div>
                  <div className="bar_4_name">
                    <h2>Bar 1</h2>
                  </div>
                </div>
                <div className="leaderboard_bar_5">
                  <div className="bar_image_div_5">
                    <img className="bar_5_image" src="../../bdujab"></img>
                  </div>
                  <div className="bar_5_name">
                    <h2>Bar 1</h2>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="leaderboard_switch">
            <ButtonGroup className="leader_button-group">
              <div className="leader_button-1" onClick={this.getTeamData}>
                Team
              </div>
              <div className="leader_button-2" onClick={this.getIndividualData}>
                Individual
              </div>
            </ButtonGroup>
          </div>
          <Link to="/leaderboard">
            <div className="leaderboard_more">View all</div>
          </Link>
        </div>

        <div className="team_info">
          <div className="team_info_header">
            <h1>The Team</h1>
          </div>
          <div className="team_info_detail">
            <div className="team_info_1">
              <div className="team_info_1_image">
                <img className="team_info_image" src={Pic2} alt=""></img>
              </div>
              {/* <div className="team_info_1_name">
              <h2>Harsh Patel</h2>
            </div> */}
            </div>
            <div className="team_info_2">
              <div className="team_info_2_image">
                <img className="team_info_image" src={Pic2} alt=""></img>
              </div>
              {/* <div className="team_info_2_name">
              <h2>Harsh Patel</h2>
            </div> */}
            </div>
            <div className="team_info_3">
              <div className="team_info_3_image">
                <img className="team_info_image" src={Pic2} alt=""></img>
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
            <Link to="/mem">
            <button className="home_register_button">Register</button>
            </Link>
          </div>
        </div>

        <div className="homepage_mention">
          <div className="mention_header">Designed & Developed by </div>
          <div className="mention_content">
            <div className="mention_content_1">
              <div className="mention_content_1_image_div">
                <img className="mention_content_1_image"  alt="" src={yameen}></img>
              </div>
              <div className="mention_content_1_name">Rtr. Yameen Vinchu</div>
            </div>
            <div className="mention_content_2">
              <div className="mention_content_2_image_div">
                <img  className="mention_content_2_image" alt="" src={ashutosh}></img>
              </div>
              <div className="mention_content_2_name">Rtr. Ashutosh Upadhyay</div>
            </div>
            <div className="mention_content_3">
              <div className="mention_content_3_image_div">
                <img className="mention_content_3_image"  alt="" src={abhinav}></img>
              </div>
              <div className="mention_content_3_name">Rtr. Abhinav Pandey </div>
            </div>
            <div className="mention_content_4">
              <div className="mention_content_4_image_div">
                <img className="mention_content_4_image"  alt="" src={aman}></img>
              </div>
              <div className="mention_content_4_name">Rtr. Aman Shaikh</div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <Footer/>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teamd: state.team,
  };
};

export default connect(mapStateToProps, actions)(Homepage);
