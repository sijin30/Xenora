import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductsItem from '../components/ProductsItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [FilterProducts,setFilterProducts]=useState([])
  const [category,setCategory]=useState();

  
  useEffect(()=>{

    setFilterProducts(products)

  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Section */}
      <div className='max-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTER {showFilter ? '▲' : '▼'}
        </p>

        {/* CATEGORY FILTER */}
        <div className={`border border-gray-200 pl-5 py-3 mt-4 px-4 ${!showFilter ? 'hidden' : ''}`}>
          <p className='mb-2 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex items-center gap-2'>
              <input className='w-3' type='checkbox' value='Men' />
              Men
            </label>
            <label className='flex items-center gap-2'>
              <input className='w-3' type='checkbox' value='Women' />
              Women
            </label>
            <label className='flex items-center gap-2'>
              <input className='w-3' type='checkbox' value='Kids' />
              Kids
            </label>
          </div>
        </div>
      </div>

      {/* Right content*/}
      <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTIONS'}/>
        <select>
         <option value="relavant">sort by relavant</option>
           <option value="relavant">sort by relavant</option>
           <option value="relavant">sort by relavant</option>
        </select>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {FilterProducts.map((item,index) => (
          <ProductsItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      </div>



    </div>
  );
};

export default Collection;
