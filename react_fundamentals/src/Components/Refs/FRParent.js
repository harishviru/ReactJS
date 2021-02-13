import React, { Component } from 'react'
import FRInput from './FRInput'

//04.#Forwarding Ref from one component to another component
class FRParent extends Component {

   constructor(props) {
       super(props)
       this.inputRef=React.createRef()
   }
   clickHandler=()=>{
       this.inputRef.current.focus()
   } 
    render() {
        return (
            <div>
                 <FRInput ref={this.inputRef}/>
                 <button onClick={this.clickHandler}>Focus FR Iput</button>
            </div>
        )
    }
}

export default FRParent
