import { getUserOrders } from '@/app/ApiServices/allorders.api'
import { verifyToken } from '@/app/ApiServices/verifyToken.api'
import { IOrders } from '@/app/interface/orders.interface';
import React from 'react'
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth"
import { redirect } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

export default async function Allorders() {
   const session = await getServerSession(authOptions)

   if (!session) {
    redirect("/login")
  }
  let decoded:{id:string}|null=null
  if(session.token){
    decoded=jwtDecode<{id:string}>(session.token)
  }
  const verifiedUser= await verifyToken();
   const userId= verifiedUser.decoded.id;
   const orders= await getUserOrders(userId);
  return (
   
      <div className='container md:w-[95%] mx-auto my-10'>
        <h2 className='text-center text-green-600 text-3xl font-bold mb-5'>All Orders</h2>
      <div className='flex flex-wrap'> 
        <div className='w-full'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    User
                </th>
                <th scope="col" className="px-6 py-3">
                    Payment Method
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Price
                </th>
            </tr>
        </thead>
        <tbody>
           {
            orders.map((order:IOrders)=>{
                return(
                  
                    <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                    <p>{order.user.name}</p>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <p className=' text-lg'>{order.paymentMethodType}</p>
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <i className="fa-solid fa-check text-green-600 text-2xl"></i>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {order.totalOrderPrice}
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
}
