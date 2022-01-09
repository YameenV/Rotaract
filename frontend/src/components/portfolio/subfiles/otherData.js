import React, { Component } from "react";
import "../../../css/portfolio.css"

class OtherData extends Component {

  render() {
    let skills = this.props.proskills
    let otherinterest = this.props.otherInterest
    let about = this.props.about
    let rotractclub = this.props.rotractClub
    let education = this.props.education_background
    return (
      <div className="pro-otherdata_con">
        <div className="pro-otherdata_rotaractclub">
          <h1>Rotaract Club</h1>
          <h3>Why you joined Rotaract club?</h3>
          <p>{rotractclub.joning_reason}</p>

          <br />

          <h3>Since when are you in Rotaract club?</h3>
          <p>{rotractclub.number_of_year}</p>

          <br />

          <h3>Testimonial for the club:</h3>
          <p>{rotractclub.testimonial}</p>
        </div>
        <br />

        <div className="pro-otherdata_professional">
          <h1>Professional skills</h1>
          <h3>Technology/ Programing Languages /Software /Skill you know :</h3>
          <p className="pro-otherdata_professional-Tech">
            {skills.skill.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </p>

          <br />

          <h3>Field of Interest :</h3>
          <p className="pro-otherdata_professional-field">
            {skills.field_of_interest.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </p>

          <br />
          <h3>Experience in that field :</h3>
          <p>{skills.experience}</p>
          <br />

          <h3>
            Projects / Open source contribution / Articles / blog you had worked
            on :
          </h3>
          <p>
            {skills.artical ? (
              skills.artical.map((item, i) => <div>{item}</div>)
            ) : (
              <div>no articles</div>
            )}
          </p>

          <br />
          <h3>Internship you had done :</h3>
          <p className="pro-otherdata_professional-internship">
            {skills.internship ? (
              skills.internship.map((item, i) => <div>{item}</div>)
            ) : (
              <div>no internship</div>
            )}
          </p>
          <br />

          <h3>Achievement you had done :</h3>
          <p className="pro-otherdata_professional-ach">
            {skills.achievement ? (
              skills.achievement.map((item, i) => <div>{item}</div>)
            ) : (
              <div>no achievement</div>
            )}
          </p>

          <br />
          <h3>Your Future Goal:</h3>
          <p>{skills.future_goal}</p>
        </div>
        <br />
        <div className="pro-otherdata_education">
          <h1>Educational background</h1>
          <h3>Currently studying at: </h3>
          <p>{education.currently_studying}</p>
          <br />

          <h3>Certification you had done :</h3>
          <div className="pro-otherdata_education-cert">
            {education.certification_done ? (
              education.certification_done.map((item, i) => (
                <p key={i}>{item}</p>
              ))
            ) : (
              <p>no certification</p>
            )}
          </div>
          <br />

          <h3>future plane for studying :</h3>
          <p>
            {education.future_plan ? (
              education.future_plan.map((item, i) => <div>{item}</div>)
            ) : (
              <div>no future plan</div>
            )}
          </p>
          <br />

          <h3>Novels/Book/Articles you had read :</h3>
          <p>
            {education.book ? (
              education.book.map((item, i) => <div>{item}</div>)
            ) : (
              <div>not a book</div>
            )}
          </p>
        </div>

        <br />
        <div className="pro-otherdata_interests">
          <h1>Other interests</h1>
          <h3>Hobbies</h3>
          <p>
            {otherinterest.hobbies ? (
              otherinterest.hobbies.map((item, i) => <div>{item}</div>)
            ) : (
              <div>no hobbies</div>
            )}
          </p>
          <br />
          <h3>Interest</h3>
          <p>
            {otherinterest.Interest ? (
              otherinterest.Interest.map((item, i) => <div>{item}</div>)
            ) : (
              <div>no interests</div>
            )}
          </p>
        </div>

        <br />
        <div className="pro-otherdata_about">
          <h1>About</h1>
          <h3>Describe yourself in 5-6 setences</h3>
          <p>{about.describe}</p>
          <br />
          <h3>Where do you see youself in 10 years</h3>
          <p>{about.yourself_in_ten_years}</p>
        </div>
      </div>
    );
  }
}
export default OtherData;
