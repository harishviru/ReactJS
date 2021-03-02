import React ,{useReducer}from 'react'

//03. useReducer (multiple useReducer)
const initialState=0     
const reducer =(state,action)=>{    //action is instructor to reducer to which action to be perform
   switch (action) {
       case 'increment':
          return state+1 
       case 'decrement':
          return state-1 
       case 'reset':
          return initialState
       default:
        return state
   }
}

function ReducerCounterThree() {

const [count,dispatch]=  useReducer(reducer,initialState)
const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
             <h2>Count one : {count}</h2>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <br/>
            <h2>Count Two : {countTwo}</h2>
            <button onClick={()=>dispatchTwo('increment')}>Increment </button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default ReducerCounterThree
