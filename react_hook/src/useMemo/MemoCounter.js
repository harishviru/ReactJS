import React ,{useState,useMemo}from 'react'

function MemoCounter() {

const [countOne, setCountOne] = useState(0)
const [countTwo, setCountTwo] = useState(0)

const incrementOne=()=>{
    setCountOne(countOne+1)
}

const incrementTwo=()=>{
    setCountTwo(countTwo+1)
}

const isEven=useMemo(()=>{
    let i=0
    while(i<2000000000)i++ //for performance degrade
    return countOne %2===0
},[countOne])

    return (
        <div>
            <button onClick={incrementOne}>count One -{countOne}</button> 
              <span>{isEven ?'Even':'Odd'}</span>
            <br/>
            <button onClick={incrementTwo}>count Two -{countTwo}</button>
        </div>
    )
}

export default MemoCounter
