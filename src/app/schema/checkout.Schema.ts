import * as zod from "zod";

export const checkoutSchema= zod.object({
    details:zod.string()
    .nonempty('details is Required'),

    phone:zod.string()
    .nonempty("phone is Required")
    .regex(/^(?:\+20|0)?1[0125]\d{8}$/,"enter a valid phone number"),

    city:zod.string()
    .nonempty("City is required")
})
