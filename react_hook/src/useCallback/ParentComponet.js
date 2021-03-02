import React,{useState,useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

//01.useCallback [Perform optimization]
function ParentComponet() {

const [age, setAge] = useState(24)
const [salary, setSalary] = useState(75000)

//useCallback caches function based on age state
const incrementAge=useCallback(()=>{
     setAge(age+1)
},[age])

const incrementSalary=useCallback(()=>{
    setSalary(salary+4000)
},[salary])

    return (
        <div>
             <h2>useCallbcak -hook</h2>
             <Title/>
             <Count text="Age" count={age} />
             <Button handleClick={incrementAge}>Increment Age</Button>
             <Count text="Salary" count={salary} />
             <Button handleClick={incrementSalary}>Increment Salary</Button>   
        </div>
    )
}

export default ParentComponet
