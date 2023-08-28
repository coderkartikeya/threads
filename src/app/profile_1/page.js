'use client'
import { faker } from '@faker-js/faker';
import pf from '../styles/profile_1.module.css';
import Side_nav from "../components/side_nav";
import Image from "next/image";
// import { useSearchParams } from 'react-router-dom';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Profile_1 from '../components/profile_1';

const page = () => {
  // const qul=useRouter();
  // const data=qul.query;
  const searchParams=useSearchParams();
  const id={
    username:searchParams.get('username'),
    pic:searchParams.get('pic'),
    job_:searchParams.get('job_'),
    follower:searchParams.get('follower'),
    following:searchParams.get('following'),



  }
  const id_string='data:'+id;
  
  
  

  

  return (<>
    <div className={pf.main}>
    <Side_nav/>
    <Profile_1 na_={searchParams.get('username')} pi_c={searchParams.get('pic')} jo_b={searchParams.get('job_')} follow={searchParams.get('follower')} follo_in={searchParams.get('following')}/>
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

export default page