

export default async function getCategoryDetails(id:string){
    const response= await fetch (`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
    const {data}= await response.json();
    return data
}