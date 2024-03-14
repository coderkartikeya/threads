'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Page from "./login/page";

const page = () => {
  // const router=useRouter();
  // useEffect(()=>{
  //   router.push('/login');

  // },[router.isReady]);
  return (
    <div>  
      <Page/>    
      
    </div>
  )
}

export default page;