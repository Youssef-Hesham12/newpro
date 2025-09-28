import getProductDetails from '@/app/ApiServices/productDetails.api';
import React from 'react'
import WishlistIcon from '@/app/_components/wishlistIcon/page';
import AddBtn from '@/app/_components/addBtn/page';
import Image from 'next/image';
export default async function ProductDetails({params}:{params:{id:string}}) {
    const {id}= params;
    const data=await getProductDetails(id);
    
  return (
    <div className='flex flex-wrap justify-center items-center w-[90%] mx-auto my-10'>
        <div className='w-1/4'>
            <Image src={data.imageCover} width={500} height={500} alt="imageCover" />
        </div>
        <div className='w-3/4 px-5'>
           <h3 className='font-medium'>{data.title}</h3>
           <h3 className='text-gray-500 my-3'>{data.description}</h3>
           <h4 className='my-2'>{data.category.name}</h4>
           <div className='flex justify-between'>
             <span>{data.price} EGP</span>
             <div className='flex items-center'>
                <span>{data.ratingsAverage}</span>
                <i className='fas fa-star text-amber-400'></i>
              </div>
           </div>
            <WishlistIcon id={data._id}/>
            <AddBtn id={data._id}/>
        </div>
    </div>
  )
}
