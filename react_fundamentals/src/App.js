import React from 'react';
import FunctionComp from './Components/TypesOfComponents/FunctionComp'
import ClassComp from './Components/TypesOfComponents/ClassComp'
import JSXComp from './Components/JSX/JSX';
import WithoutJSX from './Components/JSX/WithoutJSX';
import Greet from './Components/Props/Greet'
import Welcome from './Components/Props/Welcome';
import AMessage from './Components/State/AMessage';
import Counter from './Components/State/Counter';
import Bike from './Components/State/Bike';
import Car from './Components/State/Car';
import FunctionClick from './Components/EventHandling/FunctionClick';
import ClassClick from './Components/EventHandling/ClassClick';
import EventBind from './Components/EventHandling/EventBind';
import Parent from './Components/CompCommunication/P2C/Parent';
import Pparent from './Components/CompCommunication/C2P/Parent'
import ConditionalWelcome from './Components/ConditionalRendering/ConditionalWelcome';
import EleVariableCond from './Components/ConditionalRendering/EleVariableCond';
import TernaryCondition from './Components/ConditionalRendering/TernaryCondition';
import {ShortCircuit} from './Components/ConditionalRendering/ShortCircuit';
import NameList from './Components/ListRendering/NameList';
import PersonList from './Components/ListRendering/PersonList';
import EmpList from './Components/ListRendering/EmpList';
import ContriesList from './Components/ListRendering/ContriesList';
import MyStylesheet from './Components/StylingComponents/MyStylesheet';
import InlineStyle from './Components/StylingComponents/InlineStyle';
import MyModuleStyle from './Components/StylingComponents/MyModuleStyle';
import Form from './Components/Forms/Form';
import LifeCycleA from './Components/LifeCycle/LifeCycleA';
import LifeCycleC from './Components/LifeCycle/LifeCycleC';
import Container from './Components/LifeCycle/Container';
import Vehicle from './Components/LifeCycle/Vehicle';
import ErrorBoundary from './Components/LifeCycle/ErrorBoundary'
import Fragment from './Components/Fragment/Fragment';
import FragmentDemo from './Components/Fragment/FragmentDemo';
import Table from './Components/Fragment/Table';
import PortalsDemo from './Components/Portals/PortalsDemo';
import PureComp from './Components/PureComponent/PureComp';
import ParentComp from './Components/PureComponent/ParentComp';
import ParentComponent from './Components/Memo/ParentComponent';
import RefsDemo from './Components/Refs/RefsDemo';
import CallBackRefs from './Components/Refs/CallBackRefs';
import FocusInput from './Components/Refs/FocusInput';
import FRParent from './Components/Refs/FRParent';
import ClickCounter from './Components/HOC\'s/ClickCounter';
import HoverCounter from './Components/HOC\'s/HoverCounter';
import ClickCounterByHOC from './Components/HOC\'s/ClickCounterByHOC';
import HoverCounterByHoc from './Components/HOC\'s/HoverCounterByHoc';
import CounterProps from './Components/RenderProps/CounterProps';
import ClickCounterTwo from './Components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './Components/RenderProps/HoverCounterTwo';
import User from './Components/RenderProps/User';
import { UserProvider } from './Components/Context/userContext';
import C from './Components/Context/C';

