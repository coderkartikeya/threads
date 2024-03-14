'use client'
import React from 'react'
import Side_nav from "../components/Side_nav";
import dt from '../styles/data.module.css';
import { useSearchParams } from 'next/navigation';
import Profile_1 from '../components/Profile_1';
import Card_1 from '../components/Card_1';
import { faker } from '@faker-js/faker';


const Page = () => {
    const searchParams=useSearchParams();
    const data=()=>{
        return {
          text:faker.lorem.paragraph(3),
          av:searchParams.get('pic'),
          username:searchParams.get('username'),
          date:faker.date.anytime(),
          ima_ge:'',
    
        }
      }
      const data_2=()=>{
        return{
          text:faker.lorem.paragraph(5),
          av:searchParams.get('pic'),
          username:searchParams.get('username'),
          date:faker.date.anytime(),
          ima_ge:faker.image.urlLoremFlickr({category:'nature'}),
    
        }
    
      }
    
      const data_3=()=>{
        return{
          text:faker.lorem.paragraph(3),
          av:searchParams.get('pic'),
          username:searchParams.get('username'),
          date:faker.date.anytime(),
          ima_ge:faker.image.urlLoremFlickr({category:'city'}),
          
    
        }
      }
      const users=[];
      for (let i=0;i<500;i++){
        if(i%6===0){
          users.push(data_2());
    
        }
    
        else if(i%7==0){
          users.push(data_3());
        }
    
        else {
          users.push(data());
        }
        
      }
  return (
    <div className={dt.main}>
    <Side_nav/>
    <Profile_1 na_={searchParams.get('username')} pi_c={searchParams.get('pic')} jo_b={searchParams.get('job_')} follow={searchParams.get('follower')} follo_in={searchParams.get('following')}/>
    <div className={dt.threads}>
    {users.map((events)=>{
      return(
        <Card_1 img={events.av} tweet={events.text} name={events.username} dte={events.date} pic={events.ima_ge} key={faker.string.uuid()}/>

      )

    })}


    </div>
    
    </div>


    
  )
}

export default Page