import React, { Component } from "react";
import Personalinfo from './subfiles/personalinfo'
import Contact from './subfiles/contact'
import Rotaractclub from './subfiles/rotaractclub'
import Proskills from './subfiles/proskills'
import Educational from './subfiles/educational'
import Otherinterest from './subfiles/otherinterest'
import About from './subfiles/about'
import '../../css/memberupdate.css'

class LauncherDiv extends Component {
  render() {
    return (
      <div className = "changing_container">
        {this.props.data === "personalinfo" ? (
         <Personalinfo/>
        ) : null}
        {this.props.data === "Contact" ? <Contact/> : null}
        {this.props.data === "rotaractclub" ? (
         <Rotaractclub/>
        ) : null}
        {this.props.data === "proskilss" ? (
          <Proskills/>
        ) : null}
         {this.props.data === "edubackground" ? (
          <Educational/>
        ) : null}
        {this.props.data === "otherinterest" ? (
          <Otherinterest/>
        ) : null}
        {this.props.data === "about" ? <About/> : null}
      </div>
    );
  }
}
export default LauncherDiv;
