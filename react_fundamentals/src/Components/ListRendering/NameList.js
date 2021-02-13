import React from 'react'

//#01
function NameList() {
    const names=['Raju','Uma','Pojitha']
    return (
        <div>
             {
                //   {/* When i executed these ,REACT asking like these .(WARNING). Each child in a list should have a unique "key" prop. */}
                 names.map(name=><h2>{name}</h2>)
             }
        </div>
    )
}

export default NameList
