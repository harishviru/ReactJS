import React from 'react';

//#01. state
class AMessage extends React.Component{

    //Constructor
    constructor(){
        super();
        this.state={
            message:'Welcome User...!'
        }
    }
    //Change state by using setState
   changeMessage(){
       this.setState({
            message:'Thank you for subscribing...!'
       })
   }

     render(){
         return (
                 <div>
                    <h2> {this.state.message} </h2>
                    <button onClick={()=>this.changeMessage()}> Subscribe</button>
                </div>
               );
     }
}

export default AMessage;