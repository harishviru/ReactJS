import React from "react"
import ClassCounterEffTwo from "./useEffect/ClassCounterEffTwo";
import ClassCounterOne from "./useEffect/ClassCounterOne";
import ClassMouse from "./useEffect/ClassMouse";
import ClassMouseMoveFour from "./useEffect/ClassMouseMoveFour";
import HookEffCounterOne from "./useEffect/HookEffCounterOne";
import HookEffCounterTwo from "./useEffect/HookEffCounterTwo";
import HookMouse from "./useEffect/HookMouse";
import ClassCounter from "./useState/ClassCounter";
import ClassCounterTwo from "./useState/ClassCounterTwo";
import HookCounter from "./useState/HookCounter";
import HookCounterFour from "./useState/HookCounterFour";
import HookCounterThree from "./useState/HookCounterThree";
import HookCounterTwo from "./useState/HookCounterTwo";
import HookMouseFour from './useEffect/HookMouseFour'
import ClassContainer from "./useEffect/ClassContainer";
import HookContainer from "./useEffect/HookContainer";
import ClassIntervalCounterFive from "./useEffect/ClassIntervalCounterFive";
import HookIntervalCounterFive from "./useEffect/HookIntervalCounterFive";
import DataFetchingOne from "./useEffect/DataFetching/DataFetchingOne";
import DataFetchingTwo from "./useEffect/DataFetching/DataFetchingTwo";
import DataFetchingThree from './useEffect/DataFetching/DataFetchingThree'
import ComponentC from "./useContext/ComponentC";
import ReducerCounterOne from "./useReducer/ReducerCounterOne";
import ReducerCounterTwo from "./useReducer/ReducerCounterTwo";
import ReducerCounterThree from "./useReducer/ReducerCounterThree";
import RComponentContainer from "./useReducer/useReducerWithuseContext/RComponentContainer";
import RDataFetchinhOne from "./useReducer/DataFetching/RDataFetchinhOne";
import RDataFetchingTwo from "./useReducer/DataFetching/RDataFetchingTwo";
import ParentComponet from "./useCallback/ParentComponet";
import MemoCounter from "./useMemo/MemoCounter";
import FocusInput from "./useRef/FocusInput";
import RClassTimer from "./useRef/RClassTimer";
import HookTimer from "./useRef/HookTimer";
import DocTitleOne from "./customHook/DocTitleOne";
import DocTitleTwo from "./customHook/DocTitleTwo";
import HCounterOne from "./customHook/HCounterOne";
import HCounterOneTwo from "./customHook/HCounterTwo";


// For useContext )(below You can observe it)
//UserContext  and ChannelContext is used useContext
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()



function App() {
  const style={
    backgroundColor:'red' ,
    textAlign:'center',
    border:'1px solid ',
    padding:'5px',
    borderRadius:'10px',
    width:'50%',
    marginLeft :'300px'
} ;

  return (
    <div style={{textAlign:'center'}}>
                    <h1 style={style}>useState</h1>
                    {/* useState for state management............! */}       
                          {/* useState */}
                          <ClassCounter/>
                          <HookCounter/>

                          <HookCounterTwo/>
                          <ClassCounterTwo/>

                          <HookCounterThree/> 
                          <HookCounterFour/>
                  <hr/>
                  <h1 style={style}>useEffect</h1>
                    {/* useEffect for side effects............! */}  
                          {/*useEffect after render  */}
                       {/* <ClassCounterOne/>
                       <HookEffCounterOne/> */}

                         {/* Conditionally run effects */}
                       {/* <ClassCounterEffTwo/> */}
                       {/* <HookEffCounterTwo/> */}
                       
                         {/* Run effects only once ===componentDidMount */}
                      {/* <ClassMouse/>
                       <HookMouse/> */}

                            {/* Run cleanup code */}
                       <ClassMouseMoveFour/>
                       <HookMouseFour/>
                       
                       <ClassContainer/>
                       <HookContainer/>

                       {/*For useEffect with incorrect dependency*/}
                        <ClassIntervalCounterFive/>
                        <HookIntervalCounterFive/>

                        {/* DataFeteching */}
                        <DataFetchingOne/>
                        <DataFetchingTwo/>
                        <DataFetchingThree/>

                        <hr/>
                     <h1 style={style}>useContext</h1>
                    {/* useContext is used  to pass props at any level in component tree............! */}  
                    <UserContext.Provider value="Harish viru">
                      <ChannelContext.Provider value="Nature Heart beat">
                           <ComponentC/>
                         </ChannelContext.Provider>   
                    </UserContext.Provider> 
                   
                      <hr/>
                     <h1 style={style}>useReducer</h1>
                     {/* useReducer is used for state management */}

                          {/* useReducer (simple state and action) */}
                          <ReducerCounterOne/>  
                           {/* useReducer (complex state and action) */}
                          <ReducerCounterTwo/>   
                             {/* multiple reducer */}
                          <ReducerCounterThree/>   
                                      <br/>
                             {/* useReducer with useContext :global state management */}  
                           <RComponentContainer/>
                            
                            {/* Data Fetching */}
                            <RDataFetchinhOne/>
                            <RDataFetchingTwo/>
    
                            <hr/>
                     <h1 style={style}>useCallback</h1>    
                       {/* perfomance optimization function itself */}
                       <ParentComponet/>
    
    
                       <hr/>
                     <h1 style={style}>useMemo</h1> 
                    {/* perfomance optimization function return value */}
                      <MemoCounter/>

                      <hr/>
                     <h1 style={style}>useRef</h1> 
                            {/* useRef */}
                            <FocusInput/>
                     
                            <RClassTimer/>
                             <HookTimer/>

                             <hr/>
                     <h1 style={style}>customHook</h1> 
                      <DocTitleOne/>
                      <DocTitleTwo/>

                      <HCounterOne/>
                      <HCounterOneTwo/>

    
    
    </div>
  );
}

export default App;
