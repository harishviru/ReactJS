import React from 'react';


// function WithoutJSX(){

//     return React.createElement('div',{id:'jsx',className:'myClass'},
//       React.createElement('h1',null,'I am not JSX')
//     )
// }

//By Using ES6 arrow function
const WithoutJSX=()=>{
  return React.createElement('div',{id:'jsx',className:'myClass'},
      React.createElement('h1',null,'I am not JSX')
    )
}



export default WithoutJSX;
