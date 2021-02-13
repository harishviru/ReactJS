import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentComp extends Component {

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
        console.log('------------------Parent componet----------')
        return (
            <div>
                 <RegularComp name={this.state.name}/>
                 <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
