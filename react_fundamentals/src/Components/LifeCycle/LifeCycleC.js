import React, { Component } from 'react'
import LifeCycleD from './LifeCycleD'

//#02 .Updating LifeCycle Methods (LifeCycle C& D)
 class LifeCycleC extends Component {

     constructor(props) {
         super(props)
         this.state = {
              name:'Harish'
         }
         console.log('LifeCycleC Constructor ')
     }
   
 componentDidMount(){
    console.log('LifeCycleC componentDidMount')
}

static getDerivedStateFromProps(props,state){
         console.log('LifeCycleC getDerivedStateFromProps')
    return null;
}

shouldComponentUpdate(){
    console.log(' LifeCycleC shouldComponentUpdate')
    return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(' LifeCycleC getSnapshotBeforeUpdate')
    return null;
}


componentDidUpdate(){
    console.log(' LifeCycleC componentDidUpdate')
}

changeState=()=>{
    this.setState({
        name:'Viru'
    })
}

    render() {
        console.log(' LifeCycleC render')
        return (
            <div>
                LifeCycleC
                  <button onClick={this.changeState}>Change State</button>
                  <LifeCycleD/>
            </div>
        )
    }
}

export default LifeCycleC
