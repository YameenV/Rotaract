import React, { Component } from 'react'

export default class Loader extends Component {

    render() {
        return (
            <div>
                {
                    setTimeout(()=>{
                        this.props.history.push('/home')
                    },(3000))
                }
            </div>
        )
    }
}
