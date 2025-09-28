'use client'
import { Form ,FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import React from 'react'
import {  useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutSchema } from '@/app/schema/checkout.Schema'
import { onlinePayment } from '@/app/ApiServices/Payment/checkout.api'
import { useParams } from 'next/navigation'
import { ICheckout } from '@/app/interface/checkout.interface'


export default function Checkout() {
      const {id}:{id:string}= useParams();
      const form = useForm({
        defaultValues:{
        details:"",
        phone:"",
        city:""
        },
        resolver:zodResolver(checkoutSchema)
      });
    
      async function handlePayment(value:ICheckout){
      const data= await onlinePayment(value,id);
      if(data.status=='success'){
        window.location.href=data.session.url
      }
        }
      
      return (
        <div className='container mx-auto w-[50%] my-10 bg-gray-100 p-10 rounded-lg'>
          <h1 className='text-center text-3xl text-green-700 font-semibold '>Pay Now</h1>
          <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(handlePayment)}>
      <FormField
        control={form.control}
        name="details"
        render={({field}) => (
          <FormItem className='mt-3'>
            <FormLabel>Details :</FormLabel>
            <FormControl>
              { /* Your form field */}
              <Input placeholder='Enter Your Details' {...field} type='text'/>
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({field}) => (
          <FormItem className='mt-3'>
            <FormLabel>Phone :</FormLabel>
            <FormControl>
              { /* Your form field */}
              <Input placeholder='Enter Your Phone Number' {...field} type='tel'/>
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({field}) => (
          <FormItem className='mt-3'>
            <FormLabel>City :</FormLabel>
            <FormControl>
              { /* Your form field */}
              <Input placeholder='Enter Your City' {...field} type='text'/>
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      
      <button className='py-3 text-white bg-green-700 w-full text-center mt-5 rounded-2xl hover:bg-green-600 transition-all duration-200'>Confirm Order</button>
          </form>
    </Form>
        </div>
  )
}

