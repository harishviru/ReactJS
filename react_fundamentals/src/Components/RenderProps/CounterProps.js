import React, { Component } from 'react'

 class CounterProps extends Component {

    constructor(props) {
        super(props)
        this.state = {
             count:0
        }
    }

    countIncrement=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.render(this.state.count,this.countIncrement)
                    //  this.props.children(this.state.count,this.countIncrement)
                }
                 {/* or */}
                 {/* {
                    this.props.children(this.state.count,this.countIncrement)
                } */}
            </div>
        )
    }
}

export default CounterProps
