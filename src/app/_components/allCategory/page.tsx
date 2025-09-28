import { getAllCategories } from '@/app/ApiServices/categoriesActions/categories.api'
import React from 'react'
import CategorySlider from '../categorySlider/page';

export default async function AllCategory() {
    const data = await getAllCategories();
  return (
    <div>
        <CategorySlider dataList={data}/>
    </div>
  )
}
