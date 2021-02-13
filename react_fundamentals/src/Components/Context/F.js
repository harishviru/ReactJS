import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class F extends Component {
    render() {
        return (
            //Step:03
             <UserConsumer>
                 {
                    (username)=>{
                        return <h2>Hello {username}....!</h2>
                    } 
                 }
             </UserConsumer>
        )
    }
}

export default F
