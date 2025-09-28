import * as zod from "zod";

export const loginSchema= zod.object({
    email:zod.string()
    .nonempty('Email is Required')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a Valid Email"),
    password:zod.string()
    .nonempty("Password is Required")
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"password must be at least 8 characters"),
})
