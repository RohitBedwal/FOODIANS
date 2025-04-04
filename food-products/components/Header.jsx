import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Header() {
    useGSAP(()=>{
        
    },[])
  return (
    <div  className='h-[30px] fixed z-30 bg-[#2b2b34] flex justify-center items-center w-full font-[amma3] uppercase text-white'>
        <h3 id='og' className='text-[10px]'> Elevating the ordinary to extraordinary through food </h3>
    </div>
  )
}

export default Header