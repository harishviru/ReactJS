import React from 'react'

function FunctionalMemo({name}) {
    console.log('FunctionalMemo')
    return (
        <div>
             <h2> name :{name}</h2> 
        </div>
    )
}

export default React.memo(FunctionalMemo) // Memo component by wrapping React.Memo(comp)
