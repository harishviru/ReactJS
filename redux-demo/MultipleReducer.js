// Cakes & Ice Creams
// ------------------------
// Cake shop
// Cakes stored on the shelf
// Shopkeeper to handle BUY_CAKE from customer

// Sell ice creams
// ice Creams stored in the freezer
// New Shopkeeper to handle BUY_ICECREAM from customer 

//# Multiple Reducer with 2 action Creator
const redux=require('redux')
const createStore=redux.createStore 
const combineReducers=redux.combineReducers

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

//Action or action Creator   [Action creator is function which return action]
function buyCake(){
 return {
    type:BUY_CAKE  
  }
}
function buyIceCream(){
    return {
       type:BUY_ICECREAM 
     }
 }

//Reducers:  (previousState,action)=>newState
//State
// const initialState={
//     numOfCakes:10,
//     numOfIceCreams:20
// }

const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    numOfIceCreams:20
}

//Reducers
// const reducer =(state=initialState,action)=>{
//     switch (action.type) {
//         case BUY_CAKE:
//              return {
//                ...state,                    //copy of state object and update numOfCakes property
//                numOfCakes:state.numOfCakes-1
//              }
//        case BUY_ICECREAM:
//             return {
//             ...state,                    //copy of state object and update numOfIceCreams property
//             numOfIceCreams:state.numOfIceCreams-1
//         }
//         default: return state     
//     }
//    }

//Reducers
const cakeReducer =(state=initialCakeState,action)=>{
 switch (action.type) {
     case BUY_CAKE:
          return {
            ...state,                    //copy of state object and update numOfCakes property
            numOfCakes:state.numOfCakes-1
          }
     default: return state     
 }
}
const iceCreamReducer =(state=initialIceCreamState,action)=>{
    switch (action.type) {
       case BUY_ICECREAM:
            return {
            ...state,                    //copy of state object and update numOfIceCreams property
            numOfIceCreams:state.numOfIceCreams-1
        }
        default: return state     
    }
   }


 //Redux store

 const rootReducer=combineReducers({
     cake:cakeReducer,
     iceCream:iceCreamReducer
 })
const store =createStore(rootReducer)
console.log('Initail state :',store.getState()) //1:State
const unsubscribe= store.subscribe(()=> console.log('Updated state :',store.getState())) //2:subscribe
store.dispatch(buyCake()) //3 :dispatching an action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();  //4 :unsubscribing 



