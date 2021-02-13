import React, { Component } from 'react'


//02.EventHandling..
 class ClassClick extends Component {
     
    clickHandler(){
        console.log(this)
        console.log("[classClick] Button clicked.....!")
    }

    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>ClassClick</button> 
            </div>
        )
    }
}

export default ClassClick
