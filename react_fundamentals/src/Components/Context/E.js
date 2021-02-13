import React, { Component } from 'react'
import F from './F'
import UserContext from './userContext'

 class E extends Component {

    static contextType=UserContext

    render() {
        console.log("----------U-----",this.context)
        return (
            <div>
                 Component E context Val :{this.context}
                <F/>
            </div>
        )
    }
}
// E.contextType=UserContext

export default E
