import React ,{useState}from 'react'
import HookMouseFour from './HookMouseFour'


//Testing 04  Clean up code (Hook)
function HookContainer() {

 const [flag, setFlag] = useState(false)

    return (
        <div>
           <button onClick={()=>(setFlag(!flag))}>Toggle Hook Mouse move</button>
            {flag ? <HookMouseFour/> :null}
 
        </div>
    )
}

export default HookContainer
