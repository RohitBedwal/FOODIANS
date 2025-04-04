import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import NavBar2 from '../components/NavBar2';
import SideBar from '../components/SideBar';
import SortingBox from '../components/SortingBox';
import FoodCard2 from '../components/FoodCard2';
import { sideBarContext } from '../context/CategoryContext';
import axios from 'axios'
import { urlContext } from '../context/ProductsByCategoryContext';
import Pagination from '../components/Pagination'
import Cart from './Cart';


const ProductByCategory = () => {
    const {url,setUrl} = useContext(urlContext)
   
    
      const [products, setProducts] = useState([]);
      
    
      const[ascName,setAscName]= useState(false);
        const[descName,setDescName]= useState(false);
        const[ascGrade,setAscGrade]= useState(false);
        const[descGrade,setDescGrade]= useState(false);
        const[defaultValue,setDefaultValue]= useState(false);

        const [page, setPage] = useState(1);
        const [totalPages, setTotalPage] = useState(0);
        
        
      
        async function handleAllProducts(){
            try{
            const res = await axios.get(`${url}.json`,{
              params:{page}
            })
                setProducts(res.data.products)
                setTotalPage(Math.floor(res.data.count/50))

        }
        
              catch(err){
                console.log(err)
                
              }
            }
       useEffect(() => {
         handleAllProducts()
        
         
       }, [url,page])
    


  return (
    <div  className='bg-white '>
    <Header/>
    <NavBar2/>
    <Cart/>
    <SideBar />
  <div className=' h-[33vw] overflow-hidden '>
    <img className=' rotate-180' src="../src/assets/images/Home.jpg" alt="" />
    

  </div>
  <SortingBox setAscName={setAscName} setDescName={setDescName} setDefaultValue={defaultValue} setAscGrade={setAscGrade} setDescGrade={setDescGrade}  />
  <FoodCard2 ascName={ascName} descName={descName} ascGrade={ascGrade}  descGrade={descGrade} products={products}/>
  <Pagination  totalPages={totalPages} currentPage={page} onPageChange={setPage}/>
  </div>
 
  

  )
}

export default ProductByCategory