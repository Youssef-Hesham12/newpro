

'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Icategory } from '@/app/interface/category-interface'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

interface CategorySliderProps {
  dataList: Icategory[]
}

export default function CategorySlider({ dataList }: CategorySliderProps) {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="my-5 text-green-600 font-semibold text-4xl">
        Shop Popular Category...
      </h2>

      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
      >
        {dataList?.map((category: Icategory) => (
          <SwiperSlide key={category._id}>
            <div>
              <Image
                width={1000}
                height={1000}
                src={category.image}
                alt={category.name}
                className="h-[200px] w-full object-cover"
              />
              <h3 className="text-center font-bold my-3">
                {category.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
