import React, { Component } from 'react'


//#04. Short Circuit operator
 export class ShortCircuit extends Component {
    constructor(props) {
        super(props)
        this.state = {
              flag:true
        }
    }
    render() {
        return (
             this.state.flag && <div>Grand Welcome ...!(ShortCircuit Operator</div> 
        )
    }
}

//export default ShortCircuit
