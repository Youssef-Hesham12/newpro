import AllCategory from '@/app/_components/allCategory/page'
import MainSlider from '@/app/_components/mainSlider/page'
import React from 'react'
import Products from '../products/page'

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <AllCategory/>
      <Products/>
    </div>
  )
}
