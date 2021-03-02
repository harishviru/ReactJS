import React,{useState} from 'react'

//iii)useState with object
function HookCounterThree() {

  const [name, setName] = useState({firstName:'',lastName:''})

    return (
      <div>
        <h2>Your FirstName : {name.firstName}</h2>
        <h2>Your lastName : {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        <br />
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value })}
        />
      </div>
    );
}

export default HookCounterThree
