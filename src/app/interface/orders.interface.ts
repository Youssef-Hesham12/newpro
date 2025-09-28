import { ICheckout } from "./checkout.interface"
import { ProductType } from "./product-interface"

export interface IOrders {
    cartItems:cartItems,
    createdAt:string,
    id:number,
    isDelivered:boolean,
    isPaid:boolean,
    paidAt:string,
    paymentMethodType:string,
    shippingAddress: ICheckout,
    shippingPrice:number,
    taxPrice:number,
    totalOrderPrice: number,
   updatedAt: string,
   user:user


}

export interface cartItems{
    count:number,
    price:number,
    product:ProductType,
    _id:string
}



export interface user{
    email: string ,
   name: string,  
   phone: string,
  _id: string 
}
