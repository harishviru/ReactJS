import React, { Component } from 'react'


//#01. Styntax :<React.Fragment> children comps  </React.Fragment>  
class Fragment extends Component {
    render() {
        return (
            // React Fragment will helps to render component without wrapped element
             <React.Fragment>
                  Fragment Demo  1                 
             </React.Fragment>
        )
    }
}

export default Fragment
