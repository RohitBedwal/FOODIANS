import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BarcodeContextData } from '../context/BarcodeContext';
import { cartOpenContext } from '../context/CartContext';

const FoodCard2 = ({ products, ascName,descName,ascGrade,descGrade }) => {
    const {barcode,setBarcode} = useContext(BarcodeContextData)
    const navigate = useNavigate();
    const{setCart, addToCart} = useContext(cartOpenContext)
   


   if(ascName){
    
    products.sort((a,b)=>{
        return (a.product_name || "").localeCompare(b.product_name || "");
    })


   }
   else if(descName){
    products.sort((a,b)=>{
        return (b.product_name || "").localeCompare(a.product_name || "");
    })
   }
   else if(ascGrade){
    products.sort((a,b)=>{
        return (a.nutrition_grades || "").localeCompare(b.nutrition_grades || "");
    })

   }
   else if(descGrade){
    products.sort((a,b)=>{
        return (b.nutrition_grades || "").localeCompare(a.nutrition_grades || "");
    })

   }
   else{

   
   }
    

    return (
        <div className=''>
            <div className='w-full h-full min-h-screen  max-md:flex max-md:justify-center   '>
               
                <div  className='grid place-items-center  max-md:gap-[20px]  max-md:w-max max-md:grid-cols-2     xl:grid-cols-6 max-lg:grid-cols-3 max-xl:grid-cols-4 '>
                    
                    {products.map((elem,idx) => {
                    
                            if (elem.product_name && elem.categories && elem.image_url && elem._id && elem.nutrition_grades) {
                                return (
                                    <div  key={idx} className='relative'>
                                          <div onClick={()=>{addToCart(elem)
                                setCart(true)}} className='h-[30px] w-[30px] bg-gray-800 flex items-center justify-center absolute right-[10px] bottom-[130px] hover:bg-white transition-all duration-200 text-white hover:text-gray-700 '><i className="  ri-shopping-bag-line"></i>
                                </div>
                                        <div
                                    onClick={()=>{
                                        setBarcode(elem._id)
                                navigate('/ProductDetails')
                            }} className='flex flex-col  mb-[10px] pb-[5px]  text-start gap-y-[10px] '>
                              
                            <img className='w-[15vw] object-contain h-[19vw] max-md:w-[40vw]  max-md:h-[50vw]  max-xl:w-[250px] max-xl:h-[320px]' src={elem.image_url} alt="" />
                            <h3 className='font-[amma3]  h-[15px] w-[15vw] overflow-hidden font-extralight text-[11px] uppercase'>{elem.categories.split(' ').slice(0, 1)} </h3>
                            <h4 className='font-[amma4] w-[15vw]  h-[20px] overflow-hidden text-gray-700  text-[15px] uppercase'> {elem.product_name} </h4>
    
    
                            <h4 className=' w-[15vw] uppercase   h-[15px] overflow-hidden font-[amma3] text-[11px] '>{elem.ingredients_text}</h4>
                            <h3 className=' w-[15vw] h-[15px] font-[amma3] overflow-hidden text-[11px] uppercase'>  grade :<span className='font-[amma4]'>{elem.nutrition_grades}</span> </h3>
    
                        </div>
                                    </div>

                                 )
                       
                                }
                        
                        })}


                </div>

            </div>
       

        </div>
    )
}

export default FoodCard2


