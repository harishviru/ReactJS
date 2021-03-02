import React, { Component } from 'react'
import ClassMouseMoveFour from './ClassMouseMoveFour'

//Testing 04  Clean up code (class)
 class ClassContainer extends Component {

 constructor(props) {
     super(props)
 
     this.state = {
          flag:false
     }
 }

    render() {
        return (
            <div>
                 <button onClick={()=>(this.setState({flag:!this.state.flag}))}>Toggle Class Mouse move</button>
                  {this.state.flag ? <ClassMouseMoveFour/> :null}
            </div>
        )
    }
}

export default ClassContainer
