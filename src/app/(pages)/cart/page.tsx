'use client'
import ClearUserCart from '@/app/ApiServices/CartActions/clearUserCart.api';
import { GetLoggedUserCart } from '@/app/ApiServices/CartActions/getLoggedUserCart.api';
import RemoveProductCart from '@/app/ApiServices/CartActions/removeProductCart.api';
import UpdateProductCart from '@/app/ApiServices/CartActions/updateProductCart.api';
import { CartContext } from '@/app/Context/CartContext';
import { ICart } from '@/app/interface/cart.interface';
import Link from 'next/link';
import React, { useContext } from 'react'
import { useEffect ,useState} from 'react';
import { toast } from 'sonner';
import Image from 'next/image';

export default function Cart() {
  const {getDetails} =useContext(CartContext)
  const [cartId, setCartId] = useState<string>("")
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true)


  async function updateProduct(id:string,count:number){
    const res= await UpdateProductCart(id,count);
    if(res.status=='success'){
      getCartData();
       getDetails();
     
      toast.success("product Updated",{
        position:"top-center",
        duration:2000
      })
    }
  }

  async function removeProduct(id:string) {
    const res = await RemoveProductCart(id);
    if(res.status=='success'){
      getCartData();
      getDetails();
      toast.success("product Deleted Successfully",{
        position:"top-center",
        duration:2000
      })
    }
    
  }

  async function clearAllCart(){
    await ClearUserCart();
     getCartData();
     getDetails();
    
  }


   async function getCartData(){
    try{
    const res = await GetLoggedUserCart();
    setCartId(res.cartId);
    setIsLoading(false)
    setCartList(res.data.products)
    setTotalPrice(res.data.totalCartPrice);
    }
    catch(err:unknown){
      setIsLoading(false)
    }
  }
  useEffect(()=>{
   getCartData()
  },[])


  if(isLoading){
    return(  <div className="h-screen flex justify-center items-center">
   <span className="loader"></span>
   </div>)
  }

  return (
   <>
   
   {cartList.length >0 ? (<div className='container md:w-[95%] mx-auto my-10'>
      <div className='flex flex-wrap'>
        <div className='lg:w-3/4 md:w-full'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <ul className='flex flex-wrap  justify-between'>
                <li  className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </li>
                <li  className="px-6 py-3">
                    Product
                </li>
                <li  className="pl-10 py-3">
                    Qty
                </li>
                <li  className="pl-10 py-3">
                    Price
                </li>
                <li  className="px-6 py-3">
                    Action
                </li>
            </ul>
        </div>
        <div>
          {
            cartList.map((p:ICart)=>{
              return (
                   <ul key={p._id} className="bg-white flex flex-wrap justify-between items-center  border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <li className="p-4">
                    <Image  width={500} height={500} src={p.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                </li>
                <li className="px-6 py-4 w-[180px] font-semibold text-gray-900 dark:text-white">
                    {p.product.title}
                </li>
                <li className="px-6 py-4">
                    <div className="flex items-center">
                        <button onClick={()=>updateProduct(p.product._id,p.count-=1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={p.count? p.count.toString() : ""} required />
                        </div>
                        <button onClick={()=>updateProduct(p.product._id,p.count+=1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {p.price}
                </li>
                <li className="px-6 py-4">
                    <a onClick={()=>removeProduct(p.product._id)} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline"><i className="fa-solid fa-trash"></i>Remove</a>
                </li>
            </ul>
              )
            })
          }
           
        </div>
    </div>
</div>

        </div>

<div className='lg:w-1/4 md:w-full px-3'>
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    
    <div className="px-5 py-5 rounded-md">
      <h4 className='text-2xl font-semiBold'>Order Summary</h4>
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Price:</h5>
        </a>
        <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{totalPrice}</span>
        </div>
        <div className='w-full py-3'>
            <Link href={`/checkout/${cartId}`} className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all duration-150">Proceed to Checkout</Link>
        </div>

        <div className='  w-full mt-5'>
            <Link href="/products" className=" text-black bg-[#cccbcb] hover:bg-[#aaaaaa] focus:ring-4 focus:outline-none focus:ring-[#eae5e5] font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-[#8d8b8b] dark:text-white transition-all duration-150">Continue Shopping</Link>
        </div>
    </div>

</div>
    <button onClick={()=>clearAllCart()} className='bg-red-700 mt-10 text-white rounded-md px-5 py-3 cursor-pointer font-bold'> <i className="fa-solid fa-trash"></i> Clear All Cart</button>      


        </div>

      </div>
    </div>) 
    :(<h1 className='text-center text-3xl text-red-600 font-bold my-10'>There is No Products In Cart </h1>)}


</>
    
  )
}
