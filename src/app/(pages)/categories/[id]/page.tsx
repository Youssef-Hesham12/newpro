import getCategoryDetails from '@/app/ApiServices/categoriesActions/categoryDetails.api';
import { Icategory } from '@/app/interface/category-interface';
import React from 'react'

export default async function CategoryDetails({params}:{params:{id:string}}) {
    const {id}= params;
    const data=await getCategoryDetails(id);
  return (
    <div className='flex flex-wrap justify-center items-center w-[90%] mx-auto my-10'>
             
              {data.length>0?
                data.map((subCategory:Icategory)=>{
                    return(
                    <div  key={subCategory._id} className='shadow-md mx-2 my-2 rounded-lg border-1 border-gray-300 hover:shadow-green-700 transition-all duration-200'>
                  <h3 className='text-center my-3 px-3 font-blod text-green-700 text-2xl'>{subCategory.name}</h3>
                  </div>
                 )
                })
                :
                <h3 className='text-center text-red-700 text-bold text-2xl'>There is No SubCategories for this category</h3>
              }
              
    </div>
    
    
  )
}
