import React, { Component } from 'react'
import UpdatedComponent from './HOC'


 class ClickCounterByHOC extends Component {
    //Below common code placed in HOC.js  
    //   constructor(props) {
    //       super(props)
    //       this.state = {
    //            count:0
    //       }
    //   }
      
    //  clickCounterHandler=()=>{
    //      this.setState(prevState=>{
    //          return{count:prevState.count+1}
    //      })
    //  }
    render() {
        const {count,clickCounterHandler}=this.props
        return (
            <div>
                 <button onClick={clickCounterHandler}> {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounterByHOC)
//export default UpdatedComponent(ClickCounterByHOC,5) if you want pass extra arguments like these


