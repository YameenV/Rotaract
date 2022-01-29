import '../../css/event.css'
import eve from '../../background/event.mp4'
import Navbar from '../navbar/navbar'
import testimg from "../../imgs/astro.png";
import goldennebula from "../../imgs/Golden_Nebula_Event.mp4";
const Eventlanding = (props) => {
  let newData = props.data;
  console.log(newData)
  return (newData.length) > 0 ? (
    <div className="event_main">
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          position: "fixed",
          left: "0",
        }}
      >
        <source src="https://lh3.googleusercontent.com/K27ZYDc3ssoLG0-vS_o8Irz2Bt_2567CFn8apQaarqZPVf2nxp4DrFELTVqK7K2GONeHM-UnyPRwcaRhnxtHNjrZ5J_fKnVnQKnQ6g5ZMoGe2xkNVRWSqWHxTi6AO8DNGGzmlW61=w2400" type="video/gif" />
      </video>
      <div class="wrapper">
        <header>
            <h1>Events</h1>
        </header>
    </div>
      <div class="container-event">
        {
          newData.map(({img,title,description})=>{
            <div class="card">
        
            <img className="event_img" src={img}></img>
    
            <div className="eventpage_title">{title}</div>
    
            <div className="description-event">
            {description}
            </div>
            </div>
          })
        }
     
        </div>
        </div>
     
  ) : (
    <div className="event_main">
      <Navbar />
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          position: "fixed",
          left: "0",
          overflow: "hidden",
          // mixBlendMode: "screen"
        }}
      >
        <source src={goldennebula} type="video/mp4" />
      </video>

      <div class="wrapper">
        <header>
            <h1>Events</h1>
        </header>
    </div>
      <div class="container-event">
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
        <div class="card">
        
        <img className="event_img" src={testimg}></img>

        <div className="eventpage_title">No events till now</div>

        <div className="description-event">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </div>
        </div>
      </div>
      </div>
  
  );
};

export default Eventlanding