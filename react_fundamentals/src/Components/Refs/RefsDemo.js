import React, { Component } from 'react'
import   '../Forms/form.css'

//#01.Using React.createRef()
 class RefsDemo extends Component {
    
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }
    
    componentDidMount(){
        this.inputRef.current.focus();
    }   
    
    focusHandler =(event)=>{
       alert(event.target.value)
    }

    render() {
        return (
            <div style={{marginLeft:'10px'}} >
                  Using :React.createRef()
                 <input type="text"  className='form-control' onClick={this.focusHandler} ref={this.inputRef} />
            </div>
        )
    }
}

export default RefsDemo
