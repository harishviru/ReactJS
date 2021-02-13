import React, { Component } from 'react'
import Child from './Child'

//#02.Child to Parent communiction
 class Parent extends Component {

     constructor(props){
         super(props)
         this.state={name:'Hi visitor...!'}
     }
     setName=(name)=>{
         console.log(name)
           this.setState({
            //    name:name   ===name (ES6 Concept)
            name
           })
     }

    render() {
        return (
            <div> 
                  <h2> {this.state.name}</h2>
                  <Child setName={this.setName}/>
            </div>
        )
    }
}

export default Parent
