.JSX
= ====
 • JavaScript XML (JSX) -Extension to the javaScript language syntax.
 • JSX allows us to write HTML in React.
 • JSX tags have a tag name,attributes and children.
 • You are not required to use JSX, but JSX makes it easier to write React applications.
 • JSX Utimately transpiles to pure javascript which is understood by the browsers.
 • With JSX you can write expressions inside curly braces { }.

#Internally Conversion of JSX :
 • JSX allows us to write HTML elements in JavaScript and place them in the DOM without any           createElement()  and/or appendChild() methods
• JSX converts HTML tags into react elements at runtime.

#With JSX
 import React from 'react';
 import ReactDOM from 'react-dom';
 const  element = <h1>With JSX In React</h1>;
 ReactDOM.renderelement, document.getElementById('root'));

#Without JSX
import React from 'react';
import ReactDOM from 'react-dom';
const element = React.createElement('h1', {}, 'Without JSX In React!');
ReactDOM.render(element , document.getElementById('root'));

 #JSX Difference
  class  -->className
  for    -->htmlFor
 camelCase property name convention :
  .onclick  -->onClick
  .tabindex-->tabIndex
