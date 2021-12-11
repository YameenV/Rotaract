import '../../css/event.css'

const Eventlanding = (props) => {
    
    let data = props.data.eventData
    console.log(data)
    

    return (
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
    )

}

export default Eventlanding