import React from 'react'
import getAllProducts from '@/app/ApiServices/products.api'
import { ProductType } from '@/app/interface/product-interface';
import ProductDetails from '@/app/_components/productCart/page';
export default async function Products() {
   const dataList = await getAllProducts();
  return (
    <div className='w-[90%] mx-auto my-10'>
      <h2 className='my-5 text-green-600 font-semibold text-4xl '>Shop Popular Products......</h2>
      <div className='grid md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 xs:grid-cols-1 gap-4'>
    {
    dataList.map((data : ProductType)=>{
      return <ProductDetails  data={data} key={data._id}></ProductDetails>
    })
    }
    </div>
    </div>
  )
}
