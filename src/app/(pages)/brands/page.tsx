
import BrandModal from '@/app/_components/brandModal/page';
import getBrandDetails from '@/app/ApiServices/BrandsActions/brandDetails.api';
import { getAllBrands } from '@/app/ApiServices/BrandsActions/brands.api'
import { IBrands } from '@/app/interface/brands.interface';
import React from 'react'

export const dynamic = "force-dynamic"
export default async function Brands({id}:{id:string}) {
  
  const brandsList= await getAllBrands();
  await getBrandDetails(id);
  
  if (!brandsList) {
    return (
      <div className="p-6 text-red-600">
        Failed to load brands. Please try again later.
      </div>
    )
  }
  return (
    <div className='w-[90%] mx-auto mt-5'>
      <h2 className='text-center text-2xl font-bold my-5 text-green-600'>All Brands</h2>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-5'>
          {
            brandsList.map((brand : IBrands)=>{
              return(
                <BrandModal  key={brand._id} data={brand}></BrandModal>
              )
            })
          }
          </div>

          

    </div>
  )
}
