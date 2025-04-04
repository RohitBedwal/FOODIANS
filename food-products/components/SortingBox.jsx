import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const SortingBox = ({setAscName,setAscGrade,setDescName,setDescGrade}) => {
  


  const [sortbox,setSortBox] = useState(false);
  const box = useRef(null)
  useGSAP(() => {
       
   
       if(sortbox){
        gsap.to(box.current, {
           x:0, 
          duration:.3,
         opacity:1,
         display:"block",
         
         
      }
      )
       
    }
    else{
      gsap.to(box.current, {
        x:195,
        
        duration:.3,
        display:"none",
       opacity:0})

    }



}, [sortbox])





  return (
    <div className='h-[100px] relative  '>
                <div   className='flex justify-between h-[60px] border-b-[0.1px] w-full  bg-white  border-gray-400 items-center pl-[40px]'>
            
            <div className='font-[amma4] text-gray-700  pr-[40px] border-r-[.1px] border-gray-400 h-full items-center flex text-[21px]   tracking-widest  uppercase'>all  products</div>
           
            <div onClick={()=>{sortbox?setSortBox(false):setSortBox(true)}}  className=' h-full cursor-pointer px-[40px] border-l-[.1px] border-gray-400  flex items-center   '>
                <p  className='font-[amma3] text-gray-500 pr-[10px] uppercase text-[11px]'> sort by</p>
                
           
            
        </div>
                </div>
                <div  ref={box} className='w-[180px] opacity-0 border-[.1px] bg-white z-20 border-gray-400 right-0 top-[60px] absolute  h-max overflow-hidden'>
                    <h3 onClick={()=>{setAscName(true)
                    setSortBox(false)
                    setAscGrade(false)
                    setDescGrade(false)
                    setDescName(false)
                    }} className='pl-[20px] hover:text-black transition-all duration-300 cursor-pointer pt-[20px] font-[amma3] text-[15px] capitalize  text-gray-500'>alphabetically ,A - Z </h3>
                    <h3 onClick={()=>{setAscName(false)
                    setAscGrade(false)
                    setDescGrade(false)
                    setDescName(true)
                    setSortBox(false)

                    }} className='pl-[20px] hover:text-black transition-all duration-300  cursor-pointer pt-[20px] font-[amma3] text-[15px] capitalize  text-gray-500'>alphabetically ,z - a </h3>
                    <h3 onClick={()=>{setAscName(false)
                    setAscGrade(true)
                    setDescGrade(false)
                    setDescName(false)
                    setSortBox(false)

                    }} className='pl-[20px] hover:text-black transition-all duration-300 pt-[20px] cursor-pointer font-[amma3] text-[15px] capitalize   text-gray-500'> Grade ,high to low</h3>
                    <h3 onClick={()=>{setAscName(false)
                    setAscGrade(false)
                    setDescGrade(true)
                    setDescName(false)
                    setSortBox(false)

                    }} className='pl-[20px] hover:text-black transition-all duration-300 cursor-pointer py-[20px] font-[amma3] text-[15px] capitalize  text-gray-500'> Grade ,low to high</h3>
                </div>
                </div>
  )
}

export default SortingBox