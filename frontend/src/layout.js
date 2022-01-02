import React, { Component } from 'react'
import HeaderNav from './components/header/headerNav'
 class Layout extends Component {
    render() {
        return (
            <div>
                
                {this.props.children}
            </div>
        )
    }
}
export default Layout