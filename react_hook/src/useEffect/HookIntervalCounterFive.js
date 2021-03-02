import React,{useState,useEffect} from 'react'

//05. useEffect with incorrect dependency
function HookIntervalCounterFive() {

    const [count, setCount] = useState(0)
      
useEffect(() => {
    const interval=setInterval(tick,1000)
    return () => {
         clearInterval(interval)
    }
},[count])
 

  const  tick=()=>{
    setCount(count+1) //   setCount(prevCount=>prevCount+1)
  }

    return (
        <div>
            Hook-  {count}
        </div>
    )
}

export default HookIntervalCounterFive
