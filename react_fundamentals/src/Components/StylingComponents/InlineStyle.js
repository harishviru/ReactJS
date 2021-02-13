import React from 'react'

//#02.InLine stylesheet
function InlineStyle() {

 let myStyle={
     color:'white',
     backgroundColor:'blue',
     marginLeft:'auto',
     marginRight:'auto',
     textAlign:'center',
     width:'50%'
    }
    return (
        <div>
               <h2 style={{color:'blue',backgroundColor:'gray',marginLeft:'auto',marginRight:'auto',textAlign:'center',width:'50%'}}> 2.1 Inline Style</h2>
               <h2 style={myStyle}>2.2 Inline Stylesheet</h2>  
        </div>
    )
}

export default InlineStyle
