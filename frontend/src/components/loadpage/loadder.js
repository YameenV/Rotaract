import React, { Component } from 'react'
import AnnVideo from '../../background/Bg-Loader.mp4'
export default class Loader extends Component {

    render() {
        return (
            <div>

                <div>
                   <img style={{height:"100vh",width:"100vw",position:"fixed",objectFit:"cover"}} src="https://lh3.googleusercontent.com/tzLE6Ohw58ZMXnFxwKI8yumKCYTPHKdTGWJnMFulPSlVkmQBXUPfx4lJjGpZbp6cEzAEtdxnfE6jGzVUC_OqzMXIobyc6X8uoc0HMEFB9pMyHi0HtwMxgfK_Ixj9ZzR10KX8zpgd=w2400"></img>
                </div>

                {
                    setTimeout(() => {
                        this.props.history.push('/home')
                    }, (2000))
                }
            </div>
        )
    }
}
