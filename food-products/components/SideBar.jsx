import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { sideBarContext } from '../context/CategoryContext'
import axios from 'axios'
import { urlContext } from '../context/ProductsByCategoryContext'
import { useNavigate } from 'react-router-dom'
import Pagination from './Pagination'

const SideBar = () => {
    const {url,setUrl} = useContext(urlContext)
    const navigate = useNavigate();
    const { open, setOpen } = useContext(sideBarContext)
   
    const [categories,setCategories]= useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPage] = useState(0);
    
    const openSiderBarRef = useRef(null);
    const blackbox = useRef(null);
    useGSAP(() => {



        if (open) {
            gsap.to(openSiderBarRef.current, {
                left: 0,
                opacity: 1,
                duration: .35,


            })
            gsap.to(blackbox.current, {
                x: "0%",
                duration: .001
            })

        }
        else {
            gsap.to(openSiderBarRef.current, {
                left: -400,
                duration: .35,
                opacity: 0



            })
            gsap.to(blackbox.current, {
                x: "-100%",
                duration: .001
            })



        }





    }, [open])


    async function  allCategories(){
        const res =await axios.get(`https://world.openfoodfacts.org/facets/categories.json/`,{
            params: { page:page }
          });
        setCategories(res.data.tags)
        setTotalPage(Math.floor((res.data.count/100)+1))
        
        
    }
    useEffect(()=>{
        allCategories()
    },[page])
    return (
        
        <>
            <div ref={blackbox} onClick={() => { setOpen(false) }} className='bg-black opacity-30 w-full h-screen -x-[100%] z-40 fixed'>
            </div>
            <div ref={openSiderBarRef} className='bg-white h-full w-[400px] opacity-0 overflow-scroll  fixed z-50  '>
                <button className='m-[20px]' onClick={() => { setOpen(false) }}><i className="text-[20px] cursor-pointer  ri-close-large-fill"></i></button>
                <div className='flex justify-between px-[20px]'>
                <h2 className='font-[amma4] pb-[10px]  uppercase text-[20px]'>Categories</h2>
                
                
                </div>
                {categories.map((elem,idx)=>{
                   
                    return(
                        <div key={idx} onClick={()=>{
                            setUrl(elem.url);
                            setOpen(false) 
                            navigate('/category/products')
                        }
                        } className='flex justify-between py-[15px] items-center   capitalize  mx-[20px] border-gray-400 border-b-[.1px]'>
                            <h2 className=' font-[amma3] text-gray-700   uppercase text-[14px] '>{elem.name}  <span className='pl-[5px]'> ({elem.products})</span></h2>
                            
                            <h3 className='font-[amma3] text-[13px] '><i className="text-[20px] ri-arrow-right-s-line"></i></h3>
                        </div>
                    )

                })}
                <div className='bg-white w-full h-[50px] flex justify-between font-[amma3]  items-center px-[20px]'>
               
                </div>
                <Pagination  totalPages={totalPages} currentPage={page} onPageChange={setPage}/>

                
                
                
               

            </div>
            
        </>
    )
}

export default SideBar

