'use client';
import { Container } from "@mui/material";
import  first from'src/app/styles/login.module.css';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


const Page = () => {
  const [info,getInfo]=useState({});
  const{push}=useRouter();

  const log_get=(e)=>{
    getInfo({
      ...info,[e.target.name]:e.target.value
    })

  }
  
  const log_in=()=>{
    push('/main');
    // if(info.username===''&& info.password===''){
    //   push('/main');
    // }
    // else{
    //   alert('password or username doesnot match')
    // }
  }

  const sign_in=()=>{
    push('/sign')

  }

  return (<>
  <div className={first.main}>
  <h1>Threads</h1>
  <Container sx={{
    backgroundColor:'black',
    color:'white',
    opacity:"0.6",
    width:{
      xs:'70vw',
      lg:"50vw"
    },
    height:{
      xs:'40vh',
      lg:'50vh'
    },
    borderRadius:'2em',
    fontSize:{
      lg:'25px'
    },
    boxShadow:'2px 3px 8px white',
    

    
  }}>
  <div className={first.login_heading}>
  <h1>Login</h1>

  </div>
  <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'10px'
  }}>
    <AccountCircle sx={{
      fontSize:{
        xs:'40px',
        lg:'65px',
      }
    }}/><input type="text" className={first.input} placeholder="Username" name="username" onChange={log_get}/>
  </div>
 

  <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'10px',
    margin:'10px'
  }}>
  <KeyIcon sx={{
      fontSize:{
        xs:'40px',
        lg:'65px',
      }
    }}/><input type="password" className={first.input} placeholder="Password" name="password" onChange={log_get}/>

  </div>

  <div className={first.lower_buttons}>

  <button className={first.button1} onClick={log_in}>Login</button>
  <button className={first.button1} onClick={sign_in}>SignIn</button>

  </div>
  
  

  </Container>

  </div>

  </>

    
  )
}

export default Page;