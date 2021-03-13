import React from 'react'
import {buyCake} from '../redux'
import {connect}  from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes :{props.numOfCakes}</h2> 
             <button onClick={props.buyCake}>Buy cake</button>          
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
       buyCake:()=>dispatch(buyCake())
   }
}

//The connect function from react-redux connect react components to redux store
//In our case cakecontainer(React component) to redux-store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

