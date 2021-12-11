import React, { Component } from 'react'

class Personalinfo extends Component {
    state = {
        dob:'',
        gender:'',
        place:''
    }

    getData = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }

    setGender = (t) =>{
        this.setState({
            gender:t
        })
    }

    setDate = (d) =>{
        this.setState({
            dob:d
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getData} className="form_personal">
<input type = "date" onChange={(e)=>{this.setDate(e.target.value)}}/>
<label>Gender</label>

<select name="gender" onChange={(e)=>this.setGender(e.target.value)} id="gender">
  <option value="male"  >Male</option>
  <option value="female" >Female</option>
</select>
<input type="text" value={this.state.place} onChange={(e)=>this.setState({place:e.target.value})} placeholder="Enter city or state" />
<button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default Personalinfo
