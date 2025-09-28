
import { getAllCategories } from '@/app/ApiServices/categoriesActions/categories.api'
import { Icategory } from '@/app/interface/category-interface';
import React from 'react'
import CategoryDetails from '@/app/_components/categoryDetails/page';

export const dynamic = "force-dynamic"
export default async function Categories() {
      const categoriesList = await getAllCategories();
       if (!categoriesList) {
    return (
      <div className="p-6 text-red-600">
        Failed to load categories. Please try again later.
      </div>
    )
  }

  return (
    <div className='w-[90%] mx-auto mt-5'>
      <div className='grid md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 gap-5'>
      {
        categoriesList.map((category : Icategory)=>{
          return(
            
             <CategoryDetails  key={category._id} data={category}></CategoryDetails>
          )

           
        })
      }
      </div>
     
    </div>
  )
}
