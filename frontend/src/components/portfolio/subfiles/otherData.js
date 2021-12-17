import React, { Component } from "react";

class OtherData extends Component {

  render() {
    let skills = this.props.proskills
    let otherinterest = this.props.otherInterest
    let about = this.props.about
    let rotractclub = this.props.rotractClub
    let education = this.props.education_background
    return (
      <div>
        <div>
          <h1>Rotaract Club</h1>
          <h2>Why you joined Rotaract club?</h2>
          <p>{rotractclub.joning_reason}</p>

          <br />

          <h2>Since when are you in Rotaract club?</h2>
          <p>{rotractclub.number_of_year}</p>

          <br />

          <h2>Testimonial for the club:</h2>
          <p>{rotractclub.testimonial}</p>
        </div>
        <br />

        <div>
          <h1>Professional skills</h1>
          <h2>Technology/ Programing Languages /Software /Skill you know :</h2>
          <div>{skills.skill.map((item,i)=>(
            <div key={i}>
              {item}
            </div>
          ))}</div>


          <br />

          <h2>Field of Interest :</h2>
          <div>{skills.field_of_interest.map((item,i)=>(
            <div key = {i}>
              {item}
            </div>
          ))}</div>

          <br />
          <h2>Experience in that field :</h2>
          <p>{skills.experience}</p>
          <br />

          <h2>
            Projects / Open source contribution / Articles / blog you had worked
            on :
          </h2>
          <p>{skills.artical ? 
          skills.artical.map((item,i)=>(
            <div>
              {item}
            </div>
          )):
          <div>
            no articles
          </div>  
        }</p>

          <br />
          <h2>Internship you had done :</h2>
          <div>{
          skills.internship?
          skills.internship.map((item,i)=>(
            <div>
              {item}
            </div>
          )):<div>
              no internship
             </div>
        }</div>
          <br />

          <h2>Achievement you had done :</h2>
          <div>{skills.achievement ? 
            skills.achievement.map((item,i)=>(
              <div>{item}</div>
            ))
          :
          <div>
          no achievement
          </div>}
          </div>

          <br />
          <h2>Your Future Goal:</h2>
          <p>{skills.future_goal}</p>
        </div>
        <br />
        <div>
          <h1>Educational background</h1>
          <h2>Currently studying at: </h2>
          <p>{education.currently_studying}</p>
          <br />

          <h2>Certification you had done :</h2>
          <div>{education.certification_done ? 
          education.certification_done.map((item,i)=>(
            <div key = {i}>
              {item}
            </div>
          )):<div>no certification</div>  
        }</div>
          <br />

          <h2>future plane for studying :</h2>
          <p>{education.future_plan ? 
          education.future_plan.map((item,i)=>(
            <div>
              {item}
            </div>
          )):<div>no future plan</div>
        }</p>
          <br />


          <h2>Novels/Book/Articles you had read :</h2>
          <p>{education.book ? 
        education.book.map((item,i)=>(
          <div>
            {item}
          </div>
        )):<div>not a book</div>  
        }</p>
        </div>

        <br />
        <div>
          <h1>Other interests</h1>
          <h2>Hobbies</h2>
          <p>{otherinterest.hobbies ?
        otherinterest.hobbies.map((item,i)=>(
          <div>
            {item}
          </div>
        )):<div>no hobbies</div>  
        }</p>
          <br />
          <h2>Interest</h2>
          <p>{otherinterest.Interest ? 
        otherinterest.Interest.map((item,i)=>(
          <div>
            {item}
          </div>
        )):<div>no interests</div>
        }</p>
        </div>

        <br />
        <div>
          <h1>About</h1>
          <h2>Describe yourself in 5-6 setences</h2>
          <p>{about.describe}</p>
          <br />
          <h2>Where do you see youself in 10 years</h2>
          <p>{about.yourself_in_ten_years}</p>
        </div>
      </div>
    );
  }
}
export default OtherData;
