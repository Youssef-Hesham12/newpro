import * as zod from "zod";

export const forgetPasswordSchema= zod.object({
    email:zod.string()
    .nonempty('Email is Required')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a Valid Email"),
})
