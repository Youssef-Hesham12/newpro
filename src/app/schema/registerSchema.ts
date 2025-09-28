import * as zod from "zod";

export const registerSchema= zod.object({
    name:zod.string()
    .nonempty("Name is Required")
    .min(3,'Min length is 3 characters')
    .max(15,'max length is 15 characters'),
    email:zod.string()
    .nonempty('Email is Required')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a Valid Email"),
    password:zod.string()
    .nonempty("Password is Required")
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"password must be at least 8 characters"),
    rePassword:zod.string()
    .nonempty("Confirm Password is Required"),
    phone:zod.string()
    .nonempty('phone is required')
    .regex(/^(?:\+20|0)?1[0125]\d{8}$/,"enter a valid phone number"),
    
})
.refine((object)=> object.password === object.rePassword,{
    path:['rePassword'],
    error:"Password and Confirm Password must be Matched"
})