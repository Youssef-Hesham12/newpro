
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request:NextRequest){
    const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;
    if(token){
        return NextResponse.next();
    }else{
        return NextResponse.redirect(new URL('login',request.url))
    }

}

export const config={
    matcher:['/cart','/home','/products','/categories','/brands','/allorders','/wishlist']
}