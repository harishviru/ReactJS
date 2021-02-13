import React, { Component } from 'react'
import Input from './Input'


//#03.Passing refs to Children component from parent component
 class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.compRefs=React.createRef()
    }
    
clickHandler =()=>{
    this.compRefs.current.focusInput()//FocusInput children method
}


    render() {
        return (
            <div>
                <Input ref={this.compRefs}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
