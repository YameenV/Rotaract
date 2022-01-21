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
            <h4>Aakash Verma, President</h4>
            <h6>varmaaakash2@gmail.com</h6>
            <h6>8381033324</h6>
            
          </div>
          <div className="footer-contact-rushil">
            <h4>Rushil Vira , Secretary</h4>
            <h6>virarushil27@gmail.com</h6>
            <h6>7773988513</h6>
          </div>
        </div>

        <div className="footer-adress">
          <h1>Where we at </h1>
          <h5>
            Universal College of Engineering Near Bhajansons & Punyadham, Kaman
            Bhiwandi Road,Vasai, Palghar-401208.
          </h5>
          {/* <div>
                    <h5>for technical support,</h5>
                    <h6>click here</h6>
                </div> */}
        </div>
      </div>

      <div className="footer-lower-div">
        <div className="footer-social-media">
          <Link to="https://www.google.com"><img className="instaicon" src={insta}></img></Link>
          <Link to="https://www.google.com"><img className="iicon" src={fb}></img></Link>
          <Link to="https://www.google.com"><img className="iicon" src={linkedin}></img></Link>
          <Link to="https://www.google.com"><img className="iicon" src={twitter}></img></Link>
        </div>
        <div className="footer-technical-support">
          <h5>for technical support,</h5>
          <Link to="http://ashutoshupadhyay.me"><h5 >click here</h5></Link>
        </div>
      </div>

      <div className="footer-copyright">
 <h1>© 2022, RCUCOE, All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
