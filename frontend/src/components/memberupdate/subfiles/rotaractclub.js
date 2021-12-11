import React, { Component } from 'react'

class Rotaractclub extends Component {

    state = {
        val1:'',
        val2:'',
        val3:'',
        val4:'',
        val5:'',
        
    }


giveData = (e) =>{
    e.preventDefault();
    console.log(this.state)
}
    render() {
        
        return (
            <div>
                <form className="rot_form">
                <label>
                    Why did you join the club?
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val1:e.target.value})}}value={this.state.val1}/>


                    <label>
                        Current position in club?
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val2:e.target.value})}}  value={this.state.val2}/>


                    <label>
                    Since when are you in the Rotaractclub?    
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val3:e.target.value})}} value={this.state.val3}/>


                    <label>
                    what you like to add or remove tshing rules or suggestion for club?
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val4:e.target.value})}} value={this.state.val4}/>


                    <label>
                        Small Testimonial for club
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val5:e.target.value})}}  value={this.state.val5}/>
                    <button type="submit">
                    Submit
                    </button>
                </form>
               
            </div>
        )
    }
}
export default Rotaractclub