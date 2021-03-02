import React,{useState} from 'react'
import useCounter from './useCounter'

function HCounterOneTwo() {

// const [count, setCount] = useState(0)
//  const increment =()=>{
//      setCount(prevState=>prevState+1)
//  }

//  const decrement=()=>{
//     setCount(prevState=>prevState-1)
//  }
//  const reset=()=>{
//     setCount(0)
//  }

const[count,increment,decrement,reset]= useCounter(10,10)

    return (
        <div>
             Count :{count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default HCounterOneTwo
