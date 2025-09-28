'use client'
import React from 'react'
import { Form ,FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgetPasswordSchema } from '@/app/schema/forgetPassswordSchema';
import forgotPassword from '@/app/ApiServices/ResetPasswordActions/forgotPassword.api';
import {IForgetPassword} from '@/app/interface/login.interface';
import { toast } from 'sonner';


export default function ForgetPassword() {
    const form = useForm({
            defaultValues:{
            email:"",
            },
            resolver:zodResolver(forgetPasswordSchema)
          });
        
  async function handleForgetPass(value: IForgetPassword) {
  try {
    const res = await forgotPassword(value);

    if (res?.status === "success") {
      toast.success("Reset link sent to email", {
        position: "top-center",
        duration: 2000,
      });
    } else {
      toast.error(res?.message || "Something went wrong", {
        position: "top-center",
        duration: 2000,
      });
    }
  } catch (error) {
    toast.error("An error occurred while processing your request.", {
      position: "top-center",
      duration: 2000,
    });
    console.error("Forgot password error:", error);
  }
}

  return (
    <>
         <div className='container mx-auto w-[50%] my-10 bg-gray-100 p-10 rounded-lg'>
          <h1 className='text-center text-3xl text-green-700 font-semibold '>Please Enter Your Email</h1>
          <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(handleForgetPass)}>
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

    <button className='py-3 text-white bg-green-700 w-full text-center mt-5 rounded-2xl hover:bg-green-600 transition-all duration-200'>Send Code Now</button>

      </form>
      </Form>
      </div>
    </>
  )
}
