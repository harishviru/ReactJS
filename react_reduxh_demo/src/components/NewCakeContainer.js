import React,{useState} from 'react'
import {buyCake} from '../redux'
import {connect}  from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes :{props.numOfCakes}</h2> 
             <input type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
             <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button>          
        </div>
    )
}

//01.selector or function that return state of app
//The state from redux store is mapped to component props 
const mapStateToProps=state=>{
    return {
        numOfCakes:state.cake.numOfCakes
    }
}
//02.dispatch
//dispatch in action creator from redux store is mapped to component props 
const mapDispatchToProps=dispatch=>{
   return {
       buyCake:(number)=>dispatch(buyCake(number))
   }
}

//The connect function from react-redux connect react components to redux store
//In our case NewCakeContainer(React component) to redux-store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)

