
4)useReducer
==========
   • useReducer is a hook that is used for state management
   • It is an alternative to useState
   • useState is built using useReducer
    
 (In mind ...?  What is difference between useState and useReducer)

 #Hooks so far 
 •useState        -state
 • useEffect     -side effects
 • useContext  -context API
 • useReducer  -reducers


 #Reduce method in js
   •The reduce() method executes a reducer function (that you provide) on each element of the array, resulting        in single output value.
     syntax :
     --------
    array.reduce(reducer, 5)
    where reducer function accepts two values 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
   ex :
     const array1 = [1, 2, 3, 4];
     const reducer = (accumulator, currentValue) => accumulator + currentValue;
     array.reduce(reducer, 5) //15

 #reduce vs useReducer
   [reduce in javascript                                                ||                        useReducer  in react     ]
   • array.reduce(reducer,initialVal)                                                        •useReducer(reducer,initialState)
   • singleVal=reducer(accumulator,currentVal)                                               •newState =reducer(currentState,action)
   •reduce method return  a single value                                                     • useReducer returns a pair of values [newState,dispatch]

 Imp Points :
 •useReducer is a hook that is used for state management in React
 •useReducer is realted to reducer function
 •useReducer(reducer,initialState)
 •reducer(currentState,action)
 •It return newState and Dispatch
 •Where action is instructor to reducer to which action to be perform

 #useReducer with useContext
  •useReducer                                              -Local state management
  •Share state between components                          -Global state management       (useReducer+useContext)
  
#What is difference between useState and useReducer
  
  Scenario                                                  useState                                                 useReducer
 
  •Type of state                                      Number,String,boolean                                           Object or Array
  •Number of  state transitions                          one or two                                                    Too many
  •Related state transitions                               No                                                              Yes
  •Business logic                                          No                                                             complex business logic
  •Local vs Global                                         Local                                                          Global
