import '../../css/event.css'
import Navbar from '../navbar/navbar'
const Eventlanding = (props) => {

    let data = props.data
    console.log(data)


    return (data.length) > 0 ? (

        <div className="event_main">
            <Navbar/>
            <div className="event_header">events</div>
            <div className="sphere">
                <div className="ann_sphere1">
                </div>
                <div className="ann_sphere2">
                </div>
                <div className="ann_sphere3">

                </div>
                <div className="ann_sphere4">
                </div>
                <div className="ann_sphere5">
                </div>
            </div>
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
            <div className="event_header">events</div>
            <div className="sphere">
                <div className="ann_sphere1">
                </div>
                <div className="ann_sphere2">
                </div>
                <div className="ann_sphere3">

                </div>
                <div className="ann_sphere4">
                </div>
                <div className="ann_sphere5">
                </div>
            </div>
            <div className="Events">

                <div className="event">
                    <div className="images"  >
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