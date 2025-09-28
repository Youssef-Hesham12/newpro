'use client'
import React from 'react'
import img1 from'../../../../public/images/slider-image-1.jpeg'
import img2 from'../../../../public/images/slider-image-2.jpeg'
import img3 from'../../../../public/images/slider-image-3.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

import Image from 'next/image'
export default function MainSlider() {
  return (
    <div className=' mx-auto flex flex-wrap'>
        <div className='w-full'>
        <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{delay:2000}}
    >
      <SwiperSlide><Image src={img1} alt='img1' className='h-[500px] w-full'/></SwiperSlide>
      <SwiperSlide><Image src={img2} alt='img2' className='h-[500px] w-full'/></SwiperSlide>
      <SwiperSlide><Image src={img3} alt='img3' className='h-[500px] w-full'/></SwiperSlide>
    </Swiper>
        </div>
        {/* <div className='w-1/4'>
        <Image src={img4} alt='img4' className='h-[200px]'/>
        <Image src={img5} alt='img5'className='h-[200px]'/>
        </div> */}

    </div>
  )
}
