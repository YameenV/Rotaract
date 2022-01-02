import React, { Component } from 'react'
import HeaderNav from './components/header/headerNav'
 class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <HeaderNav/>
                </div>
                {this.props.children}
            </div>
        )
    }
}
export default Layout