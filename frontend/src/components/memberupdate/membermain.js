import React, { Component } from 'react'
import LauncherDiv from './launcherDiv'
import '../../css/memberupdate.css'
import { connect } from 'react-redux'

import * as actions from '../../actions/index'
import MemberPic from "../../imgs/ashutosh1.jpg";
import Navbar from '../navbar/navbar';
import mem from '../../background/memupdate.mp4'


class MemberContainer extends Component {


    state = {
        typeofupdate: 'personalinfo',
        firstColor:'black',
        secondColor:'transparent',
        thirdColor:'transparent',
        fourthColor:'transparent',
        fiveColor:'transparent',
        sixColor:'transparent',
        seventhColor:'transparent',
        uid:this.props.things ? this.props.things.uid:null,
        displayName:'',
        recievedData:{}
    }

    componentWillMount(){
        let name = this.props.things
        if(name){
            console.log(name.displayName)
                this.props.getUserByName(name.displayName)
        
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState({
                recievedData:nextProps.data.userData
            })
        }
    }
    

    changeType = (t) => {
        if(t==='personalinfo'){
            if(this.state.firstColor === 'transparent'){
                this.setState({
                    typeofupdate: t,
                    firstColor:'black',
                    secondColor:'transparent',
                    thirdColor:'transparent',
                    fourthColor:'transparent',
                    fiveColor:'transparent',
                    sixColor:'transparent',
                    seventhColor:'transparent'
                })
            }
            else{
                this.setState({
                    typeofupdate: t,
                    firstColor:'transparent'
                })
            }
           
        }
        if(t==='Contact'){
            if(this.state.secondColor === 'transparent'){
                this.setState({
                    typeofupdate:t,
                    firstColor:'transparent',
                    secondColor:'black',
                    thirdColor:'transparent',
                    fourthColor:'transparent',
                    fiveColor:'transparent',
                    sixColor:'transparent',
                    seventhColor:'transparent'
                })
            }
            else{
                this.setState({
                    typeofupdate:t,
                    secondColor:'transparent'
                })
            }
          
        }
        if(t==='rotaractclub'){
            if(this.state.thirdColor === 'transparent'){
                this.setState({
                    typeofupdate:t,
                    firstColor:'transparent',
                    secondColor:'transparent',
                    thirdColor:'black',
                    fourthColor:'transparent',
                    fiveColor:'transparent',
                    sixColor:'transparent',
                    seventhColor:'transparent'
                    
                })
            }
            else{
                this.setState({
                    typeofupdate:t,
                    thirdColor:'transparent'
                })
            }
           
        }
        if(t==='proskilss'){
            if(this.state.fourthColor === 'transparent'){
                this.setState({
                    typeofupdate:t,
                    fourthColor:'black',
                    firstColor:'transparent',
                    secondColor:'transparent',
                    thirdColor:'transparent',
                    fiveColor:'transparent',
                    sixColor:'transparent',
                    seventhColor:'transparent'
                })
            }
            else{
                this.setState({
                    typeofupdate:t,
                    fourthColor:'transparent'
                })
            }
            
        }
        if(t==='edubackground'){
            if(this.state.fiveColor === 'transparent'){
                this.setState({
                    typeofupdate:t,
                    fiveColor:'black',
                    firstColor:'transparent',
                    secondColor:'transparent',
                    thirdColor:'transparent',
                    fourthColor:'transparent',
                    sixColor:'transparent',
                    seventhColor:'transparent'
                })
            }
            else{
                this.setState({
                    typeofupdate:t,
                    fiveColor:'transparent'
                })
            }
            
        }
        if(t==='otherinterest'){
            if(this.state.sixColor === 'transparent'){
                this.setState({
                    typeofupdate:t,
                    sixColor:'black',
                    firstColor:'transparent',
                    secondColor:'transparent',
                    thirdColor:'transparent',
                    fourthColor:'transparent',
                    fiveColor:'transparent',
                    seventhColor:'transparent'
                })
            }
            else{
                this.setState({
                    typeofupdate:t,
                    sixColor:'transparent'
                })
            }
            
        }
        if(t==='about'){
            if(this.state.seventhColor === 'transparent'){
                this.setState({
                    typeofupdate:t,
                    seventhColor:'black',
                    firstColor:'transparent',
                    secondColor:'transparent',
                    thirdColor:'transparent',
                    fourthColor:'transparent',
                    fiveColor:'transparent',
                    sixColor:'transparent'
                })
            }
            else{
                this.setState({
                    typeofupdate:t,
                    seventhColor:'transparent'
                })
            }
           
        }
        
    }

    sendUser = (data) => {
        
        if (data) {
            if(this.state.uid){

                this.props.createUser(data,this.state.uid)
            }
            
        }
    }

    changesType = (atype)=>{
        this.setState({
            typeofupdate:atype
        })
    }


