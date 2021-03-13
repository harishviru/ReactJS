import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import cakeReducer from './cake/cakeReducer'
import logger from 'redux-logger'
import rootReducer from './rootReducer'


// //Store
// const store =createStore(cakeReducer)

// export default store

// const store =createStore(rootReducer)

//  export default store


// const store =createStore(rootReducer,applyMiddleware(logger))

//  export default store

const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

 export default store



