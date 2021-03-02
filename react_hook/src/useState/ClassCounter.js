import React, { Component } from 'react'

//class state object
 class ClassCounter extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            count :0
       }
   }
   
   incrementCount=()=>{
       this.setState({
           count:this.state.count+1
       })
   }

    render() {
        return (
            <div> 
                 You Clicked  -{this.state.count} times
                <button onClick={this.incrementCount}>Click</button>
            </div>
        )
    }
}

export default ClassCounter
