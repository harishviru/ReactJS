import React, { Component } from 'react'

 class ClassCounterTwo extends Component {

        constructor(props) {
            super(props)     
            this.state = {
                 count:0
            }
        }
      incrementCount=()=>[
        //   this.setState({                   //Inconsistency (it doesn't take previous state)
        //       count:this.state.count+1
        //   })
          this.setState(prevState=>{             //consistency
              return {
                  count:prevState.count+1
              }
          })

      ]  

    render() {
        return (
            <div>
                 Count={this.state.count}
                 <button onClick={this.incrementCount}> Click </button>
            </div>
        )
    }
}

export default ClassCounterTwo
