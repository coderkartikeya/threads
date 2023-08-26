import main from '../styles/card_1.module.css'
import Image from 'next/image';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from "next/navigation";


const Card_1 = (props) => {
  const id={
    username:props.name,
    pic:props.img,
  }
    
  return (
    <div className={main.outer}>
    
    <div className={main.top}>
        <Image src={props.img} alt='user' width={30} height={30} className={main.profile}/>
        <div>
        <Link href={{
          pathname:'/profile_1',
          query:{
            username:props.name,
            pic:props.img
          }
        }} className={main.pr_o}>
            <strong>{props.name}</strong></Link>
            <Link href={'/about'} className={main.link}><p>{props.tweet}</p></Link>
            <div className={props.img_1}>
            {props.pic?(<Image src={props.pic} alt='image' width={300} height={300} className={main.post} />):(<></>)}
            

            </div>
            
        </div>
    </div>
    <div className={main.like}>
                <button><FavoriteIcon /></button>
                


            </div>
   
    
    
    
    </div>
  )
}

export default Card_1;