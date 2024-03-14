'use client'

import { Container } from "@mui/material";
import sign from '../styles/sign_1.module.css';
import Link from "next/link";
import GoogleIcon from '@mui/icons-material/Google';
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const Sign = () => {
    const [s,getsign]=useState({});

    const sign_get=(e)=>{
    getsign({
      ...s,[e.target.name]:e.target.value
    })
  }
  return (
    <>
    <Container sx={{
        marginLeft:{
            lg:'0px'
        },
        width:{
            xs:'100vw',
            lg:'60vw'

        },
        height:{
            xs:'70vh',
            lg:'100vh'
        },
        backgroundColor:'white',
        opacity:'0.8',
        borderRadius:{
            xs:'0 0 2em 2em',
            lg:'0px'
        }

    }}>
    <div className={sign.middle}>
    <h1>Sign In</h1>
    <p>Already have account?<Link href={'/login'}>Login</Link></p>
    <div className={sign.google}>
        <button>Login with Google</button>
    </div>
    <div className={sign.form}>
    <TextField id="standard-basic" label="Name" variant="outlined" sx={{
        width:{
            xs:'70vw',
            lg:'40vw'
        },
        fontSize:{
            xs:'20px'
        }
    }} required onChange={sign_get}/>
    
    
    <TextField id="standard-basic" label="Password" variant="filled" sx={{
        width:{
            xs:'70vw',
            lg:'40vw'
        },
        fontSize:{
            xs:'20px'
        }
    }} type="password" required onChange={sign_get} /></div>

    </div>


    </Container>

    </>
  )
}

export default Sign;