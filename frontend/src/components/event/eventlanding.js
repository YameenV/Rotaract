import '../../css/event.css'
import Navbar from '../navbar/navbar'
import eve from '../../background/event.mp4'
import { GiLevelFour } from 'react-icons/gi'
const Eventlanding = (props) => {

    let data = props.data
    console.log(data)


    return (data.length) > 0 ? (

        <div className="event_main">
            <video autoPlay muted loop
      style={{
        objectFit:"cover",
        width:"100%",
        height:"100%",
        zIndex:"-1",
        position:"fixed",
        left:"0"

      }}
      >
			<source src={eve} type="video/mp4" />
      </video>
            <Navbar />
            <div className="event_header">events</div>
            <div className="Events">
                {


                    data.map((items) =>
                        <div className="event">
                            <div className="images"  >
                                <img className="event_img" src={items.img}></img>
                            </div>

                            <div className="title">
                                {items.title}
                            </div>

                            <div className="description">
                                {items.description}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    ) : (
        <div className="event_main">
            <video autoPlay muted loop
      style={{
        position:"absolute",
        objectFit:"cover",
        width:"100%",
        height:"100%",
        zIndex:"-1",
        position:"fixed",
        left:"0"
      }}
      >
			<source src={eve} type="video/mp4" />
      </video>
            <Navbar />
            <div className="event_header">events</div>
            <div className="Events">

                <div className="event">
                    <div className="images">
                        <img className="event_img"></img>
                    </div>

                    <div className="title">
                        No events till now
                    </div>

                    <div className="description">
                        The server may be down, please wait for a while
                    </div>
                </div>

            </div>
        </div>)



}

export default Eventlanding