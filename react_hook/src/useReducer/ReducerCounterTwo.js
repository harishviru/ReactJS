import React ,{useReducer}from 'react'

//02. useReducer (complex state and action)
const initialState={        //state and dispatch/action as object
      firstCounter:0,
      secondCounter:0
}
const reducer =(state,action)=>{    //action is instructor to reducer to which action to be perform
   switch (action.type) {
       case 'increment':
          return {...state,firstCounter :state.firstCounter+action.value}
       case 'decrement':
          return {...state,firstCounter :state.firstCounter-action.value}
       case 'increment2':
            return {...state,secondCounter :state.secondCounter+action.value}
        case 'decrement2':
            return {...state,secondCounter :state.secondCounter-action.value}
       case 'reset':
          return initialState
       default:
        return state
   }
}

function ReducerCounterTwo() {

    const [count,dispatch]=  useReducer(reducer,initialState)

    return (
        <div>
             <h2>FirstCounter :{count.firstCounter}</h2>
             <h2>SecondCounter :{count.secondCounter}</h2>

            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <br/>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <br/>
            <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment Counter 2</button>
            <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement Counter 2</button>
           

        </div>
    )
}

export default ReducerCounterTwo
