import React from 'react'

//#03 (i). Destructuring  
function Bike(props) {
     console.log('bk-',props)
    const {name,color}=props;
    return (
        <div>
             {/* Destructuring props */}
            <h1> Bike :{name} -{color}</h1>
        </div>
    )
}

export default Bike
