import React from 'react'


//If want to take arguments  from component then,we can take like these
//(OriginalComponent,incrementVal) and we  can add in return{count:prevState.count+incrementVal}
const UpdatedComponent=(OriginalComponent)=>{
     class NewComponent extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                 count:0
            }
        }
        
       clickCounterHandler=()=>{
           this.setState(prevState=>{
               return{count:prevState.count+1}
           })
       }
          render(){
               console.log(this.props.name)
              return <OriginalComponent count={this.state.count}
               clickCounterHandler={this.clickCounterHandler}
                {...this.props} //If you want to pass props ,we have to add {...this.props} ,then these props transfer to another component
               />
          }
     }
     return NewComponent
}

export default  UpdatedComponent