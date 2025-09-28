'use client'
import React from 'react'
import { Form ,FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import {  useForm } from 'react-hook-form'


import img1 from'../../../../public/images/paypal.png'
import img2 from'../../../../public/images/mastercard.webp'
import img3 from'../../../../public/images/amazon-pay.png'
import img4 from'../../../../public/images/American-Express-Color.png'
import img5 from '../../../../public/images/get-apple-store.png'
import img6 from '../../../../public/images/get-google-play.png'

import Image from 'next/image'

export default function Footer() {
    const form =useForm({
        defaultValues:{
        email:""
        }
    });
  return (
    <div className='w-full bg-gray-100 mt-10 pb-10'>
        <div className='w-[90%] mx-auto'>
            <h5 className='text-2xl pt-10 '>Get The FreshCart App</h5>
            <p className='text-gray-400 text-sm py-3'>We Will Send you a link open it on your phone to download the app.</p>
            <div>
                <Form {...form}>
                <form action="" className='flex'>
                <FormField
        control={form.control}
        name="email"
        render={({field}) => (
          <FormItem className='mt-3 w-3/4'>
            <FormLabel>Email :</FormLabel>
            <FormControl>
              { /* Your form field */}
              <Input placeholder='Enter Your E-mail' {...field} type='email'/>
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      <button className='px-3 w-[200px] h-[50px] mt-5 mx-4 bg-green-700 hover:bg-green-900 text-white rounded-lg' >Share app Link</button>
      </form>
      </Form>
            </div>

            <div className='flex flex-wrap justify-between mt-5 border-t-1 border-b-1 py-5'>
                <div className='flex items-center flex-wrap'>
                    <p className='text-xl'>Payment Partners</p>
                    <Image src={img1} alt='paypal' className='h-[20px] w-[50px] mr-2 ml-5'/>
                    <Image src={img2} alt='mastercard' className='h-[20px] w-[50px] mx-2'/>
                    <Image src={img3} alt='amazonpay' className='h-[20px] w-[50px] mx-2'/>
                    <Image src={img4} alt='amerrican express' className='h-[20px] w-[50px] mx-2'/>
                </div>
                <div className='flex items-center flex-wrap'>
                    <p>Get Deliviries with FreshCart</p>
                    <Image src={img5} alt='paypal' className='h-[20px] w-[70px] mr-2 ml-5'/>
                    <Image src={img6} alt='mastercard' className='h-[20px] w-[70px] mx-2'/>
                </div>

            </div>
        </div>
        
    </div>
  )
}
