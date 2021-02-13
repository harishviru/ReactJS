import React, { Component } from 'react'

//03.EventBinding 
 class EventBind extends Component {

  constructor(){
      super();
      this.state={
          message:'Hey...Visitor.!'
      }
      //Approcah .3
      this.changeMessage=this.changeMessage.bind(this)
  }

  clickHandler(){
        this.setState({
            message:'Thanks....!'
        })
    }

   changeMessage(){
        this.setState({
            message:'Thanks....!'
        })
    }
     //Approach.4   
    changeMessageByArW=()=>{
        console.log(this)
        this.setState({
            message:'Thanks....!'
        })
    }
    render() {
        return (
            <div>
                       <h2>{this.state.message}</h2>
                       {/* Approch 1  ...(bind method) */}
                 <button onClick={this.clickHandler.bind(this)}>Click Me</button>
                  {/* Approch 2  ...(Arrow function ) */}
                 <button onClick={()=>this.clickHandler()}>Click Me</button>
                  {/* Approch  3 ...(bind in constructor) */}
                  <button onClick={this.changeMessage}>Click Me</button>
                   {/* Approch  4 ...(arrow function..) */}
                   <button onClick={this.changeMessageByArW}>Click Me</button>


            </div>
        )
    }
}

export default EventBind
