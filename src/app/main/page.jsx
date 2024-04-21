
'use client'
import Side_nav from "../components/Side_nav";
import main from '../styles/main.module.css'

import { faker } from '@faker-js/faker';
import Image from "next/image";
import Card_1 from '../components/Card_1';
import { useEffect, useState } from "react";
import Link from "next/link";
import { useGlobalContext } from "../context/user";


const Page = () => {

  const{userId}=useGlobalContext();
  function generateKey() {
    // Generate a random string of characters
    const randomString = Math.random().toString(36).substring(2, 10);
    
    // Get the current timestamp
    const timestamp = Date.now().toString(36);
  
    // Concatenate the random string and timestamp to create a unique key
    const key = randomString + timestamp;
  
    return key;
  }
  
  
  
  

  // const data = () => {
  //   return {
  //     text: faker.lorem.paragraph(3),
  //     av: faker.image.avatar(),
  //     username: faker.person.fullName(),
  //     date: faker.date.anytime(),
  //     ima_ge: '',
  //     key:generateKey(),
  //     likes:faker.number.int(1000),
  //     comments:0

  //   }
  // };

  // const data_2 = () => {
  //   return {
  //     text: faker.lorem.paragraph(5),
  //     av: faker.image.avatar(),
  //     username: faker.person.fullName(),
  //     date: faker.date.anytime(),
  //     ima_ge: faker.image.urlLoremFlickr({ category: 'nature' }),
  //     key:generateKey(),
  //     likes:faker.number.int(1000),
  //     comments:0
  //   };
  // };

  // const data_3 = () => {
  //   return {
  //     text: faker.lorem.paragraph(3),
  //     av: faker.image.avatar(),
  //     username: faker.person.fullName(),
  //     date: faker.date.anytime(),
  //     ima_ge: faker.image.urlLoremFlickr({ category: 'city' }),
  //     key:generateKey(),
  //     likes:faker.number.int(1000),
  //     comments:0
  //   };
  // };

  // const users = [];
  // for (let i = 0; i < 100; i++) {
  //   if (i % 6 === 0) {
  //     users.push(data_2());
  //   } else if (i % 7 == 0) {
  //     users.push(data_3());
  //   } else {
  //     users.push(data());
  //   }
  // }
  const [data,setData]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const requestBody=JSON.stringify({
        //   data:users
        // })
        

        const res = await fetch('/api/post');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const newData = await res.json();
        // console.log(newData.result); // Log the fetched data
        setData(newData.result);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

  

  
  return (
    <div className={main.bg}>
    <div className={main.side_bar}>
    <Side_nav />
    

    </div>
    <div className={main.middle}>
    <div>
    {data.map((events)=>{
      
      return(
        
        <Card_1 img={events.profile} tweet={events.text} name={events.username} dte={events.date} pic={events.image} k={events.unique} key={events.unique}/>
        
      )

    })}
    
    
    
      
    </div>
    
      
    </div>
      
    </div>
    
  )
}

export default Page