
import '../../css/announcement.css'

function Announcement(props) {
let data = props.adata
 console.log(data)
  return (
    <div className="announcement_main">

      <div className="announcement_header">
        Announcement
      </div>
      <div className="announcement_sphere">
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


      <div className="announcement-con">
        {
          data.map(items =>
            <div className='announcement'>
              <div className="ann_image-con">
                <img className="ann_image" src={items.image} />
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
    </div>

  );
}

export default Announcement;
