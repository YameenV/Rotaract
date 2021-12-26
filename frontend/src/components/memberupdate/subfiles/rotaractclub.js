import React, { Component } from 'react'
import '../../../css/memberupdate.css'

class Rotaractclub extends Component {

    state = {
        joning_reason: '',
        current_position: '',
        number_of_year: '',
        suggestion: '',
        testimonial: '',
        avenue:''

    }

    sendData = (e) =>{
        e.preventDefault()
        let avenue = this.state.avenue.split(',')
        let obj = {
            joning_reason:this.state.joning_reason,
            current_position:this.state.current_position,
            number_of_year:this.state.number_of_year,
            suggestion:this.state.suggestion,
            testimonial:this.state.testimonial,
            avenue
        }

        this.props.pers('rotaract',obj)
    }

    render() {

        return (
            <div className="rotaract_div">
                <form className="rotaract_form" onSubmit={this.sendData}>
                    <label>
                        Why did you join the club?
                    </label>
                    <input type="text" onChange={(e) => { this.setState({ joning_reason: e.target.value }) }} value={this.state.joning_reason} />


                    <label>
                        Current position in club?
                    </label>
                    <input type="text" onChange={(e) => { this.setState({ current_position: e.target.value }) }} value={this.state.current_position} />


                    <label>
                        Since when are you in the Rotaractclub?
                    </label>
                    <input type="text" onChange={(e) => { this.setState({ number_of_year: e.target.value }) }} value={this.state.number_of_year} />


                    <label>
                        what you like to add or remove tshing rules or suggestion for club?
                    </label>
                    <input type="text" onChange={(e) => { this.setState({ suggestion: e.target.value }) }} value={this.state.suggestion} />


                    <label>
                        Small Testimonial for club
                    </label>
                    <input type="text" onChange={(e) => { this.setState({ testimonial: e.target.value }) }} value={this.state.testimonial} />
                    <button type="submit">
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}
export default Rotaractclub