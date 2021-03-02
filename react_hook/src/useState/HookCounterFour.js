import React,{useState} from 'react'

//iv)useState with Array
function HookCounterFour() {
const [items, setItems] = useState([])

const addItem=()=>{
    setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random() * 10)+1}
    ])
}
    return (
        <div>
             <br/>
            <button onClick={addItem}>Add a Number</button>
             <ul>
                 {items.map((item,index)=>(
                     <li key={item.id}>{item.value}</li>
                 ))
                 }
             </ul>
        </div>
    )
}

export default HookCounterFour
