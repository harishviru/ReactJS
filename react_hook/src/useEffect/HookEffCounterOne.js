import React,{useState,useEffect} from 'react'

//i)useEffect after render
// useEffect( ()=>{
//     document.title=`Clicked ${count} times`
// })
//Using====> componentDidMount,componentDidUpdate

function HookEffCounterOne() {

  const [count, setCount] = useState(0)
    
   useEffect(()=>{
       document.title=`Clicked ${count} times`
   })
    return (
        <div>
                <button onClick={()=>setCount(count+1)}> Clicked {count} times</button>
        </div>
    )
}

export default HookEffCounterOne
