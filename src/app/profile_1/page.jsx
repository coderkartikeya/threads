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





const Page = () => {
  // const qul=useRouter();
  // const data=qul.query;
  const [searchParams, setSearchParams] = useSearchParams();
  const router = useRouter();
  const {username,pic,job_,follower,following} = searchParams;
  
  
  const id={
    username:username,
    pic:pic,
    job_:job_,
    follower:follower,
    following:following

  }
  // const getValues=()=>{
  //   id.username=searchParams.get('username'),
  //   id.pic=searchParams.get('pic'),
  //   id.job_=searchParams.get('job_'),
  //   id.follower=searchParams.get('follower'),
  //   id.following=searchParams.get('following')
  // }
  // getValues();
  const id_string='data:'+id;

  // const searchParams=useSearchParams();
  // console.log(searchParams);
  
  console.log(searchParams);
  
  
  
  

  

  return (<>
    <div className={pf.main}>
    <Side_nav/>
    <Profile_1 na_={username} pi_c={pic} jo_b={job_} follow={follower} follo_in={following}/>
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

export default Page