import React from 'react'
import c from '../../app/styles/comment.module.css' ;
import Link from 'next/link';

const Com_ment = (props) => {
  return (
    <div className={c.box}>
      
      <div className={c.title}>
        <h2>{props.account}</h2>
      </div>
      
      <div className={c.text}>
        <p>{props.text}</p>
      </div>        

    </div>
    
  )
}
export default Com_ment;
