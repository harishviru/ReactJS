import React from 'react'
import Person from './Person'

//#02
function PersonList() {
   
  let persons=[
    { id:1, name: 'chris',age:34,location:'USA' },
    { id:2, name: 'John',age:45,location:'England' },
    { id:3, name: 'Theo',age:24,location:'London' },
    { id:4, name: 'Uma',age:31,location:'Africa' }
  ]  
// const personList =persons.map(person=><h2>My name is {person.name} and age :{person.age} and living  at {person.location}</h2>)
   const personList =persons.map(person=><Person person={person}/>)
   
   return (
        <div>
            {/* When i executed these ,REACT asking like these .. Each child in a list should have a unique "key" prop. */}
            {personList}   
        </div>
    )
}

export default PersonList
