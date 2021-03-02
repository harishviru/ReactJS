import React, { Component } from 'react'

//02
//Conditionally run effects
 class ClassCounterEffTwo extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              count:0,
              name:''
         }
     }
     
     componentDidMount(){
         document.title=`Clicked ${this.state.count} times`
     }
     componentDidUpdate(prevProps,prevState){
       //Conditionally run effects
         if(prevState.count!==this.state.count){
            console.log('updating document title')
            document.title=`Clicked ${this.state.count} times`
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
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
            <button onClick={this.incrementCount}>
              Clicked {this.state.count} times
            </button>
          </div>
        );
    }
}

export default ClassCounterEffTwo
