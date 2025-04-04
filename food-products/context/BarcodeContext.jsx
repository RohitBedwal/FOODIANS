import React, { createContext, useEffect, useState } from 'react'


export const  BarcodeContextData = createContext();

const BarcodeContext = ({children}) => {
    const [barcode,setBarcode]=useState('');
    
    
    useEffect(() => {
      const savedBarcode = localStorage.getItem("barcode");
      if (savedBarcode) {
        setBarcode(savedBarcode);
      }
    }, []);
  
    // Save barcode to Local Storage whenever it changes
    useEffect(() => {
      if (barcode) {
        localStorage.setItem("barcode", barcode);
       
      }
    }, [barcode]);
    
  return (

    <BarcodeContextData.Provider value={{barcode,setBarcode}} >
        {children}
    </BarcodeContextData.Provider>
  )
}

export default BarcodeContext


