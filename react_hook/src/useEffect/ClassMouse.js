import React, { Component } from 'react'
//03
//Run effects only once
 class ClassMouse extends Component {
 
     constructor(props) {
         super(props)
     
         this.state = {
              x:0,
              y:0
         }
     }
     
   logMousemove=(e)=>{
     this.setState({
         x:e.clientX,
         y:e.clientY
     })
   }
   componentDidMount(){
       window.addEventListener('mousemove',this.logMousemove)
   }

    render() {
        return (
            <div>
               Class -    X- {this.state.x}  ,Y -{this.state.y}  
            </div>
        )
    }
}

export default ClassMouse
