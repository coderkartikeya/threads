'use client'
import { faker } from '@faker-js/faker';
import pf from '../styles/profile_1.module.css';
import Side_nav from "../components/Side_nav";
import Image from "next/image";
// import { useSearchParams } from 'react-router-dom';
import Link from 'next/link';

import { useRouter } from 'next/navigation'
// import { useParams } from 'next/navigation';
import Profile_1 from '../components/Profile_1';
import { useSearchParams } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import { useGlobalContext } from '../context/user';





export default function Page() {
  // const qul=useRouter();
  // const data=qul.query;
  const searchParams=useSearchParams();
  const { userId } = useGlobalContext();
  // const router = useRouter();
  
  // console.log(searchParams)

  // searchParams={
  //   username:searchParams?.get("username"),
  //   pic:searchParams.pic

  // }
  const [post,getPost]=useState({});

  
  
  const id={
    username:searchParams.get('username'),
    pic:searchParams.get('pic'),
    job_:searchParams.get('job_'),
    follower:searchParams.get('follower'),
    following:searchParams.get('following')

  }
  
  
  
  

  

  return (<>
    <div className={pf.main}>
    <Side_nav/>
    <Profile_1 na_={id.username} pi_c={id.pic} jo_b={id.job_} follow={id.follower} follo_in={id.following}/>
    <div className={pf.buttons}>
    <Link href={{
      pathname:'/data',
      query:id,
    }} className={pf.button_link}>
      Threads
    </Link>

    <Link href={{
      pathname:'/data',
      query:id,
    }} className={pf.button_link}>Replies</Link>
    </div>
    
    
    


    </div></>
    
  )
}

// export default Page