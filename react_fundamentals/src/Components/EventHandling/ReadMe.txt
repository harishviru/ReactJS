.Event Handling
== ===========
•Just like HTML, React can perform actions based on user events.
•React has the same events as HTML: click, change, mouseover etc.
•React events are written in camelCase syntax:
  -- onClick instead of onclick
•React event handlers are written inside curly braces:
  -- onClick={shoot}  instead of onClick="shoot()"

We can use four approch in Event binding in class component.They are
i)Bind method on elemet itself
<button onClick={this.clickHandler.bind(this)}>Click Me</button>
ii)Arrow Function on elemet itself
 <button onClick={()=>this.clickHandler()}>Click Me</button>
iii)Bind method in constructor.
 constructor(){
      super();
      this.changeMessage=this.changeMessage.bind(this)
  }
  <button onClick={this.changeMessage}>Click Me</button>
iv)Arrow Function
    changeMessageByArW=()=>{
        console.log(this)
        this.setState({
            message:'Thanks....!'
         })
    }
  <button onClick={this.changeMessageByArW}>Click Me</button>
