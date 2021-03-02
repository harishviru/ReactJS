import React,{useState,useEffect} from 'react'

//ii)Conditionally run effects
// useEffect( ()=>{
//     document.title=`Clicked ${count} times`
// },[count])
//Using====>componentDidMount + componentDidUpdate

function HookEffCounterTwo() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
    
   useEffect( ()=>{
       console.log('updating document title')
       document.title=`Clicked ${count} times`
   },[count])

    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>
    );
}

export default HookEffCounterTwo
