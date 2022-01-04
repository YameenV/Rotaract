import React, { Component } from 'react'
<<<<<<< HEAD
import AnnVideo from '../../background/loading.mp4'
=======
import AnnVideo from '../../background/Bg-Loader.mp4'
>>>>>>> 4737684e91e3617ea5186d80a7555910b7f5a78f
export default class Loader extends Component {

    render() {
        return (
            <div>

                <div>
                    <video autoPlay muted loop
                        style={{
                            position: "absolute",
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1",
                            position: "fixed",
                        }}
                    >
                        <source src={AnnVideo} type="video/mp4" />
                    </video>
                </div>

                {
                    setTimeout(() => {
                        this.props.history.push('/home')
                    }, (3000))
                }
            </div>
        )
    }
}
