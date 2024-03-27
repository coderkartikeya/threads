
'use client'
import Side_nav from "../components/Side_nav";
import main from '../styles/main.module.css'

import { faker } from '@faker-js/faker';
import Image from "next/image";
import Card_1 from '../components/Card_1';
import { useEffect, useState } from "react";
import Link from "next/link";


const Page = () => {
  

  // const data = () => {
  //   return {
  //     text: faker.lorem.paragraph(3),
  //     av: faker.image.avatar(),
  //     username: faker.person.fullName(),
  //     date: faker.date.anytime(),
  //     ima_ge: '',
  //   };
  // };

  // const data_2 = () => {
  //   return {
  //     text: faker.lorem.paragraph(5),
  //     av: faker.image.avatar(),
  //     username: faker.person.fullName(),
  //     date: faker.date.anytime(),
  //     ima_ge: faker.image.urlLoremFlickr({ category: 'nature' }),
  //   };
  // };

  // const data_3 = () => {
  //   return {
  //     text: faker.lorem.paragraph(3),
  //     av: faker.image.avatar(),
  //     username: faker.person.fullName(),
  //     date: faker.date.anytime(),
  //     ima_ge: faker.image.urlLoremFlickr({ category: 'city' }),
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
        const res = await fetch('/api/post');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const newData = await res.json();
        // console.log(newData); // Log the fetched data
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
      const q={
        pf:events.profile,
        twt:events.text,
        nm:events.username,
            
        pic:events.image,
        key:faker.string.uuid()
      }
      return(
        <Link href={{
          pathname:'/post',
          query:q
        }} style={{textDecoration:"none"}} key={faker.string.uuid()} >
        <Card_1 img={events.profile} tweet={events.text} name={events.username} dte={events.date} pic={events.image} key={faker.string.uuid()}/>
        </Link>
      )

    })}
    
    
    
      
    </div>
    
      
    </div>
      
    </div>
    
  )
}

export default Page