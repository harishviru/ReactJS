import React from 'react'

//#04.index as Key
function ContriesList() {
 
    let countries=['Japan','korea','India','China']
    const countriesList=countries.map((country,index)=><h2 key={index}>{index}- {country}</h2>)
    return (
        <div>
            {countriesList}
        </div>
    )
}

export default ContriesList
