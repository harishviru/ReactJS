import React, { Component } from 'react'

 class LifeCycleD extends Component {

     constructor(props) {
         super(props)
         this.state = {
              name:'Harish'
         }
         console.log('LifeCycleD Constructor ')
     }
     
 componentDidMount(){
    console.log('LifeCycleD componentDidMount')
}
static getDerivedStateFromProps(props,state){
         console.log('LifeCycleD getDerivedStateFromProps')
    return null;
}

shouldComponentUpdate(){
    console.log(' LifeCycleD shouldComponentUpdate')
    return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(' LifeCycleD getSnapshotBeforeUpdate')
    return null;
}

componentDidUpdate(){
    console.log(' LifeCycleD componentDidUpdate')
}

    render() {
        console.log(' LifeCycleD render')
        return (
            <div>
                LifeCycleD
            </div>
        )
    }
}

export default LifeCycleD
