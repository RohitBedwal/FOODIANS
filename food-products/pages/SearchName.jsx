import React, { useContext, useEffect, useState } from 'react'
import { ContextApi } from '../context/InputContext';
import axios from 'axios';
import SortingBox from '../components/SortingBox';
import NavBar2 from '../components/NavBar2';
import FoodCard2 from '../components/FoodCard2';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Pagination from '../components/Pagination'
import { BarcodeContextData } from '../context/BarcodeContext';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';



const SearchName = () => {
   const {barcode,setBarcode} = useContext(BarcodeContextData);
   const navigate=useNavigate();


  
  const [products, setProducts] = useState([])
  const { input, setInput } = useContext(ContextApi);
  const [searchName, setSearchName] = useState(false);

  const [ascName, setAscName] = useState(false);
  const [descName, setDescName] = useState(false);
  const [ascGrade, setAscGrade] = useState(false);
  const [descGrade, setDescGrade] = useState(false);


  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);


  async function searchByName() {

    try {
      const res1 = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v0/product/${input}.json`);
      
      if(res1.data.product){
        setBarcode(input);
       
        navigate('/ProductDetails')

       
      }

      
      else{
        const res = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?&json=true `, {
          params: { search_terms: input ,page:page }
        })
        
        setProducts(res.data.products)
        setTotalPage(Math.floor(res.data.count/50))
        setSearchName(false);
  
      }
    }
    catch (err) {
      console.log(err)

    }

  }

  useEffect(() => {

    searchByName()
  }, [searchName,page])


  return (

    <div className=' bg-white'>
      <Header />
      <NavBar2 setSearchName={setSearchName} />
      <Cart/>
      <SideBar />
      <div className='h-[100px] w-full'></div>
      <SortingBox setAscName={setAscName} setDescName={setDescName} setAscGrade={setAscGrade} setDescGrade={setDescGrade} />
      <FoodCard2 ascName={ascName} descName={descName} ascGrade={ascGrade} descGrade={descGrade} products={products} />
      <Pagination  totalPages={totalPages} currentPage={page} onPageChange={setPage}/>
    </div>
  )

}

export default SearchName