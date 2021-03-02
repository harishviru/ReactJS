import React, { Component } from 'react'

//01
//Using componentDidMount,componentDidUpdate
 class ClassCounterOne extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     
     componentDidMount(){
         document.title=`Clicked ${this.state.count} times`
     }
     componentDidUpdate(prevProps,prevState){
        document.title=`Clicked ${this.state.count} times`
     }
   incrementCount=()=>{
       this.setState({
           count:this.state.count+1
       })
   }
    render() {
        return (
            <div>
                 <button onClick={this.incrementCount}> Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounterOne
