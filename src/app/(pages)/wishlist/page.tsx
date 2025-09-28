'use client'
import AddProductCart from '@/app/ApiServices/CartActions/addProductCart.api';
import { GetLoggedUserWishlist } from '@/app/ApiServices/WishlistActions/getLoggedUserWishlist.api';
import RemoveProductWishlist from '@/app/ApiServices/WishlistActions/removeProductWishlist.api';
import {CartContext} from '@/app/Context/CartContext';
import { IWishList } from '@/app/interface/wishList.interface';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner';
import Image from 'next/image';
export default function Wishlist() {
  const {getDetails} =useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true)
    const [wishList, setWishList] = useState([]);
    
    async function addProductToCart(id:string){
            const res=await AddProductCart(id);
            if(res.status=='success'){
              toast.success("Product added to Cart Successfully",{
                duration:2000,
                position:'top-center',
                
              })
              getDetails();
              removeProduct(id);
              }
    }

    async function removeProduct(id:string) {
    const res = await RemoveProductWishlist(id);
    if(res.status=='success'){
      getWishlistData();
      toast.success("product Deleted Successfully from Wish List",{
        position:"top-center",
        duration:2000
      })
    }
    
  }
   async function getWishlistData(){
       try{
       const res = await GetLoggedUserWishlist();
       setIsLoading(false)
       setWishList(res.data)
       }
       catch(err){
         setIsLoading(false)
       }
     }
     useEffect(()=>{
      getWishlistData()
     },[])



     if(isLoading){
    return(  <div className="h-screen flex justify-center items-center">
   <span className="loader"></span>
   </div>)
  }
  return (
    <>

    {wishList.length >0 ? (<div className='container md:w-[95%] mx-auto my-10'>
      <h2 className='py-5 text-3xl font-bold text-green-600'> My Wish List </h2>
      <div className='flex flex-wrap'>
        <div className='w-full'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="md:col row" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="md:col row" className="px-6 py-3">
                    Product
                </th>
                <th scope="md:col row" className="px-6 py-3">
                    Price
                </th>
                <th scope="md:col row" className="px-6 py-3">
                    Action
                </th>
                 <th scope="md:col row" className="px-6 py-3">
                   Add To Cart
                </th>
            </tr>
        </thead>
        <tbody>
          {
            wishList.map((p:IWishList)=>{
              return (
                   <tr key={p._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                    <Image width={500} height={500} src={p.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt='imageCover' />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {p.title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        
                        {p.price}
                        
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <a onClick={()=>removeProduct(p._id)} className="font-medium flex items-center text-red-600 cursor-pointer dark:text-red-500 hover:underline"><i className="fa-solid fa-trash"></i>Remove</a>

                </td>
                <td className="px-6 py-4">
                  <button  onClick={()=> addProductToCart(p._id)} className="font-medium text-green-600 dark:text-green-500 cursor-pointer hover:underline">Add To Cart</button>

                </td>
            </tr>
              )
            })
          }
           
        </tbody>
    </table>
</div>

    </div>
    </div>
    </div>
    )
    :(<h1 className='text-center text-3xl text-red-600 font-bold my-10'>There is No Products In Wish List </h1>)}

   </>


  )
}
