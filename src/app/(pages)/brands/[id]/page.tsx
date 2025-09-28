
import getBrandDetails from '@/app/ApiServices/BrandsActions/brandDetails.api';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
export default async function BrandsDetails({params}:{params:{id:string}}) {
    const {id}= params;    
    const data=await getBrandDetails(id);

  return (
    <div className='flex flex-wrap justify-center items-center w-[90%] mx-auto my-10'>
             
               { 
                    <div key={data._id} className='modal bg-gray-200 py-5 w-full text-end '>
                <div className='bg-white w-[70%] my-10 py-10 mx-auto'>
                  <Link href={'/brands'} className='text-end mr-5'><i className="fa-solid fa-xmark text-2xl cursor-pointer text-gray-400"></i></Link>

                  <div className='flex flex-wrap justify-between items-center px-20 border-t-2 border-b-2'>
                    <div className='p-10'>
                      <h3 className='text-green-500 font-bold text-3xl'>{data.name}</h3>
                      <h4 className='text-sm text-start mt-2'>{data.slug}</h4>
                    </div>
                    <div>
                      <Image src={data.image} width={300} height={500} alt="brand Img" />
                    </div>
                  </div>
                 <Link href={'/brands'}> <button className='py-3 cursor-pointer px-7 mt-5 me-5  bg-gray-400 hover:bg-gray-600 rounded-lg'>Close</button></Link>


                </div>

                </div>
                
              }
              
    </div>
    
    
  )
}
