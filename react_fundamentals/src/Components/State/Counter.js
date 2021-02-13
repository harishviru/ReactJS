import React, { Component } from 'react'

//#02. setState
 class Counter extends Component {

     constructor(props){
         super(props);
         this.state={
             count:0
         }
     }

     incrementCount(){
        // this.state.count=this.state.count+1; (Don't change state like these..!)
        this.setState({
            count:this.state.count+1
        },()=>{
            console.log('callback Val --->',this.state.count)
        })
       //  console.log(this.state.count)   (Don't log like ,if required see  16 line.)

      //If want change any value based on previous state ,then
   /*     this.setState((prevState)=>({
               count:prevState.count+1
       }))
    */  
     }
    
    render() {
        return (
            <div>
                <div><h3>Count -{this.state.count} </h3></div>
                <button onClick={()=>this.incrementCount()}>Increment</button> 
            </div>
        )
    }
}

export default Counter
