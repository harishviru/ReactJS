import React, { Component } from 'react'
import UpdatedComponent from './HOC'


 class HoverCounterByHoc extends Component {
     //Below common code placed in HOC.js  
//     constructor(props) {
//         super(props)
//         this.state = {
//              count:0
//         }
//     }
    
//    clickCounterHandler=()=>{
//        this.setState(prevState=>{
//            return{count:prevState.count+1}
//        })
//    }
  render() {
    const {count,clickCounterHandler}=this.props
      return (
          <div>
               <h2 onMouseOver={clickCounterHandler}> {this.props.name} Hovered {count} times</h2>
          </div>
      )
  }
}

export default UpdatedComponent(HoverCounterByHoc)
