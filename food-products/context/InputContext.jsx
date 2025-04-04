import React, {  createContext, useState } from 'react'


export const  ContextApi = createContext();

const InputContext = ({children}) => {
    const [input,setInput]=useState('');
    
    
  return (

    <ContextApi.Provider value={{input,setInput}} >
        {children}
    </ContextApi.Provider>
  )
}

export default InputContext

