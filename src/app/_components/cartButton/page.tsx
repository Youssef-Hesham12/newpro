'use client'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '@/app/Context/CartContext'

export default function CartButton() {
  const { dataDetails } = useContext(CartContext)

  return (
    <Link
      href="/cart"
      className="relative bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition flex items-center"
    >
      <i className="fa-solid fa-cart-shopping"></i>

      {(
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {dataDetails?.numOfCartItems}
        </span>
      )}
    </Link>
  )
}
