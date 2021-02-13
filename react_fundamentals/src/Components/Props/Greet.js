import React from 'react';


function Greet(props){
     console.log(props);
      return (
           <div>
                <h3> Hello {props.name} and age is {props.age}</h3>
                {props.children}
                
          </div>
      );
}

export default Greet;