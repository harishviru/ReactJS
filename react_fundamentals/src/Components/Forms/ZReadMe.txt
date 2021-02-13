.React Forms
= ==========
•In Regular Html ,form elements like input,textarea,..etc are responsible to handle the user input on their own   and update the  respective value.
• But, in React , form elements are controlled by components are called controlled components

#controlled components
             this.state={
                 name :''
             }
           this.changeHandler=(event)=>{
              this.setState({name:event.target.value})
          }

 <input type="text" value={this.state.name} onChange={this.changeHandler}/>

• When ever user enter input value ,react component handle and update the respective value.

