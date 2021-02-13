import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

//#01 .Mounting LifeCycle Methods (LifeCycle A& B)
 class LifeCycleA extends Component {
         
    constructor(props) {
        super(props)
        this.state = {
          name:'Harish'   
        }
        console.log('LifeCycleA Constructor')
    }
    
 static getDerivedStateFromProps(props,state){
          console.log('LifeCycleA getDerivedStateFromProps')
    return null;
 }

 componentDidMount(){
     console.log('LifeCycleA componentDidMount')
 }

    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                <h2>LifeCycleA</h2>
                 <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
