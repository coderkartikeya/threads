'use client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import Card_1 from '../components/Card_1'
import { useState } from 'react';

const page = () => {
    const searchParams= useSearchParams();
    // const[data ,setData]=useState();
    const q={
        pf:searchParams.get("pf"),
        twt:searchParams.get("twt"),
        nm:searchParams.get("nm"),
            
        pic:searchParams.get("pic"),
        key:searchParams.get("key")
      }
    
    
  
    console.log(q);

  return (
    <div>
        <Card_1 img={q.pf} tweet={q.twt} name={q.nm}  pic={q.pic}key={q.key}/>

    </div>
  )
}

export default page