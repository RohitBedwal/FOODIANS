import React, {    useEffect, useState } from 'react'

import axios from 'axios'
import SortingBox from './SortingBox'
import SideBar from './SideBar'
import NavBar2 from './NavBar2'
import FoodCard2 from './FoodCard2'
import Header from './Header'

import { urlContext } from '../context/ProductsByCategoryContext'
import Pagination from './Pagination'
import Cart from '../pages/Cart'






const Home = () => {
    
 
  const [products, setProducts] = useState([]);

  const[ascName,setAscName]= useState(false);
    const[descName,setDescName]= useState(false);
    const[ascGrade,setAscGrade]= useState(false);
    const[descGrade,setDescGrade]= useState(false);
   
    const [page, setPage] = useState(1);
    const [totalPages,setTotalPage]=useState(0);
  
  
  
  

    async function handleAllProducts(){
        try{
          const res = await axios.get(`https://world.openfoodfacts.org/products.json?page=${page}`)
            setProducts(res.data.products)
            setTotalPage(Math.floor(res.data.count/30))
          }
          catch(err){
            console.log(err)
            
          }
        }
   useEffect(() => {
     handleAllProducts()
    
     
   }, [page])
   

   


  return (
    <div  className='bg-white '>
      <Header/>
      <NavBar2/>
      <SideBar/>
      <Cart/>
    <div className=' h-[33vw] overflow-hidden '>
      <img className=' rotate-180' src="../src/assets/images/Home.jpg" alt="" />
      

    </div>
    <SortingBox setAscName={setAscName} setDescName={setDescName} s setAscGrade={setAscGrade} setDescGrade={setDescGrade}  />
    <FoodCard2 ascName={ascName} descName={descName} ascGrade={ascGrade}  descGrade={descGrade} products={products}/>
    <Pagination  totalPages={totalPages} currentPage={page} onPageChange={setPage}/>
    </div>
   
   
  
  )
}

export default Home