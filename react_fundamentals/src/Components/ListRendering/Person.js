import React from 'react'

//#03
function Person({person}) {
    return (
        <div>
            <h2>My name is {person.name} and age :{person.age} and living  at {person.location}
            </h2>
        </div>
    )
}

export default Person
