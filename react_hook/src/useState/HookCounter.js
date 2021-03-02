import React ,{useState} from 'react'


// i)useState
function HookCounter() {

   const [count,setCount]=useState(0);

    return (
        <div>
             You clicked -{count} times 
            <button onClick={()=>(setCount(count+1))}>Click </button>
        </div>
    )
}

export default HookCounter
