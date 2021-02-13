import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
    render() {
        const {count,countIncrement} =this.props
       return (
           <div>
                <button onClick={countIncrement} >Clicked {count} times</button>
           </div>
       )
   }
}

export default ClickCounterTwo
