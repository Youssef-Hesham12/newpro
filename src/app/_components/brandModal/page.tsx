import { IBrands } from "@/app/interface/brands.interface";
import Link from "next/link";
import Image from "next/image";
export default async function BrandModal({data}:{data:IBrands}) {
  return (
    <div className='shadow-md rounded-lg border-1 border-gray-300 hover:shadow-green-700 transition-all duration-200'>
            <Link href={`/brands/${data._id}`}>
             <div key={data._id} className='shadow-md rounded-lg border-1 border-gray-300 hover:shadow-green-700 transition-all duration-200'>
            <Image src={data.image} width={500} height={500} className='h-[250px] w-full  aspect-auto' alt="" />
             <h3 className='text-center my-3  text-2xl'>{data.name}</h3>
              </div>
            </Link>
          </div>
          
    
  )
}