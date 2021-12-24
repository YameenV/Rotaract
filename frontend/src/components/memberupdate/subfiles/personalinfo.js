import React, { Component } from 'react'
import '../../../css/memberupdate.css'

class Personalinfo extends Component {
    state = {
        dob: '',
        gender: '',
        place: ''
    }

    getData = (e) => {
        e.preventDefault()
        this.props.pers(this.state)
    }

    setGender = (t) => {
        this.setState({
            gender: t
        })
    }

    setDate = (d) => {
        this.setState({
            dob: d
        })
    }

    render() {
        return (
            <div className="personal_div">
                <form onSubmit={this.getData} className="personal_form">
                    <label>Date</label>
                    <input type="date" onChange={(e) => { this.setDate(e.target.value) }} />
                    <label>Gender</label>
                    <select name="gender" onChange={(e) => this.setGender(e.target.value)} id="gender">
                        <option value="male"  >Male</option>
                        <option value="female" >Female</option>
                    </select>
                    <label>Place</label>
                    <input type="text" value={this.state.place} onChange={(e) => this.setState({ place: e.target.value })} placeholder="Enter city or state" />
                    <br/>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default Personalinfo
