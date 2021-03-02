======
• useRef is used access DOM nodes  
   const refContainer = useRef(initialValue);
 •useRef returns a mutable ref object whose .current property is initialized to the passed argument        (initialValue). 
    ex:
    inputEl.current.focus();

• The useRef Hook is a function that returns a mutable ref object whose . ... current property is initialized with   the passed argument ( initialValue ).
 The returned object will persist for the full lifetime of the component
