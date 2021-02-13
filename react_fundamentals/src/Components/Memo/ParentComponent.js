import React, { Component } from 'react'
import FunctionalMemo from './FunctionalMemo'

 class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
             name:'Harish'
        }
    }
    
 componentDidMount(){
     setInterval(()=>{
          this.setState({
              name:'Harish'
          })
     },3000)
 }

   render() {
       console.log('------------------Parent component----------')
       return (
           <div>
                 <FunctionalMemo name={this.state.name}/>
           </div>
       )
   }
}

export default ParentComponent
