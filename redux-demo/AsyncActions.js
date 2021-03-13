const redux =require('redux')
const createStore =redux.createStore
const applyMiddleWare=redux.applyMiddleware
const thunkMiddleware =require('redux-thunk').default
const axios           =require('axios')

//State
const initialState={
    loading:true,
    users :[],
    error :''
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

//Action creators
const fetchUserRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess=(users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure=(error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

//Reducers
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USERS_REQUEST:
           return {
               ...state,
               loading:true
           } 
        case FETCH_USERS_SUCCESS :
            return {
                loading:false,
                users:action.payload,
                error:''
            }
      case FETCH_USERS_FAILURE :
          return {
               loading:false,
                 users:[],
                error:action.payload
         } 
         default: return state   
    }
}

const fetchUsers=()=>{
  return function(dispatch){
       dispatch(fetchUserRequest())
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
          //response.data is the array of users
          const users=response.data
          dispatch(fetchUserSuccess(users))
      })
      .catch(error=>{
          //error.message
          console.log(error)
          dispatch(fetchUsersFailure(error))
      })
  } 
}


//Store
const store=createStore(reducer,applyMiddleWare(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())


















