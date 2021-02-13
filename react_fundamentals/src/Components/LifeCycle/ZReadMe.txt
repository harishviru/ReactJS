.Lifecycle of Components
= ==================
• React component has a lifecycle methods ,it divided into four phases ,they are.

i)Mounting                   :When an instance of component is being created and inserted into the DOM.
ii)Updating                  :When a comp is being re-rendered as a result of changes to either its props or state     
iii)Unmounting               :When a comp is being removed from the DOM
iv)Error Handling            :When there is an error during rendering ,in a lifecycle method, or in the constructor
                                            of any child comp.

#lifecycle methods
i)Mounting                     :constructor,static getDerivedStateFromProps,render, and componentDidMount
ii)Updating                    :static getDerivedSateFromProps,shouldComponentUpdate,render,
                                           getSnapshotBeforeUpdate and componentDidUpdate.
iii)Unmounting                 :componentWillUnmount
iv)Error Handling              :static getDerivedStateFromError and componentDidCatch   


i)Mounting   LifeCycle Methods :
#01 constructor                         •A special function that will get called whenever a new component is created.
                                        • super(props)
                                        • Initializing state (i.e this.state )
                                        •Binding that event handlers
                                        •Don not use HTTP request.          


#02 static getDerivedSateFromProps(props,state)
 •When the state of the component depends on changes in props over time.
 • Set the state (When initial stage of component depends on props)
•Don not use HTTP request. 
Note :
•The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

#03 render
•Only required method
•Read props and state and return JSX.
•Do not change state or interact with DOM or making ajax calls.
•If it have children,then Children components lifecycle methods are executed

#04 componentDidMount
• These method will be called only Once in whole lifecycle methods of given component.
• Invoked immediately after a component and all its children components have beeb rendered to the DOM.
•We can interact with DOM or perform any ajax calls to load data.


ii)Updating  LifeCycle Methods :

#01 static getDerivedStateFromProps(props,state)      
                                           • These method is called every time ,when a component is re-renderd.                      
                                           • Set the state (When initial stage of component depends on props)
                                           •Don not use HTTP request.  

#02 shouldComponentUpdate (nextProps,nextSate)
                                           • It dictates if the component should re-rendered or not
                                           • if false->React comp doesnot re-render  ,true--->re-render
                                          •  Used for performance optimization.
                                          •Don not use HTTP request.  
 #03 render
•Only required method
•Read props and state and return JSX.
•Do not change state or interact with DOM or making ajax calls.
•If it have children,then Children components lifecycle methods are executed
                                         
#04 getSnapshotBeforeUpdate(prevProps,prevState)
  •It accepts previous props and state .
  •It called right before the changes from the virtual DOM are to be reflected in the DOM.
  •Capture some information from the DOM.
 •These method will either return null or return a value.
  Returned value will be passed as third parameter to next method(componentDidUpdate).

#05 componentDidUpdate(prevProps,prevState,snapshot)
 •Called after the render is finished in the re-rendered cycles .
 •We can make ajax class (Before ajax calls compare props and decide ).


iii)Unmounting  LifeCycle method
    #componentWillUnmount() ---(Clean up method)
   •When a component is removed from the DOM, or unmounting as React likes to call it. 
          or
    •These method is called immediately before a component is unmounted and destroyed.
    Usage : Canceling any network requests ,removing event handlers or invalidating or destroying or closing                 connection
    
iv)Error Handling LifeCycle method
 #01 state getDerivedStateFromError(error)
#02 componentDidCatch(error,info)
• When there is an error either during rendering , in a lifecycle method ,or any children constructor

  #Error boundaries (Error Handling LifeCycle)
  •A class component that implements either  one or both of the lifecycle methods getDerivedStateFromError
  or componentDidCatch becomes an error boundary
• The static method getDerivedStateFromError is used to render a fallback UI after an  error is thrown and 
    the componentDidCatch method is used to log the error information
•  The placement of error boundaries also matter Whether entire application or one component