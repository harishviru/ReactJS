Context
= ======
•Context provides a way to pass data through the component tree without having to pass props manually
  at every level

    #component tree
                                               App Component
                                                         |                   (username)
                                    ---------------------------------
                                    |                |               |       
                                    A                B               C
                                                     |               |   
                                                     D               E        
                                                                     |
                                                                     F
• If you want to pass data (ex :username Comp C-to -F) ,Actually we can pass props manually at every level  like C-E,E-F.
•Instead of passing props manually at every level we can use context

Steps
i)Create the context
ii)Provide a context value
iii)Consume the context value

i)Create the context
//#Step :01
const UserContext=React.createContext()

const UserProvider=UserContext.Provider

const UserConsumer=UserContext.Consumer

ii)Provide a context value
 {/* Step:02 */}
      <UserProvider value="Viru">
         <C/>    
    </UserProvider>

iii)Consume the context value
 //Step:03
 <UserConsumer>
                 {
                    (username)=>{
                        return <h2>Hello {username}....!</h2>
                    } 
                 }
 </UserConsumer>

#Consume the context value in different ways
• Componet*.contextType=UserContext
eg : E.contextType=UserContext

• static contextType=UserContext (If class accpets public fields)
#limitations of contextType
.It only works for class components
. You can subscribe single context using contextType.
