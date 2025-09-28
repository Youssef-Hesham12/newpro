"use client"
import AddProductCart from '@/app/ApiServices/CartActions/addProductCart.api'
import { CartContext } from '@/app/Context/CartContext';
import React, { useContext } from 'react'
import { toast } from 'sonner';

export default function AddBtn({id}:{id:string}) {
 const {getDetails}= useContext(CartContext);
  async function addProductToCart(){
        const res=await AddProductCart(id);
        if(res.status=='success'){
          toast.success("Product added to Cart Successfully",{
            duration:2000,
            position:'top-center',
            
          })
          getDetails();
          }
          
        
    }
  return (
    <div>
    <button
    onClick={()=> addProductToCart()}
     className='btn
             translate-y-[300%]
             group-hover:translate-y-[0%]
             transition-all
             duration-300 cursor-pointer mb-10'>Add To Cart</button>

    </div>
  )
}
