import React, { Component } from 'react'

class Rotaractclub extends Component {

    state = {
        joning_reason:'',
        current_position:'',
        number_of_year:'',
        suggestion:'',
        testimonial:'',
        
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
                    <input type="text" onChange={(e)=>{this.setState({joning_reason:e.target.value})}}value={this.state.joning_reason}/>


                    <label>
                        Current position in club?
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({current_position:e.target.value})}}  value={this.state.current_position}/>


                    <label>
                    Since when are you in the Rotaractclub?    
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({vanumber_of_yearl3:e.target.value})}} value={this.state.number_of_year}/>


                    <label>
                    what you like to add or remove tshing rules or suggestion for club?
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({suggestion:e.target.value})}} value={this.state.suggestion}/>


                    <label>
                        Small Testimonial for club
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({testimonial:e.target.value})}}  value={this.state.testimonial}/>
                    <button type="submit">
                    Submit
                    </button>
                </form>
               
            </div>
        )
    }
}
export default Rotaractclub