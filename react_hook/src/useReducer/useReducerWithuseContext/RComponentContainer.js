import React ,{useReducer}from 'react'
import RComponentA from './RComponentA'
import RComponentB from './RComponentB'
import RComponentC from './RComponentC'

//04.global state management (state across the multiple components)

export const CountContext=React.createContext()

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
function RComponentContainer() {
    
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
             count :{count}
              <RComponentA/>
              <RComponentB/>             
              <RComponentC/>
            </CountContext.Provider>
        </div>
    )
}

export default RComponentContainer
