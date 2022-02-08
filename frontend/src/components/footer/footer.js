import "../../css/footer.css";
import insta from "../../background/instaicon.png";
import fb from "../../background/fbicon.png";
import twitter from "../../background/twittericon.png";
import linkedin from "../../background/linkedinicon.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main-div-footer">
      <div className="footer-upper-div">
        <div className="footer-links">
          <h1>LINKS</h1>
          <div className="footer-page-link">
            <Link to="/home">
              <h6>Homepage</h6>
            </Link>
            <Link to="/announcement">
              <h6>Announcement</h6>
            </Link>
            <Link to="/event">
              <h6>Events</h6>
            </Link>
            <Link to="/leaderboard">
              <h6>leaderboard</h6>
            </Link>
          </div>
        </div>

        <div className="footer-contact">
          <h1>Contact Us</h1>
          <div className="footer-contact-aakash">
            <h4>Akash Varma, President</h4>
            <h6>varmaaakash2@gmail.com</h6>
            <a href="https://wa.me/918381033324">
              <h6>8381033324</h6>
            </a>
          </div>
          <div className="footer-contact-rushil">
            <h4>Rushil Vira , Secretary</h4>
            <h6>virarushil27@gmail.com</h6>
            <a href="https://wa.me/917773988513">
              <h6>7773988513</h6>
            </a>
          </div>
        </div>

        <div className="footer-adress">
          <h1>Where we at </h1>
          <a href="https://goo.gl/maps/zXyTGpLazcRdVig66">
            <h5>
              Universal College of Engineering Near Bhajansons & Punyadham,
              Kaman Bhiwandi Road,Vasai, Palghar-401208.
            </h5>
          </a>
          {/* <div>
                    <h5>for technical support,</h5>
                    <h6>click here</h6>
                </div> */}
        </div>
      </div>

      <div className="footer-lower-div">
        <div className="footer-social-media">
          <a href="https://www.instagram.com/rcucoe/">
            <img className="instaicon" src={insta}></img>
          </a>
          <a href="https://www.facebook.com/rotaractclub.ucoe">
            <img className="iicon" src={fb}></img>
          </a>
          <a href="https://www.linkedin.com/in/rotaract-club-of-ucoe-386169216">
            <img className="iicon" src={linkedin}></img>
          </a>
          <a href="https://mobile.twitter.com/rcucoe">
            <img className="iicon" src={twitter}></img>
          </a>
        </div>
        <div className="footer-technical-support">
          <h5>for technical support,</h5>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7Kbc3j2yPtY-lVvq6RC3L4jvOE0Umny_C2MvZAL97rSl9OQ/viewform">
            <h5>click here</h5>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <h1>© 2022, RCUCOE, All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
