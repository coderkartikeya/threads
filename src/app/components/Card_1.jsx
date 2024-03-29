
'use client'
import main from '../styles/card_1.module.css'
import Image from 'next/image';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { faker } from '@faker-js/faker';
import { useRouter } from "next/navigation";




const Card_1 = (props) => {
  const { name, img,job} = props;
  
  
  const id={
    username:props.name,
    pic:props.img,
    job_:props.job
  }
  const q = {
    username: id.username,
    pic: id.pic,
    job_: id.job_,
    follower: faker.number.int(1000),
    following: faker.number.int(1000)
  };
  const q1={
    pf:props.img,
    twt:props.tweet,
    nm:props.name,
        
    pic:props.pic,
    key:props.key
  }
  
  
    
  return (
    <div className={main.outer}>
    
    
    <div className={main.top}>
        <Image src={props.img} alt='user' width={30} height={30} className={main.profile}/>
        <div>
        <Link href={{
          pathname:`/profile_1`,
          query:q
        }}  className={main.pr_o}>
          
            <strong>{name}</strong></Link>
            <Link href={{
              pathname:`/post`,
              query:q1
            }} style={{textDecoration:'none',color:"white"}} >
            <p>{props.tweet}</p>
            <div>
            {props.pic?(<Image src={props.pic} alt='image' width={300} height={300} className={main.post} />):(<></>)}
            
            </div>
            </Link>
            
        </div>
    </div>
    <div className={main.like}>
                <button><FavoriteIcon /></button>
                


            </div>
   
    
    
      
    </div>
  )
}

export default Card_1;