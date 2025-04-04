
import React from 'react'
import Home from '../components/Home'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import SearchName from '../pages/SearchName';
import CategoryContext from '../context/CategoryContext';
import ProductByCategory from '../pages/ProductByCategory';
import ProductsByCategoryContext from '../context/ProductsByCategoryContext';
import CartContext from '../context/CartContext';

const App = () => {

  return (
      <CartContext>
    <ProductsByCategoryContext>

   <CategoryContext>

   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      <Route path='/search' element={<SearchName/>}/>
      <Route path='/category/products' element={<ProductByCategory/>}/>

      
    </Routes>
   </BrowserRouter>
   </CategoryContext>
    </ProductsByCategoryContext>
      </CartContext>
   
    
   
  )
}

export default App