import React, { Component } from 'react'

//#04 .Error Handling / Error boundaries
 class ErrorBoundary extends Component {

       constructor(props) {
           super(props)
           this.state = {
                hasError:false
           }
       }
       
 static getDerivedStateFromError(error){
     console.log('getDerivedStateFromError---',error)
     return {hasError:true}
 }

 componentDidCatch(error,info){
  console.log('componentDidCatch-1--',error)
  console.log('componentDidCatch-2--',info)
 }

    render() {
        if(this.state.hasError){
             return <h2 style={{color:'red',fontSize:'40px',textAlign:'center'}}> Something went wrong </h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary
