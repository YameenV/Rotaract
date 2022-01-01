import React, { Component } from "react";
import "../../css/admin_publish.css";
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
class AdminPublish extends Component {
  state = {
    typeof: "",
    atitle: "",
    etitle: "",
    announcement: "",
    annName:"",
    event: "",
    imglink: "",
    date:"",
    message:""
  };

  submitAnnouncement = (e) => {
    e.preventDefault();
    let newDate = this.state.date.split('-')
  
    let ann = {
      name: this.state.annName,
      title: this.state.atitle,
      announcement:this.state.announcement,
      month:newDate[1],
      day:newDate[2],
      year:newDate[0],
     
    };
    this.props.createAnnouncement(ann)
  };
  submitEvent = (e) => {
    e.preventDefault();
    let event = {
      title: this.state.etitle,
      event: this.state.event,
      imagelink: this.state.imglink,
    };
    this.props.createEvent(event)
  };

  render() {
    
    return (
      <div className="publish-main">
        <div className="publish-headertext">Welcome Aakash!</div>

        {this.state.typeof === "announce" ? null : (
          <button
            className="public-ann"
            value="announce"
            onClick={(e) => {
              this.setState({ typeof: e.target.value });
            }}
          >
            {" "}
            + Announce something
          </button>
        )}
        {this.state.typeof === "event_highlight" ? null : (
          <button
            className="public-event"
            value="event_highlight"
            onClick={(e) => {
              this.setState({ typeof: e.target.value });
            }}
          >
            {" "}
            + Add an event highlight
          </button>
        )}
        {this.state.typeof === "announce" ? (
          <div className="public-ann_con">
            <div className="public-ann_img_by">
              <img
                className="public-ann_img"
                src="https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s83-c-mo"
              />
              <h3>By Aakash president</h3>
            </div>

            <form
              className="public-ann-div2"
              onSubmit={this.submitAnnouncement}
            >
              <div className="public-ann_title_div">
                <input
                  className="public-ann_title"
                  placeholder="Title"
                  value={this.state.atitle}
                  onChange={(e) => this.setState({ atitle: e.target.value })}
                />
              </div>
              <div>
                <input
                className="public-ann_title"
                placeholder="Name"
                value={this.state.annName}
                onChange={(e)=>this.setState({annName:e.target.value})}
                />
              </div>
              <div>
                <input 
                className="public-ann_title"
                type="date"
                placeholder="Date"
                value={this.state.date}
                onChange={(e)=>this.setState({date:e.target.value})}
                />

              </div>
              <div>
                <input 
                type="text"
                className="public-ann_title"
                placeholder="Message"
                value={this.state.message}
                onChange={(e)=>this.setState({message:e.target.value})}
                />
              </div>
              <div>
                <textarea
                  className="public-ann_text"
                  placeholder="Announce something to the club"
                  value={this.state.announcement}
                  onChange={(e) =>
                    this.setState({ announcement: e.target.value })
                  }
                />
              </div>
              <div className="public-ann-botton">
                <button
                  className="public-ann_back"
                  type="button"
                  onClick={(e) => {
                    this.setState({ typeof: "" });
                  }}
                >
                  Cancel
                </button>
                <button className="public-ann_submit" type="submit">
                  Post
                </button>
              </div>
            </form>
          </div>
        ) : null}
        {this.state.typeof === "event_highlight" ? (
            <div className="publish-event_div">
            <form className="publish-event_dcon" onSubmit={this.submitEvent}>
              <input className="publish_event_title"
                placeholder="Title"
                value={this.state.etitle}
                onChange={(e) => this.setState({ etitle: e.target.value })}
              />
              <textarea className="publish_event_des"
                placeholder="Description"
                value={this.state.event}
                onChange={(e) => this.setState({ event: e.target.value })}
              />
              <input className="publish_event_imglink"
                placeholder="Image link"
                value={this.state.imglink}
                onChange={(e) => this.setState({ imglink: e.target.value })}
              />
              <div className="public-ann-botton">
              <button
              className="public-ann_back"
                type="button"
                onClick={(e) => {
                  this.setState({ typeof: "" });
                }}
              >
                Cancel
              </button>
              <button className="public-ann_submit" type="submit">Post</button>
              </div>
            </form>
            </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    anndata:state.announcement,
  }
}

export default connect(mapStateToProps,actions)(AdminPublish);
