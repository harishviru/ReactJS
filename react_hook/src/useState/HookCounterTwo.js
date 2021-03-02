import React ,{useState} from 'react'

//ii)useState with previous state
function HookCounterTwo() {
    const initialState=0;
    const [count, setCount] = useState(initialState);


 const incrementFive=()=>{
   for(let i=0;i<5;i++){
    //    setCount(count+1) //Whenever your use state ,if it is depend on previous state don't use like these .These make inconsistency.Pls use below one
         setCount(prevCount=>prevCount+1) //
   }
 }
    return (
        <div>
             Count={count}
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={incrementFive}>Icrement 5</button>
            <br/>
            {/* consistency */}
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={()=>setCount(initialState)}>Reset</button>

        </div>
    )
}

export default HookCounterTwo
