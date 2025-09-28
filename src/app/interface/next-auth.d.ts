// /*eslint-disabled*/

// declare module "next-auth" {
//   interface User{
//     user:{
//          name:string,
//          email:string,
//         role:string,
//     },
    
//     token:string
   

//   }
  

//   declare module "next-auth/jwt" {
//   interface JWT extends User {
//     /** OpenID ID Token */
//     idToken?: string
//   }
// }
// }


// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: string
    }
    token?: string
  }

  interface User extends DefaultUser {
    role?: string
    token?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: {
      id: string
      name: string
      email: string
      role: string
    }
    token?: string
  }
}
