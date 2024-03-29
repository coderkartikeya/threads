'use client'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/user';
import Profile_1 from '../components/Profile_1';
import Side_nav from '../components/Side_nav';
import pf from '../styles/profile_1.module.css';


const Page = () => {
    const [info ,getInfo]=useState();
    const{userId}=useGlobalContext();

    

    const q=JSON.stringify({
        username:userId
    })

    useEffect(()=>{
        const data=async()=>{
            const req = await fetch('/api/info', {
                method: 'POST',
                body: q,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const ans=await req.json();
            console.log(ans);
            getInfo(ans.body);

        }
        data();
    },[userId,q]
    )

    


    

    

  return (
    <div className={pf.main}>
        <Side_nav/>
        <Profile_1 na_={info.username} pi_c={info.profile}  />
    </div>
  )
}

export default Page