import React, { Component } from 'react'
//04
//Run cleanup code
 class ClassMouseMoveFour extends Component {
 
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

   ///Runing cleanup code
   componentWillUnmount(){
       console.log('cleaning code....!')
       window.removeEventListener('mousemove',this.logMousemove)
   }

    render() {
        return (
            <div>
               Class -    X- {this.state.x}  ,Y -{this.state.y}  
            </div>
        )
    }
}

export default ClassMouseMoveFour
