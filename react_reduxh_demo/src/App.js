import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
          <div className="App">
              {/* Basic React-Redux */}
               <CakeContainer/>
               {/* React-Redux with hook */}
               <HookCakeContainer/>
               <IceCreamContainer/>
               {/* input value can be taken by input element */}
               <NewCakeContainer/>
               {/* Item Container [as common logic {mapStateToProps,mapDispatchToProps}]  */}
              <ItemContainer cake/>
              <ItemContainer/>
               {/* Async API Call */}
               <UserContainer/>
          </div>
    </Provider>
  );
}

export default App;
