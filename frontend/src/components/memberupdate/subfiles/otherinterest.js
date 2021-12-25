import React, { Component } from 'react'
import '../../../css/memberupdate.css'

class Otherinterest extends Component {

    state = {
        hobbies:'',
        Interest:''
    }

    sendData = (e) =>{
    e.preventDefault();
        let n1 = this.state.hobbies.split(',');
        let n2 = this.state.Interest.split(',')
        let hobbies = n1;
        let Interest = n2;
        let obj = {
            hobbies,
            Interest
        }
        this.props.pers('otherinterest',obj);
    }
    
    render() {
      
        return (
            <div className="other_div">
                <form className="other_form" onSubmit={this.sendData}>
                <label>Hobbies</label>
                
                <input type = "text" value={this.state.hobbies} onChange={(e)=>{this.setState({hobbies:e.target.value})}}/>
                   
                <label>
                    Interests
                </label>
                <input type = "text" value={this.state.Interest} onChange={(e)=>{this.setState({Interest:e.target.value})}}/>
                
                <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Otherinterest
