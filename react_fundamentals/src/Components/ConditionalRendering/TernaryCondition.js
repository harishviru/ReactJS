import React, { Component } from 'react'

//#03 .Ternary operator
 class TernaryCondition extends Component {
    constructor(props) {
        super(props)
        this.state = {
              flag:true
        }
    }
    render() {
        return (
             this.state.flag ?
             <div>Grand Welcome ...!(Ternary Operator</div> :
             <div>Bye ...!(Ternary Operator</div>  
        )
    }
}

export default TernaryCondition
