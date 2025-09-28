
import Home from "./(pages)/home/page";
import getToken from "@/utilities/getToken";
import Login from "./(pages)/login/page";


export default async function LandingPage() {
  const token=await getToken()
   if(token){
    return <Home/>
   }
   else{
    return <Login/>
   }
}
