import React, { Component } from 'react'
import   '../Forms/form.css'

//Children comp
 class Input extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }
    //This  focusInput is called by parent Component
  focusInput(){
      this.inputRef.current.focus()
  }
    render() {
        return (
            <div style={{marginLeft:'10px'}}>
                <input type="text"  className='form-control' ref={this.inputRef}/>
            </div>
        )
    }
}

export default Input
