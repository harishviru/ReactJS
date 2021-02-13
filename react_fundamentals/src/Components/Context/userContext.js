import React from 'react'

//Create UserContext by using React.createContext()
//#Step :01
const UserContext=React.createContext() //we can provide default value React.createContext('Harish')

const UserProvider=UserContext.Provider

const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}

export default UserContext