//# Single Reducer with 2 action Creator
const redux=require('redux')
const createStore=redux.createStore 

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
const initialState={
    numOfCakes:10,
    numOfIceCreams:20
}

//Reducers
const reducer =(state=initialState,action)=>{
 switch (action.type) {
     case BUY_CAKE:
          return {
            ...state,                    //copy of state object and update numOfCakes property
            numOfCakes:state.numOfCakes-1
          }
    case BUY_ICECREAM:
         return {
         ...state,                    //copy of state object and update numOfIceCreams property
         numOfIceCreams:state.numOfIceCreams-1
     }
     default: return state     
 }
}

 //Redux store
const store =createStore(reducer)
console.log('Initail state :',store.getState()) //1:State
const unsubscribe= store.subscribe(()=> console.log('Updated state :',store.getState())) //2:subscribe
store.dispatch(buyCake()) //3 :dispatching an action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();  //4 :unsubscribing 








