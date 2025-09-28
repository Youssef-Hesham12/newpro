import getToken from "@/utilities/getToken";

export default async function updateLoggedUserData(name:string,email:string,phone:string){
    const token= await getToken();
    if(typeof token ==='string' && token.trim() !==""){
    const headers:{
            token:string;
            "content-type":string;
        }={
            token:token,
            "content-type":"application/json"
        }
    const payload={
        name:name,
        email:email,
        phone:phone
    }
   
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
        {
        method:'PUT',
        body:JSON.stringify(payload),
        headers:headers
        }
    )

    const data= await res.json();
    return data
}
}