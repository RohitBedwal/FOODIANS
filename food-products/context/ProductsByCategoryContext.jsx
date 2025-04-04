import React, { createContext, useState } from 'react'

export const  urlContext = createContext();

const ProductsByCategoryContext = ({children}) => {
    const [url,setUrl]=useState([]);
    
    
  return (

    <urlContext.Provider value={{url,setUrl}} >
        {children}
    </urlContext.Provider>
  )
}

export default ProductsByCategoryContext