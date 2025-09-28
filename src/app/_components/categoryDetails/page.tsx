import { Icategory } from "@/app/interface/category-interface"
import Link from "next/link"
import Image from "next/image"

export default async function CategoryDetails({data}:{data:Icategory}) {
  return (
    <div className='shadow-md rounded-lg border-1 border-gray-300 hover:shadow-green-700 transition-all duration-200'>
            <Link href={`/categories/${data._id}`}>
            <div key={data._id} className='shadow-md rounded-lg border-1 border-gray-300 hover:shadow-green-700 transition-all duration-200'>
              <Image src={data.image} width={500} height={500} className='h-[300px] w-full  aspect-auto' alt="" />
              <h3 className='text-center my-3 font-blod text-green-700 text-2xl'>{data.name}</h3>
            </div>
            </Link>
          </div>
          
    
  )
}
