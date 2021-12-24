import React, { useState } from "react";
/* import "react-responsive-carousel/lib/styles/carousel.min.css";  */// requires a loader
/* import { Carousel } from 'react-responsive-carousel'; */
 import "../../css/homepage.css";
import { GiHamburgerMenu } from "react-icons/gi";
import ROTLOGO from "../../imgs/RCUCoEsLogo.png";
import Earth from "../../imgs/earth.png";
import Universe1 from "../../imgs/universe1.png";
import Universe2 from "../../imgs/universe2.png";
import Universe4 from "../../imgs/universe4.png";
import Universe5 from "../../imgs/universe5.png";
import Pic1 from "../../imgs/pic1.png";
import Pic2 from "../../imgs/pic2.png";
import Pic3 from "../../imgs/pic3.png";
import Pic4 from "../../imgs/pic4.png";
import Pic5 from "../../imgs/pic5.png";
import Pic6 from "../../imgs/pic6.png";
import ashu from "../../imgs/ashutosh1.jpg";
import Moon from "../../imgs/moon.png";
import Navbar from "../navbar/navbar"

const Homepage = () => {
  return (
    <div className="Home_main">
      <Navbar/>
      {/* <div> */}

      <div className="earth_div">
        <img className="earth_image" src={Earth}></img>
      </div>
      <div className="first_container">
        <div className="container_header">
          <h1>What is Expand Like Universe ?</h1>
        </div>
        <div className="container_content">
          <h2>
            The universe (Latin: universus) is all of space and time[a] and
            their contents,[10] including planets, stars, galaxies, and all
            other forms of matter and energy. The Big Bang theory is the
            prevailing cosmological description of the development of the
            universe. According to this theory, space and time emerged together
            13.787±0.020 billion years ago,[11] and the universe has been
            expanding ever since. While the spatial size of the entire universe
            is unknown,[3] the cosmic inflation equation indicates that it must
            have a minimum diameter of 23 trillion light years,[12] and it is
            possible to measure the size of the observable universe, which is
            approximately 93 billion light-years in diameter at the present day.
            <br />
            <br />
            The earliest cosmological models of the universe were developed by
            ancient Greek and Indian philosophers and were geocentric, placing
            Earth at the center.[13][14] Over the centuries, more precise
            astronomical observations led Nicolaus Copernicus to develop the
            heliocentric model with the Sun at the center of the Solar System.
            In developing the law of universal gravitation, Isaac Newton built
            upon Copernicus's work as well as Johannes Kepler's laws of
            planetary motion and observations by Tycho Brahe.
          </h2>
        </div>
      </div>

      <div className="universe1_div">
        <img className="universe1_image" src={Universe1}></img>
      </div>

      <div className="universe_2_div">
        <img className="universe_2_image" src={Universe2}></img>
      </div>

      <div className="universe_3_div">
        <img className="universe_2_image" src={Universe4}></img>
      </div>
      <div className="universe1_div">
        <img className="universe1_image" src={Universe1}></img>
      </div>

      <div className="universe_2_div">
        <img className="universe_2_image" src={Universe2}></img>
      </div>
{/* 
      <div className="universe_3_div">
        <img className="universe_3_image" src={Universe4}></img>
      </div> */}


      {/* <div className="universe_4_div">
        <img className="universe_4_image" src={Universe5}></img>
      </div> */}
      <div className="moon_div">
        <img className="moon_image" src={Moon}></img>
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
                <h1>Ashutosh</h1>
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
                <h1>Ashutosh</h1>
              </div>
              <div className="row_2_content1_position">
                <h2> President</h2>
              </div>
            </div>
            <div className="row_2_content2">
              <div className="row_2_image2_div">
                <img className="row_2_image2" src={Pic3}></img>
              </div>
              <div className="row_2_content2_Name">
                <h1>Ashutosh</h1>
              </div>
              <div className="row_2_content2_position">
                <h2> President</h2>
              </div>
            </div>
          </div>

          <div className="row_3">
            <div className="row_3_content1">
              <div className="row_3_image1_div">
                <img className="row_3_image1" src={Pic4}></img>
              </div>
              <div className="row_3_content1_Name">
                <h1>Ashutosh</h1>
              </div>
              <div className="row_3_content1_position">
                <h2> President</h2>
              </div>
            </div>
            <div className="row_3_content2">
              <div className="row_3_image2_div">
                <img className="row_3_image2" src={Pic5}></img>
              </div>
              <div className="row_3_content2_Name">
                <h1>Ashutosh</h1>
              </div>
              <div className="row_3_content2_position">
                <h2> President</h2>
              </div>
            </div>
            <div className="row_3_content3">
              <div className="row_3_image1_div">
                <img className="row_3_image3" src={Pic6}></img>
              </div>
              <div className="row_3_content3_Name">
                <h1>Ashutosh</h1>
              </div>
              <div className="row_3_content3_position">
                <h2> President</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="announcement">
        <div className="annoncement_header">
          <h1>Announcements</h1>
        </div>
        <div className="announcement_container">
          <div className="for_padding">
            <div className="announcement_content_1">
              <div className="content1_header">
                <div className="content1_image_div">
                  <img className="content1_image" src={Pic3}></img>
                </div>
                <div className="content1_name">
                  <div className="content1_name_name"> BY Aakash</div>
                  <div className="content1_name_position">President</div>
                </div>
              </div>
              <div className="content1_message">
                <h1>I am President !!!!!</h1>
              </div>
              <div className="content1_date">on 1st november 2021</div>
              <hr className="hr1" />
            </div>
            <div className="announcement_content_1">
              <div className="content1_header">
                <div className="content1_image_div">
                  <img className="content1_image" src={Pic3}></img>
                </div>
                <div className="content1_name">
                  <div className="content1_name_name"> BY Rushil</div>
                  <div className="content1_name_position">Secratory</div>
                </div>
              </div>
              <div className="content1_message">
                <h1>I am President !!!!!</h1>
              </div>
              <div className="content1_date">on 1st november 2021</div>
              <hr className="hr1" />
            </div>
            <div className="announcement_content_1">
              <div className="content1_header">
                <div className="content1_image_div">
                  <img className="content1_image" src={Pic3}></img>
                </div>
                <div className="content1_name">
                  <div className="content1_name_name"> BY Aakash</div>
                  <div className="content1_name_position">President</div>
                </div>
              </div>
              <div className="content1_message">
                <h1>I am President !!!!!</h1>
              </div>
              <div className="content1_date">on 1st november 2021</div>
              <hr className="hr1" />
            </div>
          </div>
        </div>
      </div>;

  


      <div className="homepage_events">
        <div className="home_event_header"><h1>Events </h1> </div>
        <div className="home_event_container">
          <div className="event_container_1">
            <div className="event_container_1_image_div"><img className="container_1_image"  src={Pic3}></img></div>
            <div className="event_title">Garbe ki shaam </div>
            <div className="event_container_1_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e............</div>
          </div>
          <div className="event_container_2">
            <div className="event_container_2_image_div"><img className="container_1_image" src={Pic3} ></img></div>
            <div className="event_title_2">Garbe ki shaam </div>
            <div className="event_container_2_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e............</div>
          </div>
          <div className="event_container_3">
            <div className="event_container_3_image_div"><img className="container_1_image" src={Pic3} ></img></div>
            <div className="event_title_3">Garbe ki shaam </div>
            <div className="event_container_3_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e............</div>
          </div>
          
        
        </div>
    
      </div>

      <div className="leaderboard">
        <div className="leaderboard_h">
          <h1>Leaderboards</h1>
        </div>
        <div className="leaderboard_bar">


         <div className="leaderboard_bar_1">
            <div >
              <img className="bar_1_image" src={Pic2}></img>
            </div>
            <div className="bar_1_name">
              <h2>Bar 1</h2>
            </div>
          </div>

          <div className="leaderboard_bar_2">
            <div >
              <img className="bar_2_image" src={Pic3}></img>
            </div>
            <div className="bar_2_name">
              <h2>Bar 2</h2>
            </div>
          </div>

          <div className="leaderboard_bar_3">
            <div >
              <img  className="bar_3_image"src={Pic4}></img>
            </div>
            <div className="bar_3_name">
              <h2>Bar 3</h2>
            </div>
          </div>

          <div className="leaderboard_bar_4">
            <div >
              <img className="bar_4_image" src={Pic5}></img>
            </div>
            <div className="bar_4_name">
              <h2>Bar 4</h2>
            </div>
          </div>

          <div className="leaderboard_bar_5">
            <div >
              <img className="bar_5_image" src={Pic6}></img>
            </div>
            <div className="bar_5_name">
              <h2>Bar 4</h2>
            </div>
          </div>

          

       
               
        
        
        
        </div>
        <div className="leaderboard_switch">
          <div>Team </div>
          <div>Individual </div>
        </div>
        <div className="leaderboard_more">
          View all
        </div>

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
          <h1> Input feild </h1>
          {/* <input className="team_info_input" type="search" placeholder="Search more"></input> */}
        </div>
      </div>

      {/* <div className="Registration">
        <div className="registraion_header">
          <h1>Join Rotaract Club Today</h1>
        </div>
        <div className="registraion_button">
          <button type="submit"> Register</button>
        </div>
      </div> */}
      {/* <Carousel>
          <div>
            <div>
              <img className="carousel_image" src={Pic1}></img>
            </div>
            <div>
              <h2>Ashutosh</h2>
            </div>
          </div>
          <div>
          <img className="carousel_image" src={Pic1}></img>
          <h2>shutosh</h2>
        </div>
        <div>
          <img  className="carousel_image" src={Pic1}></img>
          <h2>Ashu</h2>
        </div>

      </Carousel> */}

      




      <footer className="footer">
        <div className="footer_div">
          <h1>footer</h1>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
