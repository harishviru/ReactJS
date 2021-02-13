.React Refs
= ========
• Refs is the shorthand used for references in React.It is similar to keys in React.
•It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements
•It provides a way to access React DOM nodes or React elements

 We can create refs in two ways .they are..
      i) React.createRef()
     ii)Callback refs
    

i)React.createRef()
ii)Callback refs
       this.cbRef=null
       this.setCbRefs=(element)=>{
          this.cbRef=element
       }

#Passing refs to Children component from parent component

#Forwarding Ref from one component to another component

•Ref forwarding is a technique for automatically passing a ref through a component to one of its children
•We can be performed by making use of the React.forwardRef() method.
•However, it can be useful for some kinds of components, especially in reusable component libraries
