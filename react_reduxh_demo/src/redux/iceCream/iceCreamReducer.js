import { BUY_ICECREAM } from "./iceCreamTypes";


//state 
const initialState={
    numOfIceCreams:20
}

//Reducers
const iceCreamReducer =(state=initialState,action)=>{
       switch (action.type) {
           case BUY_ICECREAM:
                return {
                    ...state,
                    numOfIceCreams:state.numOfIceCreams-1
                }      
           default: return state          
       }    
}

export default iceCreamReducer