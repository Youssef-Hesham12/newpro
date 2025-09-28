'use client'
import { Form ,FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import React from 'react'
import {  useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import {loginSchema} from '@/app/schema/loginSchema'
import Link from 'next/link'
import {signIn} from "next-auth/react"
import { ILogin } from '@/app/interface/login.interface'


export default function Login() {
      const form = useForm<ILogin>({
        defaultValues:{
        email:"",
        password:"",
        },
        resolver:zodResolver(loginSchema)
      });
    
      async function handleLogin(value:ILogin){
        signIn("credentials",{
          email:value?.email,
          password:value?.password,
          redirect:true,
          callbackUrl:"/home"
        })
      //  try{
      //    let response= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',value);
      //    if(response.data.message=='success'){
      //     toast.success("Login Successfully..!",{position:'top-center',duration:4000});
      //     router.push('/home')
          
      //    }
      //  }catch(err :any){
      //   toast.error(err.response.data.message,{position:'top-center',duration:4000})
      //  }
    
      }
      return (
        <div className='container mx-auto w-[50%] my-10 bg-gray-100 p-10 rounded-lg'>
          <h1 className='text-center text-3xl text-green-700 font-semibold '>Login Now</h1>
          <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(handleLogin)}>
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
      
      <button type='submit' className='py-3 text-white bg-green-700 w-full text-center mt-5 rounded-2xl hover:bg-green-600 transition-all duration-200'>Login</button>
      <p className='text-md text-center mt-3'> Don&apos;t have an account?, <Link className='text-green-700' href={"/register"}>Register Now</Link></p>
          </form>
    </Form>

    <Link href={'/forgetPassword'} className='text-lg my-7 hover:text-green-600 '>Forget Your Password?</Link>
        </div>
  )
}
