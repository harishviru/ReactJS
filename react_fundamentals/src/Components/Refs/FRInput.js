import React from 'react'
import   '../Forms/form.css'


const FRInput=React.forwardRef((props,ref)=>{
        return (
            <div>
                 <input type="text" className='form-control' ref={ref}/>
            </div>
        )
})

export default FRInput
