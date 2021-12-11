
import '../../css/announcement.css'

function Announcement() {

  const data = [
    {
      "image": 'https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo',
      "by": "By Aakarsh President",
      "title": "Gbm meeting",
      "date": "On 1st November 2001",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "image": 'https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo',
      "by": "By Aakarsh President",
      "title": "Gbm meeting",
      "date": "On 1st November 2001",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "image": 'https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo',
      "by": "By Aakarsh President",
      "title": "Gbm meeting",
      "date": "On 1st November 2001",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "image": 'https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s32-c-mo',
      "by": "By Aakarsh President",
      "title": "Gbm meeting",
      "date": "On 1st November 2001",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]


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
                <div className="ann_by">{items.by}</div>
              </div>
              <div className="ann_title">{items.title}</div>
              <div className="ann_date">{items.date}</div>
              <div className="ann_description">{items.description}</div>
              <hr className="ann_line"></hr>

            </div>
          )
        }
      </div>
    </div>

  );
}

export default Announcement;
