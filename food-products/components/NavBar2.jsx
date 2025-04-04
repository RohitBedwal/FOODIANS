import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useRef, useState } from 'react'
import { ContextApi } from '../context/InputContext';
import { Link, useNavigate } from 'react-router-dom';
import { sideBarContext } from '../context/CategoryContext';
import { cartOpenContext } from '../context/CartContext';

const NavBar2 = ({setSearchName}) => {
    const {input,setInput} = useContext(ContextApi)
    const {open,setOpen} = useContext(sideBarContext)
    const{setCart} = useContext(cartOpenContext)
    const blackbox = useRef(null); 
    const navigate = useNavigate();
    
    function submitHandler(e){
        e.preventDefault(); 
        navigate('/search');
        setSearchName(true)
        setSearchBar(false); 
    }


    const CloseRef = useRef(null);
    const[searchBar,setSearchBar] = useState(false)
    useGSAP(() => {
       
            if(searchBar){
                gsap.to(CloseRef.current, {
                    transform:"translateY(100%)",
                     duration:.3,
                     opacity:100
                 }
                 )
                 gsap.to(blackbox.current,{
                    y:"0%",
                    duration:.001,
                    
                })
            }
           else{
                gsap.to(CloseRef.current, {
                    transform:"translateY(0%)",
                    duration:.3,
                    opacity:0
                 }
                 )
                
                 gsap.to(blackbox.current,{
                    y:"-100%",
                    duration:.001,
                    
                })
        

            }


    }, [searchBar])
    



  return (
    <div>
        
        <div ref={CloseRef} className='flex  justify-between h-[70px] border-b-[0.1px] fixed w-full mt-[30px] bg-white z-30  border-gray-700 items-center px-[40px]'>
            <div className='gap-x-[25px] flex'  ><i  onClick={()=>{setOpen(true)}} className="ri-menu-fill cursor-pointer text-[20px] "></i>
            <Link to="/" className=''><i className="text-[20px] ri-home-4-line cursor-pointer"></i></Link>
            </div>
          
            <div className='font-[amma4] text-gray-800 text-[21px] tracking-widest  uppercase'> foodians</div>
            <div className='flex gap-x-[20px]'> 
            <i onClick={()=>{!searchBar?setSearchBar(true):setSearchBar(false)}} className=" text-[20px] cursor-pointer ri-search-line"></i>
            <i className=" text-[20px] ri-user-3-line cursor-pointer"></i>
            <i onClick={()=>{setCart(true)}} className=" text-[20px] ri-shopping-cart-line cursor-pointer"></i>
            </div>
            
        </div>
        <div  ref={blackbox} onClick={()=>{setSearchBar(false)}}  className='bg-black opacity-30 w-full h-screen top-[100px] y-[100%] z-10 fixed'></div>
       
       
            <div ref={CloseRef}  className=' flex items-center opacity-0 gap-x-[5px] h-[70px] fixed w-full mt-[30px] top-0 translate-y-full z-10   bg-white  px-[40px] '>
            <i className=" text-[20px] ri-search-line"></i>
           <form className=' w-[100%] text-center px-[5px]' action="" onSubmit={(e)=>{submitHandler(e)}}>
            <input onChange={(e)=>setInput(e.target.value)} value={input} className='focus:outline-none w-[100%] h-[40px] uppercase  font-[amma5]' type="text" placeholder='Search For..' />
           </form>
           <button onClick={()=>{setSearchBar(false)}}><i  className="text-[17px] cursor-pointer ri-close-large-fill"></i></button>
        
           <div>
           </div>
        </div>
    </div>
  )
}

export default NavBar2

