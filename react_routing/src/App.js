import React from 'react';
import {BrowserRouter as Router,Link,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'
import Gallery from './Components/Gallery'


const Lead = ({ match }) => <p>{match.params.id}</p>  


function App() {
  return (
    <div>
           {/*  */}
            {/* <Router>
                    <Route  path="/" render={()=>(<h2>Home</h2>)} />
                    <Route  path="/contact" component={Contact} />    
                    <Route  path="/about" component={About} />   
                    <Route  path="/gallery" component={Gallery} />   
            </Router> */}

              {/* exact */}
              {/* <Router>
                    <Route exact  path="/" render={()=>(<h2>Home</h2>)} />
                    <Route   path="/contact/" component={Contact} />    
                    <Route   path="/about" component={About} />   
                    <Route   path="/gallery" component={Gallery} />  
                    <Route exact  path="/help/yes" render={()=>(<h2>Help Page</h2>)} />   
 
               </Router>           */}

                    {/* exact,strict */}

               {/* <Router>
                    <Route exact strict path="/" render={()=>(<h2>Home</h2>)} />
                    <Route strict  path="/contact/" component={Contact} />    
                    <Route   path="/about" component={About} />   
                    <Route   path="/gallery" component={Gallery} />  
                    <Route strict  path="/help/" render={()=>(<h2>Help Page</h2>)} />   
               </Router>  */}

                {/* Link */}
                {/* <Router>
                 <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/contact/">Contact</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/help/">Help</Link>
                      </li>
                 </ul>
                    <Route exact strict path="/" render={()=>(<h2>Home</h2>)} />
                    <Route strict  path="/contact/" component={Contact} />    
                    <Route   path="/about" component={About} />   
                    <Route   path="/gallery" component={Gallery} />  
                    <Route strict  path="/help/" render={()=>(<h2>Help Page</h2>)} />   
               </Router> */}

                     {/*NavLink  */}
                     {/* <Router>
                 <ul>
                      <li>
                        <NavLink to="/" activeStyle={{color:'green'}}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact/"  activeStyle={{color:'hotpink'}}>Contact</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about"  activeStyle={{color:'darkviolet'}}>About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/gallery"  activeStyle={{color:'darkseagreen'}}>Gallery</NavLink>
                      </li>
                      <li>
                        <NavLink to="/help/"  activeStyle={{color:'darksalmon'}}>Help</NavLink>
                      </li>
                 </ul>
                    <Route exact strict path="/" render={()=>(<h2>Home</h2>)} />
                    <Route strict  path="/contact/" component={Contact} />    
                    <Route   path="/about" component={About} />   
                    <Route   path="/gallery" component={Gallery} />  
                    <Route strict  path="/help/" render={()=>(<h2>Help Page</h2>)} />   
               </Router> */}
                

       {/*NavLink  ,Switch,Redirect*/}
  <Router>
                 <ul>
                      <li>
                        <NavLink to="/" activeStyle={{color:'green'}}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact/"  activeStyle={{color:'hotpink'}}>Contact</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about"  activeStyle={{color:'darkviolet'}}>About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/gallery"  activeStyle={{color:'darkseagreen'}}>Gallery</NavLink>
                      </li>
                      <li>
                        <NavLink to="/help/"  activeStyle={{color:'darksalmon'}}>Help</NavLink>
                      </li>
                 </ul>
                  <Switch>
                    <Route exact strict path="/" render={()=>(<h2>Home</h2>)} />
                    <Route   path="/contact/" component={Contact} />    
                    <Route   path="/about" component={About} />   
                    <Route   path="/gallery" >
                          <Redirect to="/about"  component={About}  />
                      </Route>  
                    <Route strict  path="/help/" render={()=>(<h2>Help Page</h2>)} /> 
                    <Route  render={()=>(<h2 style={{backgroundColor:"dimgray",color:"white",textAlign:"center"}}>Opps...........!</h2>)} />
                    </Switch> 
               </Router>

{/* For more Reference :https://reactrouter.com */}


    </div>
  );
}

export default App;
