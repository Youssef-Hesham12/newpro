

export async function getAllUsers(){
    const res= await fetch(`https://ecommerce.routemisr.com/api/v1/users`)
    const data = await res.json();
    return data
}