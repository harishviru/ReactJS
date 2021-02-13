import React from 'react'


//01  :EventHandling
function FunctionClick() {

    function clickHandler(){
        console.log('[FunctionClick] Button clicked.....!')
    }
    return (
        <div>
                 <button onClick={clickHandler}>FunctionClick</button>
        </div>
    )
}

export default FunctionClick
