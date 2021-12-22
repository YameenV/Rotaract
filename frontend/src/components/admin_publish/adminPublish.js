import React, { Component } from 'react'

class AdminPublish extends Component {

    state = {
        typeof:'',
        atitle:'',
        etitle:'',
        announcement:'',
        event:'',
        imglink:''
    }

    submitAnnouncement = (e) =>{
        e.preventDefault();
        let ann = {
            title:this.state.atitle,
            announcement:this.state.announcement
        }
    }
    submitEvent = (e) =>{
        e.preventDefault();
        let event = {
            title:this.state.etitle,
            event:this.state.event,
            imagelink:this.state.imglink
        }
    }

    render() {
        return (
            <div>
                <div>
                    Welcome
                </div>
            <button value = "announce"  onClick={(e)=>{this.setState({typeof:e.target.value})}}>Announce something</button>
            <button value="event_highlight" onClick={(e)=>{this.setState({typeof:e.target.value})}}>Add an event highlight</button>
            {
                this.state.typeof === 'announce' ? (
                    <div>
                       <div>
                           <img alt=""/>
                           <h3>By Aakash president</h3>
                       </div>

                        <div>
                            <form onSubmit={this.submitAnnouncement}>
                            <input placeholder="Title" value={this.state.atitle} onChange={(e)=>this.setState({atitle:e.target.value})}/>
                            <textarea placeholder="Announce something to the club" value={this.state.announcement} onChange={(e)=>this.setState({announcement:e.target.value})}/>
                            <button type="button" onClick={(e)=>{this.setState({typeof:''})}}>Cancel</button>
                            <button type="submit">Post</button>    
                            </form>
                            
                        </div>

                    </div>
                ):(null)
            }
            {
                this.state.typeof === 'event_highlight' ? (
                    <div>
                        <form onSubmit={this.submitEvent}>
                            <input placeholder="Title" value={this.state.etitle} onChange={(e)=>this.setState({etitle:e.target.value})}/>
                            <textarea placeholder="Description" value = {this.state.event} onChange={(e)=>this.setState({event:e.target.value})}/>
                            <input placeholder="Image link" value={this.state.imglink} onChange={(e)=>this.setState({imglink:e.target.value})}/>
                            <button type="button" onClick={(e)=>{this.setState({typeof:''})}}>Cancel</button>
                            <button type="submit">Post</button>    
                        </form>
                    </div>
                ):(null)
            }

            </div>
        )
    }
}
export default AdminPublish