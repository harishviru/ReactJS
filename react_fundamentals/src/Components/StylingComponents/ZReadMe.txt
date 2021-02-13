.React CSS  /Styling React Components
= ==================================
There are four ways to style React component with CSS.They are:

      i)CSS stylesheets (Regular)
     ii)Inline styling
    iii)CSS Modules
     iv)CSS in JS Libaries

 i)CSS stylesheets 
•To use CSS stylesheets in react componnet, You can write your CSS styling in a separate file, 
  just save the file with the .css file extension
•Import the stylesheet in your react component like 
    import './App.css';

App.css.
---------
.primary{
 color:blue;
}

ii)Inline Styling
•To style an element with the inline style attribute, the value must be a JavaScript object:
• In JSX, JavaScript expressions are written inside curly braces

 eg : <h1 style={{color: "red"}}>Hello Style!</h1>

#camelCased Property Names (in javascript)
• The inline CSS is written in a JavaScript object, properties with two names, like background-color,
  must be written with camel case syntax. 
•Use backgroundColor instead of background-color:      
eg  :<h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>

 iii)CSS Modules
•Another way of adding styles to your application is to use CSS Modules.
•The CSS inside a module is available only for that component that imported it.
•You do not have to worry about name conflicts.
•Create the CSS module with the .module.css extension, example: mystyle.module.css.

mystyle.module.css.
-------------------
.secondary{
 color:gray;
}
•We can import the stylesheet in your component like
      import styles from './mystyle.module.css'; 

eg :
   <h1 className={styles.secondary}>Hello ....!</h1>
