import { faker } from '@faker-js/faker';
import pf from '../styles/profile_1.module.css';
import Side_nav from "./Side_nav";
import Image from "next/image";
// import { useSearchParams } from 'react-router-dom';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const Profile_1 = (props) => {
    
  return (
    <div className={pf.midd}>
    <Image src={faker.image.urlLoremFlickr({category:'nature'}) } alt='image' width={200} height={200} className={pf.upper_img} />
    <div className={pf.pro_}>
    <Image src={props.pi_c} alt='image' width={30} height={30} className={pf.pro_in}
    />

    </div>
    <div className={pf.info}>
    <h1>{props.na_}</h1>
    <p>{props.jo_b}</p>
    <div className={pf.info_in}>
    <p>{props.follow} followers</p>
    <p>{props.follo_in} following</p>

    </div>
    
    </div>
    
    

    </div>

  )
}

export default Profile_1