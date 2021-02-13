import React, { Component } from 'react'


//#02. Element variable
 class EleVariableCond extends Component {
    constructor(props) {
        super(props)
        this.state = {
              flag:true
        }
    }
    
    render() {
      let message ;
      if(this.state.flag){
             message=<div> Grand Welcome....!(Element Variable)  </div>
      }else{
             message=<div> Bye....! (Element Variable)  </div>
      }
        return <div>{message}</div>
    }
}

export default EleVariableCond
