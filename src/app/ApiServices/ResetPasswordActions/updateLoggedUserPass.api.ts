import getToken from "@/utilities/getToken";


export default async function updateLoggedUserPass(currentPassword:string,password:string,rePassword:string){
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
        currentPassword:currentPassword,
        password:password,
        rePassword:rePassword
    }
   
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
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