import React, { Component } from 'react'
import '../../../css/memberupdate.css'

class About extends Component {

    state = {
        describe:'',
        yourself_ten_years:''
    }
    sendData = (e) =>{
        e.preventDefault();
        let describe = this.state.describe.split(',')
        let yourself_ten_years = this.state.yourself_ten_years.split(',')
        let obj = {
            describe,
            yourself_ten_years
        }
        this.props.pers('about',obj)
        
    }

    render() {
        return (
            <div className="about_div">
                <form className="about_form" onSubmit={this.sendData}>
                <label>Describe yourself in 5-6 sentence:</label>
                <textarea type="text" value = {this.state.describe} onChange={(e)=>{this.setState({describe:e.target.value})}}/>
                <label>Where do you see your self in 10 years:</label>
                <input type="text" value = {this.state.yourself_ten_years} onChange={(e)=>{this.setState({yourself_ten_years:e.target.value})}}/>
                <br/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default About