import React, { createContext, useState } from 'react'

export const  sideBarContext = createContext();

const CategoryContext = ({children}) => {
    const [open,setOpen]=useState(false);
    
    
  return (

    <sideBarContext.Provider value={{open,setOpen}} >
        {children}
    </sideBarContext.Provider>
  )
}

export default CategoryContext