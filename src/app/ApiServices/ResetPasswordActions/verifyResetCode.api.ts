

export default async function verifyResetCode(resetCode:string){
    
    const payload={
        code:resetCode
    }
   
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        {
        method:'POST',
        body:JSON.stringify(payload),
       
        }
        
    )

    const data= await res.json();
    return data
}
