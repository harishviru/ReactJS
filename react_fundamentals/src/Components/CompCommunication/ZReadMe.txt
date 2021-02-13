.Component Communication.
 == ====================
 If you want to pass any data from one component to another component,we can use props
 Props provide one-way communication from a parent to a child,
 But by using callback we can pass child to parent also.
      
          i)Parent to Child (By props)
         ii)Child to Parent (By Using callback+props)

i)Parent to Child (By props)
• In this type of communication, a parent passes the data to the child by adding an extra attribute in the child     component declaration.

  eg : <ChildComponent name='Pojitha'/>   (From P-C)

 ii)Child to Parent (By Using callback+props)
• Data from a child can be passed to the parent using a callback. This can be achieved by using the following    steps.
  a)Create a callback method in parent and pass it to the child using props.
 b)Child can call this method using “this.props.[yourCallbackName]” form child and pass data as argument.

eg :     In Parent                                (From C-P)
              setName=(name)=>{
               this.setState({name})
             }
             <ChildComponent setName={this.setName}/>  

         In Child
            sendParent =()=>{
                  this.props.setName('pojitha')
            }
          <button onClick={this.sendParent}>Click Me</button>  