import { IForgetPassword } from "@/app/interface/login.interface";

export default async function forgotPassword(email:IForgetPassword){
    
    const payload={
        userEmail:email
    }
   
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        {
        method:'POST',
        body:JSON.stringify(payload),
       
        }
        
    )

    const data= await res.json();
    return data
}
