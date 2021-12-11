import React, { Component } from 'react'

class Educational extends Component {

    state = {
        currently_studying:'',
        certification_done:'',
        future_plan:'',
        book:'',
    }

    render() {
        return (
            <div>
                <form>
                
                <label>Currently studying :</label>
                <input type= "text" value ={this.state.currently_studying} onChange={(e)=>{this.setState({currently_studying:e.target.value})}}/>
                <br/>
                <label>Certification you had done :</label>
                <input type= "text" value ={this.state.certification_done} onChange={(e)=>{this.setState({certification_done:e.target.value})}}/>
                <br/>
                <label>future plane for studying :</label>
                <input type= "text" value ={this.state.future_plan} onChange={(e)=>{this.setState({future_plan:e.target.value})}}/>
                <br/>
                <label>Novels/Book/Articles you had read :</label>
                <input type= "text" value ={this.state.book} onChange={(e)=>{this.setState({book:e.target.value})}}/>
                </form>
                
            </div>
        )
    }
}
export default Educational