'use client'
import { Form ,FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import React from 'react'
import {  useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/app/schema/registerSchema'
import Link from 'next/link'
import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { IRegister } from '@/app/interface/register.interface'
export default function Register() {
  const router=useRouter();
  const form = useForm({
    defaultValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:"",
    },
    resolver:zodResolver(registerSchema)
  });

  async function handleRegister(value:IRegister){
   try{
     const response= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',value);
     if(response.data.message=='success'){
      toast.success("Register Successfully..!",{position:'top-center',duration:4000});
      router.push('/login')
      
     }
   }catch(err :unknown){
    if(err instanceof AxiosError){
      const errorMessage= err.response?.data?.message || "Something went wrong please try again"
      toast.error(errorMessage,{position:'top-center',duration:4000})
    }else{
       toast.error("Unexpected error occured",{position:'top-center',duration:4000})

    }
   }

  }
  return (
    <div className='container mx-auto w-[50%] my-10 bg-gray-100 p-10 rounded-lg'>
      <h1 className='text-center text-3xl text-green-700 font-semibold '>Register Now.....</h1>
      <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(handleRegister)}>
        <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem className='mt-7'>
        <FormLabel>Name :</FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input placeholder='Enter Your Name ' {...field} type='text'/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="email"
    render={({field}) => (
      <FormItem className='mt-3'>
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
  <FormField
    control={form.control}
    name="password"
    render={({field}) => (
      <FormItem className='mt-3'>
        <FormLabel>Password :</FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input placeholder='Enter Your Password' {...field} type='password'/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="rePassword"
    render={({field}) => (
      <FormItem className='mt-3'>
        <FormLabel>Confirm Password :</FormLabel>
        <FormControl>
          { /* Your form field */}
          <Input placeholder='Confirm Password' {...field} type='password'/>
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
          <Input  placeholder='Enter Your Phone Number' {...field} type='tel'/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <button className='py-3 text-white bg-green-700 w-full text-center mt-5 rounded-2xl hover:bg-green-600 transition-all duration-200'>Register</button>
  <p className='text-md text-center mt-3'> Already have an account, <Link className='text-green-700' href={"/login"}>Login Now</Link></p>
      </form>
</Form>
    </div>
  )
}