// ShortCircuit is Named  and remaining are default import

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
    <div >
          <h1 style={style}>Componets</h1>
          {/* Types of Componets............! */}
          <FunctionComp/>
          <ClassComp/>
           <hr/>

        <h1 style={style}>JSX</h1>
         {/* JSX ....! */}
          <JSXComp/>
          <WithoutJSX/>

          <hr/>
          <h1 style={style}>Props</h1>
          {/* Props in Function & class componet */}
           <Greet  name='Harish' age='24'/>
           <Greet name='Raju' age='46'/>
           <Greet name='Rani' age='26'>
              <p>This is a children </p>
           </Greet>
           <br/>
            <Welcome name="Ashok" age='52'>
                          <p>I am Project Manager.!</p>
            </Welcome>

            <hr/>
          <h1 style={style}>State</h1>
          {/* State in  class componet */}
            <AMessage/>
             <br/>
            <Counter/> 

            <hr/>
          <h1 style={style}>Destructuring Props and State</h1>
          {/* Destructuring Props and State */}
             <Bike name='RX100' color='Black'/>
             <br/>
             <Car name='BMW' color='blue'/>

             <hr/>
          <h1 style={style}>EventHandling</h1>
             {/* EventHandling */}
           
             <FunctionClick/>
             <br/>
             <ClassClick/>
             {/* EventBinding....! */}
             <EventBind/>

             <hr/>
          <h1 style={style}>Components Communication</h1>
             {/* Components Communication */}
             {/*--- P2C--- */}
                   <Parent/>
             {/* ---C2P---  */}
                  <Pparent/>

                  <hr/>
          <h1 style={style}>Conditional Rendering</h1>
                {/*Conditional Rendering  */}
                <ConditionalWelcome/>  
                <EleVariableCond/>
                <TernaryCondition/>
                <ShortCircuit/>

                <hr/>
          <h1 style={style}>List Rendering ,Keys and Index as anti-pattern</h1>
                {/*Conditional Rendering  */}
               {/* <NameList/> */}
               <br/>
               {/* <PersonList/> */}
               <br/>
               {/* Id as key */}
               <EmpList/> 
               {/* Index as Key */}
               <ContriesList/>

               <hr/>
          <h1 style={style}>CSS Styling...!</h1>
           <MyStylesheet/>
           <br/>
           <InlineStyle/>
           <MyModuleStyle/>

           <hr/>
          <h1 style={style}>Form Handling....!!</h1>
            <Form/>

            <hr/>
          <h1 style={style}>Lifecycle of component....!!</h1>
            <LifeCycleA/>
            {/* <LifeCycleC/> */}
            {/* <Container/> */}


            <h3 style={style}>Error Boundaries (Error Handling)....!!</h3>
             <Vehicle name='BMW'/>
             <Vehicle name='Scorpio'/>
             {/* <ErrorBoundary>
                <Vehicle name='RX100'/>
             </ErrorBoundary> */}


       <hr/>
       <h3 style={style}>Fragment....!!</h3>
        <Fragment/>   
        <br/>
        <FragmentDemo/>
        <br/>
        <Table/>

       <hr/>
       <h3 style={style}>Portals....!!</h3>
        <PortalsDemo/>

       <hr/>
       <h3 style={style}>Pure Component....!!</h3>
        <PureComp/>
        <ParentComp/>
 
        <hr/>
       <h3 style={style}>Memo Component....!!</h3>
       <ParentComponent/>


       <hr/>
       <h3 style={style}>Refs....!!</h3>
       <RefsDemo/>
       <CallBackRefs/>
       <FocusInput/>
       <FRParent/>

       <hr/>
       <h3 style={style}>HOC's....!!</h3>
      <ClickCounter/>
       <HoverCounter/>
      <br/>
      {/* Usage of HOC + We can props like  */}
      <ClickCounterByHOC name='Harish'/>
      <HoverCounterByHoc name='Viru'/>

      <hr/>
      <h3 style={style}>Render props....!!</h3>
               {/* <User name='Harish' /> */}
              {/* <User name={()=>'Harish Viru'} /> */}
				 <User name={(isLoggedIn)=>isLoggedIn?'HARISH':'Viru'} />

      <CounterProps render={(count,countIncrement)=>
          <ClickCounterTwo count={count} countIncrement={countIncrement} /> 
                      }>
      </CounterProps>
      <CounterProps render={(count,countIncrement)=>
           <HoverCounterTwo count={count} countIncrement={countIncrement}/>
                 }>
      </CounterProps>

             {/* or we can uses props.chilren */}
             {/* <CounterProps>
					{
               (count, countIncrement) =>
					<ClickCounterTwo count={count} countIncrement={countIncrement}></ClickCounterTwo>
               }
				</CounterProps> */}
      
      <hr/>
      <h3 style={style}>Context..!!</h3>
      {/* Step:02 */}
      <UserProvider value="Viru">
         <C/>    
       </UserProvider>



    </div>
  );
}

export default App;