    render() {
       console.log(this.state.recievedData)
        let data = this.props.things

        return (data) ? ( <div className="main_member">
        <video autoPlay muted loop
            style={{
                position:"absolute",
                objectFit:"cover",
                width:"100%",
                height:"100%",
                position:"fixed",
                top:"0",
                left:"0",
                mixBlendMode:"screen"
              }}
        >
            <source src={mem} type="video/mp4" />
        </video>

        <Navbar />

        <div className="member_logo">
            {this.state.recievedData ? (
                <img className="member_rotimage" alt="profile" referrerpolicy="no-referrer" src={this.state.recievedData.img} />
            ):(
                <div>
                    ok
                </div>
            )}
            
        </div>
        <div className="member_container">
            {/* <div className="main_member_name"> */}
            <div className="member_name">{this.state.recievedData.full_name}</div>
            <div className="member_status">President</div>
            {/* </div> */}
            <div className="main_data">

                <div className="button_div">
                    <div className="changer_buttons">
                        <button className="button" style={{backgroundColor:this.state.firstColor}} onClick={(e) => this.changeType(e.target.value)} value="personalinfo">Personal information</button>
                        <button className="button" style={{backgroundColor:this.state.secondColor}} onClick={(e) => this.changeType(e.target.value)} value="Contact">Contact</button>
                        <button className="button" style={{backgroundColor:this.state.thirdColor}} onClick={(e) => this.changeType(e.target.value)} value="rotaractclub">Rotaract Club</button>
                        <button className="button" style={{backgroundColor:this.state.fourthColor}} onClick={(e) => this.changeType(e.target.value)} value="proskilss">Professional Skills</button>
                        <button className="button" style={{backgroundColor:this.state.fiveColor}} onClick={(e) => this.changeType(e.target.value)} value="edubackground">Educational background</button>
                        <button className="button" style={{backgroundColor:this.state.sixColor}} onClick={(e) => this.changeType(e.target.value)} value="otherinterest">Other interests</button>
                        <button className="button" style={{backgroundColor:this.state.seventhColor}} onClick={(e) => this.changeType(e.target.value)} value="about">About</button>
                    </div>
                </div>
                <div className="member_line">
                    <div className="vl"> </div>
                </div>
                <div className="unknown">
                    {this.state.typeofupdate !== '' ? (
                        <LauncherDiv 
                        typeChanger = {this.changeType}
                        data={this.state.typeofupdate} sender={this.sendUser} />
                    ) : (null)}
                </div>
            </div>
        </div>
    </div>):(
         <div className="main_member">
         <video autoPlay muted loop
             style={{
                 position:"absolute",
                 objectFit:"cover",
                 width:"100%",
                 height:"100%",
                 position:"fixed",
                 top:"0",
                 left:"0",
                 mixBlendMode:"screen"
               }}
         >
             <source src={mem} type="video/mp4" />
         </video>

         <Navbar />

         <div className="member_logo">
           
                 <img className="member_rotimage" alt="profile" src={MemberPic} />
             
            
             
         </div>
         <div className="member_container">
             {/* <div className="main_member_name"> */}
             
                  <div className="member_name">Name not found</div>
            
                 
             
             
             <div className="member_status">President</div>
             {/* </div> */}
             <div className="main_data">

                 <div className="button_div">
                     <div className="changer_buttons">
                         <button className="button" style={{backgroundColor:this.state.firstColor}} onClick={(e) => this.changeType(e.target.value)} value="personalinfo">Personal information</button>
                         <button className="button" style={{backgroundColor:this.state.secondColor}} onClick={(e) => this.changeType(e.target.value)} value="Contact">Contact</button>
                         <button className="button" style={{backgroundColor:this.state.thirdColor}} onClick={(e) => this.changeType(e.target.value)} value="rotaractclub">Rotaract Club</button>
                         <button className="button" style={{backgroundColor:this.state.fourthColor}} onClick={(e) => this.changeType(e.target.value)} value="proskilss">Professional Skills</button>
                         <button className="button" style={{backgroundColor:this.state.fiveColor}} onClick={(e) => this.changeType(e.target.value)} value="edubackground">Educational background</button>
                         <button className="button" style={{backgroundColor:this.state.sixColor}} onClick={(e) => this.changeType(e.target.value)} value="otherinterest">Other interests</button>
                         <button className="button" style={{backgroundColor:this.state.seventhColor}} onClick={(e) => this.changeType(e.target.value)} value="about">About</button>
                     </div>
                 </div>
                 <div className="member_line">
                     <div className="vl"> </div>
                 </div>
                 <div className="unknown">
                     {this.state.typeofupdate !== '' ? (
                         <LauncherDiv 
                         typeChanger = {this.changeType}
                         data={this.state.typeofupdate} sender={this.sendUser} />
                     ) : (null)}
                 </div>
             </div>
         </div>
     </div>
    )
           
        
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.portfolio
    }
}

export default connect(mapStateToProps, actions)(MemberContainer)

