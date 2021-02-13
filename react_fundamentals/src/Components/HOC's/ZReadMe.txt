Higher Order Components:(HOC) 
= ==========================
• If you want to reuse common piece of code,then we can use HOC's
• A higher-order component (HOC) is an advanced technique in React for reusing component logic

 A higher-order component is a function that takes a component and returns a new component.

const NewComponent = higherOrderComponent(OriginalComponent);

• Whereas a component transforms props into UI, a higher-order component transforms a component into       another component.
•HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s  createFragmentContainer.  ..etc

HOC?#To share common functionality between components
