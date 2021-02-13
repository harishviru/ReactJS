import React from 'react'

//#04.id as Key
function EmpList() {
    let employees=[
        { id:1, name: 'chris',age:34,postion:'DBA' },
        { id:2, name: 'John',age:45,postion:'Tester' },
        { id:3, name: 'Theo',age:24,postion:'SAP' },
        { id:4, name: 'Uma',age:31,postion:'Developer' }
      ] 

   const EmpList =employees.map(employee=>
                                    <h2 key={employee.id}>My name is {employee.name} and :{employee.age} years old and my position is --{employee.postion}</h2>     
                                )
    return (
        <div>
            {EmpList}
        </div>
    )
}

export default EmpList
