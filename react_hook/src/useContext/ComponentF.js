import React from 'react'
import {UserContext,ChannelContext} from '../App'

function ComponentF() {
    return (
      <div>             
        <UserContext.Consumer>
             { 
               username=> (
                <ChannelContext.Consumer>
                     {
                         channel=>{
                            return <div>User context value :{username} and ChannelContext value :{channel}</div>
                         }
                     }

             </ChannelContext.Consumer>)
             }
        </UserContext.Consumer>
     </div>
    )
}

export default ComponentF
