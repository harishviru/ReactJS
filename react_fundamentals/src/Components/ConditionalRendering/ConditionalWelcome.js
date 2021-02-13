import React, { Component } from 'react'


//O1 .if/else
 class ConditionalWelcome extends Component {

      constructor(props) {
          super(props)
          this.state = {
                flag:true
          }
      }
      
    render() {
        //#01. if/else
          if(this.state.flag){
              return(
                  <div> Grand Welcome....! if/else </div>
                //   if/else is not work in JSX
              )
          }else{
            return(
                <div> Bye ......! if/else</div>
            )
          }
           
    }
}

export default ConditionalWelcome
