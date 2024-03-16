'use client'

import { Container } from "@mui/material";
import sign from '../styles/sign_1.module.css';
import Link from "next/link";
import GoogleIcon from '@mui/icons-material/Google';
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Sign = () => {
    const [prevState,getsign]=useState({});

    const sign_get = (e) => {
        
        getsign(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
      };
  
  const sign_in = async (e) => {
    e.preventDefault();
    
    try {
        
        const requestBody = JSON.stringify({
            username: prevState.username,
            password: prevState.password
        });
        // console.log(requestBody);
        const req = await fetch('/api/sign', {
            method: 'POST',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        }); 
        

        

        if (req.status==200) {            
            alert("user successfully created");
        }else if(req.status==409){
          alert("user already exist");   
        }
        else{
            alert("fill all the fields");
        }
    } catch (error) {
        console.log(error);
    }
    
    
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
    <TextField id="standard-basic" label="Name" name="username" variant="outlined" sx={{
        width:{
            xs:'70vw',
            lg:'40vw'
        },
        fontSize:{
            xs:'20px'
        }
    }} required onChange={sign_get}/>
    
    
    <TextField id="standard-basic" label="Password" name="password" variant="filled" sx={{
        width:{
            xs:'70vw',
            lg:'40vw'
        },
        fontSize:{
            xs:'20px'
        }
    }} type="password" required onChange={sign_get} /></div>

    </div>
    <button className={sign.button} onClick={sign_in}>Submit</button>


    </Container>

    </>
  )
}

export default Sign;