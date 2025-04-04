import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { cartOpenContext } from '../context/CartContext'





const Cart = () => {
  
  const{cart,setCart,cartItems ,clearCart, addToCart, removeFromCart} = useContext(cartOpenContext)
  const openSiderBarRef = useRef(null);
  const blackbox = useRef(null);
  const[items,setItems]=useState([]);


  useEffect(()=>{
    const savedCart = JSON.parse(localStorage.getItem("cartItems"))
    setItems(savedCart)

  },[])
  

  


  useGSAP(() => {



      if (cart) {
          gsap.to(openSiderBarRef.current, {
              right: 0,
              opacity: 1,
              duration: .55,


          })
          gsap.to(blackbox.current, {
              x: "0%",
              duration: .001
          })

      }
      else {
          gsap.to(openSiderBarRef.current, {
              right:-500,
              duration: .55,
              



          })
          gsap.to(blackbox.current, {
              x: "-100%",
              duration: .001
          })



      }





  }, [cart])





  return (
    <>
      <div ref={blackbox} onClick={()=>{setCart(false)}}  className='bg-black opacity-30 w-full h-screen -x-[100%] z-40 fixed'>
      </div>
      <div  className='w-full  flex flex-col items-end'>
        
        <div  ref={openSiderBarRef}  className='bg-white h-full w-[400px]   justify-end opacity-0  fixed z-50 '>


          <div
            className='flex justify-between  px-[32px] py-[16px] items-center border-b-[.1px] border-gray-500 capitalize   '>
            <div className='flex justify-between w-full h-[40px] items-center'>
              <h2 className=' font-[amma3] text-gray-700 tracking-[5px] uppercase text-[18px] '>cart</h2>

              <h3 onClick={()=>{setCart(false)}} className='font-[amma3] text-[13px]  '><i className=" text-[15px]  text-gray-500 ri-close-large-fill "></i></h3>

            </div>
          </div>
          <div className=' px-[32px] pb-15 w-full  h-full overflow-scroll '>
          {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => {
            
              return(
                <div key={item._id} className='py-[32px]     '>
                <div className=' h-[150px] flex gap-x-[20px]  bg-white w-full'>
                <img className='h-[150px] w-[120px] object-contain ' src={item.image_url} alt="" />
                <div className='flex-col flex gap-[10px] uppercase justify-center'>
                  <div className='gap-[5px] flex flex-col'>
                  <h4 className='font-[amma3] b-[5px] text-[10px]  '>{ item.brands}</h4>
                  <h3 className='font-[amma3] tracking-[4px] text-[15px]'>{item.product_name}</h3>
                  <h5 className='font-[amma3] text-[10px]'>{item.quantity}</h5>
                  </div>
                  <div className='flex gap-x-[15px]  items-center'>
                  <div className=' flex border-[.1px] border-gray-500 w-max  '>
            <i onClick={() => removeFromCart(item._id)}  className=" text-[13px]  py-[7px] px-[15px] ri-subtract-line"></i>
            <p className=' py-[7px] text-[13px] px-[15px]'>{item.count}</p>
            <i    onClick={() => addToCart(item)} className=" py-[7px] px-[15px] text-[13px] ri-add-line"></i>
          </div>
          <button   onClick={()=>{clearCart(item._id)}} className='text-[13px] capitalize border-b-[1px]'>remove</button>
                  </div>
                  

                </div>
              </div>
              </div>
               )
               
              
})}
             </>
      ) : (
        <div className='w-full flex items-center justify-center h-[400px]'>
          <p className='p-[30px] text-[20px] text-gray-600 font-[amma4] text-center uppercase tracking-[4px] '>Your cart is empty.</p>
        </div>
      )}

            

          

          </div>
          <div
            className='flex justify-between  px-[32px] py-[16px] items-center border-b-[.1px] border-gray-500 capitalize   '>
            <div className='flex justify-between w-full h-[40px] items-center'>
              <h2 className=' font-[amma3] text-gray-700 tracking-[5px] uppercase text-[18px] '>cart</h2>

              <h3 onClick={()=>{setCart(false)}} className='font-[amma3] text-[13px]  '><i className=" text-[15px]  text-gray-500 ri-close-large-fill "></i></h3>

            </div>
          </div>






        </div>

      </div>

    </>
  )
}

export default Cart