
'use client'
import { createContext,useState,useEffect } from "react";
import { GetLoggedUserCart } from "../ApiServices/CartActions/getLoggedUserCart.api";
import { CartResponse } from "../interface/cart2";


export const CartContext =createContext<{
    dataDetails: CartResponse|null,
    setDataDetails:(value: CartResponse|null)=> void,
    getDetails:()=> void

}>({dataDetails: null,
    setDataDetails:()=> {},
    getDetails:()=> {}}
);

export default function CartContextProvider({children}:{children:React.ReactNode}){
    const [dataDetails, setDataDetails] = useState<CartResponse|null> (null);

    async function getDetails(){
        const res = await  GetLoggedUserCart()
        setDataDetails(res);
    }

    useEffect(()=>{
         getDetails()
    },[])

    return <CartContext.Provider value={{dataDetails, setDataDetails,getDetails}}>
        {children}
        </CartContext.Provider>
    
}