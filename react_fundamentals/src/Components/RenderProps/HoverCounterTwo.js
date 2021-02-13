import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
    render() {
        const {count,countIncrement} =this.props
        return (
            <div>
                 <h2 onMouseOver={countIncrement}>Hovered {count} times </h2>
            </div>
        )
    }
}

export default HoverCounterTwo
