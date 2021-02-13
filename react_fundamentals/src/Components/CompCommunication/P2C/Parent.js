import React, { Component } from 'react'
import Child from './Child'

 //#01.Parent to Child communiction
 class Parent extends Component {
    render() {
        return (
            <div>
                <Child name='Raghav'/>
            </div>
        )
    }
}

export default Parent
