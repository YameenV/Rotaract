import React, { Component } from 'react'
import '../../../css/memberupdate.css'

class Personalinfo extends Component {
    state = {
        full_name:'',
        dob: '',
        gender: '',
        place: '',
        blood_group:'',
        district:'',
        age:0
    }

    getData = (e) => {
        e.preventDefault()
        this.props.pers("personalInfo",this.state)
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
                    <label>Full name</label>
                    <input type="text" value={this.state.full_name} onChange={(e) => this.setState({ full_name: e.target.value })} placeholder="Enter full name" />
                    <label>Date</label>
                    <input type="date" onChange={(e) => { this.setDate(e.target.value) }} />
                    <label>Gender</label>
                    <select name="gender" onChange={(e) => this.setGender(e.target.value)} id="gender">
                        <option value="male"  >Male</option>
                        <option value="female" >Female</option>
                    </select>
                    <label>Place</label>
                    <input type="text" value={this.state.place} onChange={(e) => this.setState({ place: e.target.value })} placeholder="Enter city or state" />
                  
                    <label>Blood group</label>
                    <input type="text" value={this.state.blood_group} onChange={(e) => this.setState({ blood_group: e.target.value })} placeholder="Enter blood group" />

                    <label>Age</label>
                    <input type="text" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} placeholder="Enter your age" />

                    <label>District</label>
                    <input type="text" value={this.state.district} onChange={(e) => this.setState({ district: e.target.value })} placeholder="Enter district" />
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default Personalinfo
