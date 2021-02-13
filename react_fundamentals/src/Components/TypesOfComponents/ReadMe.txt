.Component.
==========

                                    ----------------------
                                    |        Header         |
                                    |---------------------|------------->Root(App) Component
                                    |          |           |S     | 
                                    |SNav |MCon|Nav|
                                    |---------------------|  
                                    |      Footer            |
                                    ----------------------

Here Header,SNav,MCon,Footer are components,these are wrapped by Root(App) component.

#Component :
  • Components are like functions that return HTML elements.
                           (or)
  • Components are independent and reusable bits of code.

  Component Types:
  ----------------
   i)Functional Component
   ii)Class Component

i)Functional Component
  • These components are stateless components and 
  • It  does support  react life-cycle methods.
  • These components can be used for presentation purpose.
                                
                                 ____________________
              __Properties____  |JavaScript Function |________HTML(JSX)
          (Props)               |____________________|

 eg:
     function Welcome(props) {
         return <h1>Hello, {props.name}</h1>;
   }


ii)Class Component
 • These components are statefull components.  
 •It can support react life-cycle methods by extending react components.
 •These components can be used when you want to create methods , state for an component.

                                 __________________
               __Properties____ |         ES6       |________HTML(JSX)
          (Props)               |___(State)_________|

 eg :
     class Welcome extends React.Component {
          render() {
              return <h1>Hello, {this.props.name}</h1>;
          }
      }

• When creating a React component, the component's name must start with an UPPER case letter.
• The component has to include the extends React.Component statement, this statement creates an inheritance      to React.Component, and gives your component access to React.Component's functions.
• The component also requires a render() method, this method returns HTML
          
# Functional Vs Class Components
 - ---------------------------------------
 
            Functional                                                           Class 
 
  •    Simple Functions                                               •        More feature rich
  •   Absence of 'this' Keyword                                       •       'this' keyword 
  •   No State                                                        •       Maintain their own private data -State 
  •  No lifecycle hooks                                               •        Provide lifecycle hooks
  •  Stateless/Dumb/Presentationl                                     •       Stateful/Smart/Container.     


***** Imp*****
Note :
   Hooks are new feature proposal that let you use state and React feactures without  writing a class.
  Hooks are introduced in React v16.7.0-aplha.

  •So that Function component also stateful component by using Hooks Concept.