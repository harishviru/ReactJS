import React, { Component } from 'react'
import   '../Forms/form.css'


//#02.Refs ->Using CallBack refs
 class CallBackRefs extends Component {

    constructor(props) {
        super(props)
       this.cbRef=null
       this.setCbRefs=(element)=>{
          this.cbRef=element
       }
    }
    
     componentDidMount(){
         if(this.cbRef){
             this.cbRef.focus()
         }
     }

     focusHandler =(event)=>{
        alert(event.target.value)
     }

    render() {
        return (
            <div>
                 Using :Callback Refs
                 <input type="text" className='form-control' onClick={this.focusHandler} ref={this.cbRef}  />
            </div>
        )
    }
}

export default CallBackRefs
