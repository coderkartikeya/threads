'use client'
import React, { useState } from 'react'
import Side_nav from '../components/Side_nav'
import ad from '../styles/add.module.css'


const Page = () => {
  const[file,getFile]=useState({name:''});
  return (
    <div className={ad.main}>
      <Side_nav />
      <div className={ad.middle}>
        <div>
          <input type='file'/>
          <button>submit</button>
        </div>
      </div>
    </div>
  )
}

export default Page
