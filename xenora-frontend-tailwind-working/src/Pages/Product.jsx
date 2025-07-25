import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets, products } from '../assets/assets'

const Product = () => {
  const {currency,addToCart}=useContext(ShopContext)

  const { productId } = useParams()
  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState()
  const [size,setSize]=useState()

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId)
    if (product) {
      setProductData(product)
      setImage(product.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Image Selector Section */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>

          {/* Main Image Display */}
          <div className='flex-1'>
            <img src={image} className='w-full h-auto mb-4' alt='Selected' />
          </div>
        </div>

        {/* Add more product details here if needed */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2 '>{productData.name}
            </h1>
            <div className='flex items-center gap-1 mt-2'>
                <img className='w-3 5' src={assets.star_icon}></img>
                <img className='w-3 5' src={assets.star_icon}></img>
                <img className='w-3 5' src={assets.star_icon}></img>
                <img className='w-3 5' src={assets.star_icon}></img>
                <img className='w-3 5' src={assets.star_dull_icon}></img>
                 <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
             <p className='mt-5  text-gray-500 md:w-4/5'>{productData.description}</p>
             <div className='flex flex-col gap-4 my-8'>
                <p>Select Size </p>
                <div className='flex gap-2'>
                {
                    productData.sizes.map((item,index)=>(
                        <button
                        onClick={() => setSize(item)}
                         className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                        key={index}
                         >
                         {item}
                        </button>

                    ))
                }
                </div>
             </div>
            
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>


        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product
