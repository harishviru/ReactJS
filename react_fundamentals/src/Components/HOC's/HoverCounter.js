import React, { Component } from 'react'


//Problem :We can observe ClickCounter and HoverCounter contains same counter logic ,
//To overcome this,  we can use HOC's
 class HoverCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
             count:0
        }
    }
    
  clickCountHandler=()=>{
     this.setState(prevState=>{
        return{count:prevState.count+1}
     })
  }
    render() {
        const {count} =this.state
        return (
            <div>
              <h3 onMouseOver={this.clickCountHandler}>Hovered {count} times</h3>
            </div>
        )
    }
}

export default HoverCounter
