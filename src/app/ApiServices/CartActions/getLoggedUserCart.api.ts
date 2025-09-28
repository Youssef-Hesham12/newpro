"use server"
import getToken from "@/utilities/getToken"


export async function GetLoggedUserCart(){
    const token = await getToken();
    if(typeof token ==='string' && token.trim() !==""){
     const headers:{
            token:string;
            "content-type":string;
        }={
            token:token,
            "content-type":"application/json"
        }
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
        method:'GET',
        headers:headers
    })
    const data= await res.json();
    return data
}
}