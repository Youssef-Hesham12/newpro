"use server"
import getToken from "@/utilities/getToken";


export default async function AddProductCart(id:string){
    const token = await getToken();
    const payload={
        productId:id
    }
   
    if(typeof token ==='string' && token.trim() !==""){
        const headers:{
            token:string;
            "content-type":string;
        }={
            token:token,
            "content-type":"application/json"
        }
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
        method:'POST',
        body:JSON.stringify(payload),

        headers: headers
       
        }
        

    )

    const data= await res.json();
    return data
}
}