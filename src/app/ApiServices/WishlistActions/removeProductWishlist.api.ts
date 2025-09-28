"use server"
import getToken from "@/utilities/getToken";


export default async function RemoveProductWishlist(id:string){
    const token = await getToken();
   if(typeof token ==='string' && token.trim() !==""){
         const headers:{
            token:string;
            "content-type":string;
        }={
            token:token,
            "content-type":"application/json"
        }
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        {
        method:'DELETE',
        headers: headers
       
        }

    )

    const data= await res.json();
    return data
}
}