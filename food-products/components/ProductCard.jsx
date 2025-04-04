import React, { useContext, useEffect, useState } from 'react'
import { cartOpenContext } from '../context/CartContext';

const ProductCard = ({ product }) => {

 
  const [nutrients, setNutrients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {  setCart,cartItems, addToCart, removeFromCart } = useContext(cartOpenContext)


  const itemInCart = cartItems.find((item) => item._id === product._id);
  const itemCount = itemInCart ? itemInCart.count : 0;




  useEffect(() => {
    const fetchNutrients = async () => {
      try {
       
        if (product && product.nutriments) {
          const nutriments = product.nutriments;
          const formattedNutrients = Object.keys(nutriments)
            .filter((key) => key.endsWith("_unit") || key.endsWith("_value"))
            .reduce((acc, key) => {
              const baseKey = key.replace(/_(unit|value)$/, "");
              if (!acc[baseKey]) acc[baseKey] = { name: baseKey };
              if (key.endsWith("_unit")) acc[baseKey].unit = nutriments[key];
              if (key.endsWith("_value")) acc[baseKey].value = nutriments[key];
              return acc;
            }, {});

          setNutrients(Object.values(formattedNutrients));
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNutrients();
  }, [product]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div className='w-full h-full font-[amma3] max-md:px-[20px]  flex  justify-center pb-[50px] pt-[150px]  px-[50px]'>


      <div className='h-full  w-full max-w-[1500px]  max-md:flex-col max-md:justify-normal  max-md:items-center flex justify-center ' >

        <div className='w-1/2 max-md:w-full flex  items-start justify-center  '>
          <img src={product.image_url}
            className='h-[480px] object-contain w-[400px] px-[20px] md:fixed  ' alt="" />
        </div>
        <div className='bg-white-100  max-md:w-full  w-1/2 h-full flex px-[20px] gap-y-[10px]   flex-col'>
          <p className=' text-[12px] font-[amma3] text-gray-500 uppercase  '>{product.brands}</p>

          <h3 className='text-[30px] text-gray-700 tracking-[5px] font-[amma3]    uppercase'>{product.product_name}</h3>

          <p className='text-gray-600 font-[amma3] text-[12px] border-b-[0.1px] pb-[10px] border-gray-400 '>{product.quantity}</p>



          <div className=' flex border-[.1px] border-gray-500 w-max my-[5px] '>
            <i  onClick={() => removeFromCart(product._id)}
          disabled={itemCount === 0}
         className="  py-[10px] px-[20px] ri-subtract-line"></i>
            <p className=' py-[10px] px-[20px]'>{itemCount}</p>
            <i onClick={()=>addToCart(product)}
              className=" py-[10px] px-[20px] ri-add-line"></i>
          </div>
          <button onClick={() => {
            setCart(true)
            addToCart(product)
            

          }} className='w-full text-center border-[.1px] p-[10px] border-gray-500 font-[amma3] text-[15px] tracking-[5px] text-gray-600 uppercase'> Add to cart</button>
          <button className='w-full text-center border-[.1px] p-[10px] border-gray-500 font-[amma3]  text-[15px] tracking-[5px] bg-[#303030] text-white uppercase'> buy it now</button>
          <div>
            <div className='items-center pt-[20px] mt-[20px] text-gray-500 flex border-t-[.1px] border-gray-500 '>
              <i className=" text-[20px]    ri-information-line "></i>
              <h3 className='uppercase     text-[13px] text-gray-500 tracking-[1px] px-[10px]'>categories</h3>

            </div>
            <p className='p-[5px] pb-[20px] text-gray-700 text-[15px] border-b-[.1px] border-gray-400 '>{product.categories}</p>
          </div>
          <div>
            <div className='items-center pt-[20px]  text-gray-500 flex '>
              <i className=" text-[20px] rotate-180   ri-eject-line "></i>
              <h3 className='uppercase     text-[13px] text-gray-500 tracking-[1px] px-[10px]'>Ingredients</h3>

            </div>
            <p className='p-[5px] pb-[20px] text-gray-700 capitalize text-[15px] border-b-[.1px] border-gray-400 '>{product.ingredients_text}</p>
          </div>
          <div className='uppercase flex'>
            <div className='w-full'>
              <p className='text-[13px] font-[amma4] text-gray-700 '>barcode</p>
              <p className='text-gray-600 font-[amma3] text-[12px] border-b-[0.1px] pb-[10px] border-gray-400 '>{product._id}</p>
              
            </div>

          </div>
          

          <div className="p-4 ">
      </div>
      <h2 className="uppercase     text-[13px] text-gray-500 tracking-[1px] px-[10px]">Nutrient Information</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="text-white bg-[#303030] border border-gray-300   uppercase">
            <th className="text-[13px] border border-gray-300 font-[amma5]  px-4 py-2">Nutrient</th>
            <th className="border text-[13px]  font-[amma5] border-gray-300 px-4 py-2">Unit</th>
            <th className="border text-[13px]  font-[amma5] border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {nutrients.map((nutrient, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border text-gray-700 capitalize text-[15px]  border-gray-300 px-4 py-2">{nutrient.name}</td>
              <td className="border text-gray-700 capitalize text-[15px] border-gray-300 px-4 py-2">{nutrient.value || "-"}</td>
              <td className="border text-gray-700 capitalize text-[15px] border-gray-300 px-4 py-2">{nutrient.unit || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>


          






    </div>
  )
}

export default ProductCard