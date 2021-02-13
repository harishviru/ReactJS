React Portals
==   ========
• Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of  the parent component.('root)

•ReactDOM.createPortal(child, container)

•The first argument (child) is any renderable React child, such as an element, string, or fragment. 
 The second argument (container) is a DOM element.

#Before React v16
•Generally, when you want to return an element from a component's render method, it is mounted as a new div into the DOM and render the children of the closest parent component.
render() {  
// React mounts a new div into the DOM and renders the children into it  
  return (  
   <div>  
     {this.props.children}  
   </div>  
  );  
}

#portal
•But, sometimes we want to insert a child component into a different location in the DOM. It means React does not want to create a new div. We can do this by creating React portal.
render() {  
 return ReactDOM.createPortal(  
   this.props.children,  
   myNode,  
 );  
} 

Note :Actually we can use modals ,tooltips,overflow menus..etc




