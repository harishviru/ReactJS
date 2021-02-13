import React, { Component } from 'react'

 class Child extends Component {
  
  sendParent=()=>{
      this.props.setName('From Parent ...Hello...!')
  }
    render() {
        return (
            <div>
                      <button onClick={this.sendParent}>Click Me  (C2P)</button>
            </div>
        )
    }
}

export default Child
