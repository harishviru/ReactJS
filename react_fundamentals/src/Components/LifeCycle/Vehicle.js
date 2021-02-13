import React from 'react'

function Vehicle({name}) {  
    if(name==='RX100'){
            throw new Error('RX100 is not accepted ..! ')
    } 
   return (
    <div>
        name :{name}
    </div>
)
}

export default Vehicle
