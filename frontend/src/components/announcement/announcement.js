
import '../../css/announcement.css'
import Navbar from '../navbar/navbar'
import ann from '../../background/announcements.mp4'


function Announcement(props) {
  let data = props.adata
  console.log(data)
  return (data.length) > 0 ? (
    <div className="announcement_main">
      <video autoPlay muted loop
      style={{
        position:"absolute",
        objectFit:"cover",
        width:"100%",
        height:"100%",
        zIndex:"-1",
        position:"fixed",
      }}
      >
			<source src={ann} type="video/mp4" />
      </video>
      
      <Navbar/>

      <div className="announcement_header-ann">
        Announcement
      </div>


      <div className="announcement-con">
        {
          data.map(items =>
            <div className='announcement'>
              <div className="ann_image-con">
                <img className="ann_image" src="https://lh3.googleusercontent.com/ogw/ADea4I4aW8SmWEbhY1q_SL-RvoLNujBEj5VsoDcB9BfSWBo=s83-c-mo" />
                <div className="ann_by">{items.name}</div>
              </div>
              <div className="ann_title">{items.title}</div>
              <div className="ann_date">{items.day}-{items.month}-{items.year}</div>
              <div className="ann_description">{items.announcement}</div>
              <hr className="ann_line"></hr>

            </div>
          )
        }
      </div>
    </div>) : (
    <div className="announcement_main">
      <video autoPlay muted loop
      style={{
        position:"absolute",
        objectFit:"cover",
        width:"100%",
        height:"100%",
        zIndex:"-1",
        position:"fixed"
      }}
      >
			<source src={ann} type="video/mp4" />
      </video>
      
      <Navbar/>
      <div className="announcement_header-ann">
        Announcement
      </div>

      <div className="announcement-con">


        <div className='announcement'>
          <div className="ann_image-con">
            <img className="ann_image" />
            <div className="ann_by">No announcement till now</div>
          </div>
          <div className="ann_title">Please wait for a while, the server might be down</div>
          <div className="ann_date">0-0-0</div>
          <div className="ann_description">No announcement</div>
          <hr className="ann_line"></hr>

        </div>


      </div>
    </div>)



}

export default Announcement;
