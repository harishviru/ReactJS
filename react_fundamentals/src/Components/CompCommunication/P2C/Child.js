import React, { Component } from 'react'

 class Child extends Component {
    render() {
        return (
            <div>
                 <h2>From P2C :{this.props.name}</h2>
            </div>
        )
    }
}

export default Child
