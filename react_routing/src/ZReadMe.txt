                                                React JS -Routing
                                       |||||||||||||||||||||||||||||||||||||


Routing:
= =====
  •Routing is a process in which a user is directed to different pages based on their action or request.
  •Routing is the ability to move between different parts of an application when a user enters a URL or 
   clicks an  element (link, button, icon, image etc) within the application.

#React Router Installation
React contains three different packages for routing. They are:
=> react-router: the core library
=> react-router-dom: a variant of the core library meant to be used for web applications
=> react-router-native: a variant of the core library used with react native in the development of Android and     iOS applications.

It is not possible to install react-router directly in your application. To use react routing, first, you need to install react-router-dom modules in your application.

    $ npm install react-router-dom --save   

#Components in React Router
 There are two types of router components:
  
  • <BrowserRouter>     : It is used for handling the dynamic URL.
  • <HashRouter>         : It is used for handling the static request.


  • <Router>       :<BrowserRouter>  or   <HashRouter>   
  • <Route>        :It is used to define and render component based on the specified path

  • <Link>         :This component is used to create links which allow to navigate on different URLs and render                              its content without reloading the webpage.
  • <NavLink>  :If you want to add styling attributes to the rendered element when it matches the current URL.
                           Then we can use NavLink
  • <Switch>    : The <Switch> component is used to render components only when the path will be matched.                                Otherwise, it returns to the not found component.
  • <Redirect> :A <Redirect> component is used to redirect to another route in our application to maintain the                           old URLs
  • <Prompt> :Used to prompt the user before navigating away from a page. When your application enters a                         state that should prevent the user from navigating away (like a form is half-filled out), render a                           <Prompt>

ex : <Router>    ,<Route>   
            <Router>
                    <Route  path="/" render={()=>(<div>Home</div>)} />
                    <Route  path="/contact" component={Contact} />    
                    <Route  path="/about" component={About} />   
                    <Route  path="/gallery" component={Gallery} />   
            </Router>

ex : <Link>,<NavLink>,<Switch>  ,<Redirect >
  <Router>  
    <div>  
      <ul>  
        <li> 
             <Link to="/">Home</Link>  
        </li>  
        <li>  
              <NavLink to="/about" exact activeStyle={ {color:'green'}}>About</NavLink>  
        </li>  
        <li>  
           <Link to="/contact">Contact</Link>  
        </li>  
      </ul>  
      <Switch>  
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
      </Switch>  
    </div>  
  </Router>

<Redirect 
  to={{pathname: ‘/login’, state: {from:props.location}}}
/>


<Link> vs <NavLink>
The Link component allows navigating the different routes on the websites,
 whereas NavLink component is used to add styles to the active routes.