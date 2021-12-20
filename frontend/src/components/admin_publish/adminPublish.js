import React, { Component } from 'react'
import "../../css/admin_publish.css"
import Gala from "../../background/gala.jpg"

class AdminPublish extends Component {

    state = {
        typeof: '',
        atitle: '',
        etitle: '',
        announcement: '',
        event: '',
        imglink: ''
    }
    

    submitAnnouncement = (e) => {
        e.preventDefault();
        let ann = {
            title: this.state.atitle,
            announcement: this.state.announcement
        }
    }
    submitEvent = (e) => {
        e.preventDefault();
        let event = {
            title: this.state.etitle,
            event: this.state.event,
            imagelink: this.state.imglink
        }
    }

  
    render() {
        return (
            <div className='publish-main'>
                <img className='publish-img' src={Gala} />
                <div className='publish-headertext'>
                    Welcome Aakash!
                </div>
                
                {this.state.typeof === 'event_highlight' ? (null):(<button className="public-ann" value="announce" onClick={(e) => { this.setState({ typeof: e.target.value }) }}> + Announce something</button>)}
                {
                    this.state.typeof === 'announce' ? (null):(<button className='public-event' value="event_highlight" onClick={(e) => { this.setState({ typeof: e.target.value }) }}> + Add an event highlight</button>)
                }
                {
                    this.state.typeof === 'announce' ? (
                        <div className='public-ann_con'>
                            <div className='public-ann_img_by'>
                                <img className="public-ann_img"src="https://lh3.googleusercontent.com/ogw/ADea4I55Y8CeJadoMfZsh9xbDTaa8z9Qy1Ge2Ud5Yiak=s83-c-mo" />
                                <h3>By Aakash president</h3>
                            </div>


                            <form className="public-ann-div2" onSubmit={this.submitAnnouncement}>
                                <div className='public-ann_title_div'>
                                    <input className='public-ann_title' placeholder="Title" value={this.state.atitle} onChange={(e) => this.setState({ atitle: e.target.value })} />
                                </div>
                                <div>
                                    <textarea className='public-ann_text' placeholder="Announce something to the club" value={this.state.announcement} onChange={(e) => this.setState({ announcement: e.target.value })} />
                                </div>
                                <div className='public-ann-botton'>
                                    <button className='public-ann_back' type="button" onClick={(e) => { this.setState({ typeof: '' }) }}>Cancel</button>
                                    <button className="public-ann_submit" type="submit">Post</button>
                                </div>
                            </form>



                        </div>
                    ) : (null)
                }
                {
                    this.state.typeof === 'event_highlight' ? (
                        <div>
                            <form onSubmit={this.submitEvent}>
                                <input placeholder="Title" value={this.state.etitle} onChange={(e) => this.setState({ etitle: e.target.value })} />
                                <textarea placeholder="Description" value={this.state.event} onChange={(e) => this.setState({ event: e.target.value })} />
                                <input placeholder="Image link" value={this.state.imglink} onChange={(e) => this.setState({ imglink: e.target.value })} />
                                <button type="button" onClick={(e) => { this.setState({ typeof: '' }) }}>Cancel</button>
                                <button type="submit">Post</button>
                            </form>
                        </div>
                    ) : (null)
                }

            </div>
        )
    }
}
export default AdminPublish