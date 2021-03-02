import React ,{useReducer,useEffect}from 'react'
import axios from "axios"

const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:'something went wrong'
            }
        default:
           return state
    }
}


function RDataFetchingTwo() {
    
const [state, dispatch] = useReducer(reducer, initialState)

useEffect( ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
    .then(res=>{
        console.log(res.data)
        dispatch({type:'FETCH_SUCCESS',payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:'FETCH_ERROR'})
    })
},[])

    return (
        <div>
             <br/>
             {state.loading ? "loading":state.post.title}
             {state.error ? state.error:null}
        </div>
    )
}

export default RDataFetchingTwo
