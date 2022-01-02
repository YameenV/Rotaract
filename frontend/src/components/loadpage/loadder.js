import React, { Component } from 'react'
import AnnVideo from '../../background/announcements.mp4'
export default class Loader extends Component {

    render() {
        return (
            <div>

<div>
<video autoPlay muted loop
      style={{
        position:"absolute",
        objectFit:"cover",
        width:"100%",
        height:"100%",
        zIndex:"-1",
        position:"fixed",
      }}
      >
			<source src={AnnVideo} type="video/mp4" />
      </video>
</div>

                {
                    setTimeout(()=>{
                        this.props.history.push('/home')
                    },(3000))
                }
            </div>
        )
    }
}
