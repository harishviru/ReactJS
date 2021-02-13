.Pure Component (Only Work for class component)
= ============
   Regular Component                                           |                           Pure Component

• A regular component does not implement the    •A pure component on the other hand implements 
 shouldComponentUpdate method. it always           shouldComponentUpdate method with shallow props 
 return true by default.                                                and state comparison

• A pure component implements shouldComponentUpdate with a shallow props and state comparison.

    SC of prevState with currentState    __Difference___________>  Re-render component     
    SC of prevProps with currentProps                           > 


#Shallow Comparison (SC)
 
Primitive Type (SC)
• a (SC) b return true if a and b have the same value and are of the same type.
Eg : string 'Apple' (SC) string 'Apple' return true

Complex Types (SC)
 • a (SC) b return true if a and b  reference that exact same object.
 eg:
     i)var a={1,2,3,4};
       var b={1,2,3,4};
       var c=a;
                   
       var ab=(a===b) ;//false
       var ac=(a===c);//true

    ii)var a={x:1,y:2};
       var b={x:1,y:2};
       var c=a;
                   
       var ab=(a===b) ;//false
       var ac=(a===c);//true
Note :
• We can create pure component by extending the PureComponent class.
• A pure component implements shouldComponentUpdate with a shallow props and state comparison.
•If there is no difference,the component not re-render-performance boost
•It is a good idea to ensure that all the children components aslo pure to avoid unexpected behaviour.
•Never mutate state.Always return  a new object that reflects the state.








