'use server'
import { ICheckout } from "@/app/interface/checkout.interface";
import getToken from "@/utilities/getToken";

export async function onlinePayment(formValues:ICheckout,cartId:string){
    const token = await getToken();
    
   if(typeof token ==='string' && token.trim() !==""){
         const headers:{
            token:string;
            "content-type":string;
        }={
            token:token,
            "content-type":"application/json"
        }
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXT_URL}`,
        {
        method:'POST',
        headers: headers,
        body:JSON.stringify({shippingAddress:formValues})
       
        }
        

    )
 

    const data= await res.json();
    return data
}
}