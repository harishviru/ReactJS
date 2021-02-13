import React from 'react';

class Welcome extends React.Component{
   render(){
    return(
         <>
          <h2>Welcome {this.props.name} and age is {this.props.age} </h2>
            {this.props.children}
           </>  
         );
   }
}

export default Welcome ;