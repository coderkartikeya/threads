'use client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import Card_1 from '../components/Card_1'
import { useState } from 'react';
import pd from '../styles/post.module.css' ;

const Page = () => {
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
    <div className={pd.main}>
      <div>
      <Card_1 img={q.pf} tweet={q.twt} name={q.nm}  pic={q.pic}key={q.key}/>
      </div>
      <div className={pd.post}>
        <input type="text" className={pd.text} placeholder='Post here...' />
        <button className={pd.button}>post</button>
      </div>
        



    </div>
  )
}

export default Page