
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import CartButton from '../cartButton/page'

export default function Navbar() {
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  function logout() {
    signOut({ callbackUrl: '/login' })
  }

  return (
    <nav className="bg-white sticky top-0 z-50 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="logo text-3xl font-bold">
          <i className="fa-solid fa-cart-shopping text-green-600"></i> Fresh Cart
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium mt-4 md:mt-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 rounded-lg md:rounded-none">
            {session && (
              <>
                <li><Link href="/home" className="nav-link">Home</Link></li>
                <li><Link href="/products" className="nav-link">Products</Link></li>
                <li><Link href="/categories" className="nav-link">Categories</Link></li>
                <li><Link href="/brands" className="nav-link">Brands</Link></li>
                <li><Link href="/wishlist" className="nav-link">Wish List</Link></li>
                <li>
                  <CartButton />
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right section */}
        {status === 'loading' ? null : session ? (
          <div className="flex gap-5 items-center">
            <button onClick={logout} className="text-red-600">Logout</button>
            <h3 className="text-green-700">Hi {session?.user?.name}</h3>
          </div>
        ) : (
          <div className="flex gap-5 items-center">
            <ul className="flex items-center gap-2 text-gray-600">
              <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
            <Link href="/login" className="text-green-600">Login</Link>
            <Link href="/register" className="text-gray-600">Register</Link>
          </div>
        )}
      </div>
    </nav>
  )
}


