import Side_nav from "../components/side_nav";
import main from '../styles/main.module.css'
import ThreadsAPI from 'threads-api';
import { faker } from '@faker-js/faker';
import Image from "next/image";
import Card_1 from '../components/card_1';


const page = () => {
  // const [domLoaded, setDomLoaded] = useState(false);

  const data=()=>{
    return {
      text:faker.lorem.paragraph(3),
      av:faker.image.avatar(),
      username:faker.person.fullName(),
      date:faker.date.anytime(),
      ima_ge:'',

    }
  }
  const data_2=()=>{
    return{
      text:faker.lorem.paragraph(5),
      av:faker.image.avatar(),
      username:faker.person.fullName(),
      date:faker.date.anytime(),
      ima_ge:faker.image.urlLoremFlickr({category:'nature'}),

    }

  }

  const data_3=()=>{
    return{
      text:faker.lorem.paragraph(3),
      av:faker.image.avatar(),
      username:faker.person.fullName(),
      date:faker.date.anytime(),
      ima_ge:faker.image.urlLoremFlickr({category:'city'})

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
    <div className={main.bg}>
    <div className={main.side_bar}>
    <Side_nav />
    

    </div>
    <div className={main.middle}>
    <div>
    {users.map((events)=>{
      return(
        <Card_1 img={events.av} tweet={events.text} name={events.username} dte={events.date} pic={events.ima_ge} key={faker.string.uuid()}/>

      )

    })}
    
    
    
      
    </div>
    
      
    </div>
      
    </div>
    
  )
}

export default page