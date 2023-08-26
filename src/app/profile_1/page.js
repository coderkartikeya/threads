'use client'

import { faker } from '@faker-js/faker';
import pf from '../styles/profile_1.module.css';
import Side_nav from "../components/side_nav";
import Image from "next/image";
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {
  const searchParams = useSearchParams()
  // console.log(searchParams.get('pic'))
  


//     // codes using router.query

// }, [router.isReady]);

  

  return (
    <div className={pf.main}>
    <Side_nav/>
    <div className={pf.midd}>
    <Image src={faker.image.urlLoremFlickr({category:'nature'}) } alt='image' width={200} height={200} className={pf.upper_img} />
    <div className={pf.pro_}>
    <Image src={searchParams.get('pic')} alt='image' width={30} height={30} className={pf.pro_in}
    />

    </div>
    
    <h1>{searchParams.get('username')}</h1>

    </div>


    </div>
    
  )
}

export default page