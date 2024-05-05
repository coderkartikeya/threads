'use client'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/user';
import Side_nav from '../components/Side_nav'
import ad from '../styles/add.module.css'
import { useRouter } from 'next/navigation';


const Page = () => {
  const [post,getPost]=useState("");
  const { userId } = useGlobalContext();
  const router=useRouter();
  const get=(e)=>{
    getPost(e.target.value);
  }
  function generateKey() {
    // Generate a random string of characters
    const randomString = Math.random().toString(36).substring(2, 10);
    
    // Get the current timestamp
    const timestamp = Date.now().toString(36);
  
    // Concatenate the random string and timestamp to create a unique key
    const key = randomString + timestamp;
  
    return key;
  }
  const send=async()=>{
    const requestBody = JSON.stringify({
      text:post,
      username:userId,
      key:generateKey()
    });
    const req = await fetch('/api/post', {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await req.json();
    if (res.status === 200) {
      router.push('/main')
    } else {
      console.log(res.error);
    }
  }
  const print=()=>{
    send();
  }
  return (
    <div className={ad.main}>
      <Side_nav />
      <div className={ad.middle}>
        <div className={ad.box}>
          <input type='text' className={ad.input} placeholder='write beautiful post here.....' onChange={get} value={post}/>
          <div className={ad.bt}>
            <button className={ad.button} onClick={print}>Post</button>
            <button className={ad.button}>Discard</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Page
