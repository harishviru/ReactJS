import React from 'react';


 class ClassComp extends React.Component{

      constructor(){
          super();
          this.state={name:'class'};
      }

     render(){
          return <h2>I am {this.state.name} Component</h2>
     }
 }

 export default ClassComp;