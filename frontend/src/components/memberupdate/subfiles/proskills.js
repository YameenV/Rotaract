import React, { Component } from 'react'

class Proskills extends Component {
    state = {
        val1:'',
        val2:'',
        val3:'',
        val4:'',
        val5:'',
        val6:'',
        val7:''
    }

    giveData = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                  <form className="rot_form" onSubmit={this.giveData} className="rot_form">
                  
                    <label>
                    Technology/ Programing Languages /Software /Skill you know :
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val1:e.target.value})}}value={this.state.val1}/>


                    <label>
                    Field of Interest :
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val2:e.target.value})}}  value={this.state.val2}/>


                    <label>
                    Experience in that field :  
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val3:e.target.value})}} value={this.state.val3}/>


                    <label>
                    Projects / Open source contribution / Articles / blog you had worked on
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val4:e.target.value})}} value={this.state.val4}/>


                    <label>
                    Internship you had done :
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val5:e.target.value})}}  value={this.state.val5}/>

                    <label>
                    Internship you had done :
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val6:e.target.value})}}  value={this.state.val6}/>

                    <label>
                    Internship you had done :
                    </label>
                    <input type="text" onChange={(e)=>{this.setState({val7:e.target.value})}}  value={this.state.val7}/>

                    <button type="submit">
                    Submit
                    </button>
                
                </form>
            </div>
        )
    }
}

export default Proskills