1)useState
    • Hook uses useState() functional component for setting and retrieving state.
   •  useState is used for state management
    ex :   const [state,setState]=useState(initialVal); where initialVal=0

   #Imp Points :
   •  The useState hook lets you to add state to functional components
   • In classes,the state is always an Object
   • But ,with the useState hook,the state doesn't have to be an Object.(It can be number,string,array,Object..)
   • The useState hook returns an array with 2 elements
   • The first element  is the current value of the state,and the second element is a state setter function
   • If New state value depends on the previous state value..? You can pass a function to the setter function.
   • When dealing with Objects or arrays,always make sure to spread your state variable and then call the
     setter function.