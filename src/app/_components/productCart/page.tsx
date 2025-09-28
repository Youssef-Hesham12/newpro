"use server"
import { ProductType } from '@/app/interface/product-interface'
import Link from 'next/link'
import React from 'react'
import AddBtn from '../addBtn/page'
import WishlistIcon from '../wishlistIcon/page'
import Image from 'next/image'
export default async function ProductDetails({data}:{data:ProductType}) {
  return (
    <div className='rounded-2xl md:h-[570px] group overflow-hidden p-4 border border-gray-300 hover:border-green-400'>
            <Link href={`/products/${data._id}`}>
            <div>
              <Image src={data.imageCover} width={500} height={500} alt="image of product" />
              <h2 className='text-green-600 my-4 '>{data.title.split(" ").slice(0,4).join(" ")}</h2>
              <h3 className='text-xl font-medium'>{data.category.name}</h3>
            </div>
            <div className='flex items-center py-3 justify-between'>
              <span>{data.price} EGP</span>
              <div className='flex items-center'>
                <span>{data.ratingsAverage}</span>
                <i className='fas fa-star text-amber-400'></i>
              </div>
            </div>
            </Link>
            <WishlistIcon id={data._id}/>
            <AddBtn id={data._id}/>

          </div>
          
    
  )
}
