import React, { Component } from 'react'

//05.For useEffect with incorrect dependency
 class ClassIntervalCounterFive extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    tick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount(){
      this.interval=   setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
              class -   {this.state.count}
            </div>
        )
    }
}

export default ClassIntervalCounterFive
