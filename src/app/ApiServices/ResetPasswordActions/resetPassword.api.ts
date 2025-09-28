

export default async function resetPassword(email:string,newPassword:string){
    
   
    const payload={
        email:email,
        newPassword:newPassword
    }
   
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
        {
        method:'PUT',
        body:JSON.stringify(payload),
       
        }
        
    )

    const data= await res.json();
    return data
}