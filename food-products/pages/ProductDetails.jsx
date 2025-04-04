import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import { BarcodeContextData } from '../context/BarcodeContext';
import ProductCard from '../components/ProductCard';
import NavBar2 from '../components/NavBar2';

import SideBar from '../components/SideBar';

import Header from '../components/Header';
import Cart from './Cart';




const ProductDetails = () => {


  
  const {barcode,setBarcode} = useContext(BarcodeContextData);
 
  const [product,setProduct]=useState([])

  
  
  

  
  async function fetchData(){
  try{
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v0/product/${barcode}.json`);
    console.log(res.data.product.image_url)
    setProduct(res.data.product)
  }
  catch(error){
    console.log(error)
   
  }
 }
  useEffect(() => {
    

        fetchData();
      

  }, [barcode])
  

  return (
    <div>
      <Header/>
      <NavBar2  />
      <Cart />
      
      <SideBar/>
      <ProductCard  product={product}  />
     
      
    </div>
  )
}

export default ProductDetails