import React from 'react'
import {buyIceCream} from '../redux'
import {connect}  from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams :{props.numOfIceCreams}</h2> 
             <button onClick={props.buyIceCream}>Buy cake</button>          
        </div>
    )
}

//01.selector or function that return state of app
//The state from redux store is mapped to component props 
const mapStateToProps=state=>{
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}
//02.dispatch
//dispatch in action creator from redux store is mapped to component props 
const mapDispatchToProps=dispatch=>{
   return {
       buyIceCream:()=>dispatch(buyIceCream())
   }
}

//The connect function from react-redux connect react components to redux store
//In our case IceCreamContainer(React component) to redux-store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)

