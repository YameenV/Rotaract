import React, { Component } from 'react'
import '../../../css/memberupdate.css'
class Educational extends Component {

    state = {
        currently_studying:'',
        certification_done:'',
        future_plan:'',
        book:'',
    }

    sendData = (e) =>{
        e.preventDefault();
        let certification_done = this.state.certification_done.split(',')
        let future_plan = this.state.future_plan.split(',')
        let book = this.state.book.split(',')
        let obj = {
            currently_studying:this.state.currently_studying,
            certification_done,
            future_plan,
            book
        }
        this.props.pers('education_background',obj)
    }

    render() {
        return (
            <div className="education_div">
                <form className="education_form" onSubmit={this.sendData}>
                
                    <label>Currently studying :</label>
                    <input type= "text" value ={this.state.currently_studying} onChange={(e)=>{this.setState({currently_studying:e.target.value})}}/>
                    
                    <label>Certification you had done :</label>
                    <input type= "text" value ={this.state.certification_done} onChange={(e)=>{this.setState({certification_done:e.target.value})}}/>
                    
                    <label>future plane for studying :</label>
                    <input type= "text" value ={this.state.future_plan} onChange={(e)=>{this.setState({future_plan:e.target.value})}}/>
                    
                    <label>Novels/Book/Articles you had read :</label>
                    <input type= "text" value ={this.state.book} onChange={(e)=>{this.setState({book:e.target.value})}}/>
                
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}
export default Educational