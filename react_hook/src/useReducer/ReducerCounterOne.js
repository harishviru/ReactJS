import React ,{useReducer}from 'react'

//01. useReducer (simple state and action)
const initialState=0     //state is simple value
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

function ReducerCounterOne() {

const [count,dispatch]=  useReducer(reducer,initialState)

    return (
        <div>
             <h2>{count}</h2>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerCounterOne
