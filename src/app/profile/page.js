'use client'
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/user';
import Profile_1 from '../components/Profile_1';
import Side_nav from '../components/Side_nav';
import pf from '../styles/profile_1.module.css';
import Card_1 from '../components/Card_1';

const Page = () => {
    const [info, setInfo] = useState(null); // Initialize info as null

    const { userId } = useGlobalContext();
    const q = JSON.stringify({ username: userId });
    const [post,getPost]=useState([]);
    const [data,getData]=useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await fetch('/api/info', {
                    method: 'POST',
                    body: q,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const ans = await req.json();
                setInfo(ans.body);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userId, q]);

    useEffect(()=>{
        const get=async()=>{
          const requestBody = JSON.stringify({
            username:userId,
          });
          const req = await fetch('/api/profile', {
            method: 'POST',
            body: requestBody,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const res = await req.json();
          if (res.status === 200) {
            getPost(res.result);
            
          } else {
            console.log(res.error);
          }
    
    
        }
        get();
    
      },[])
      useEffect(()=>{
        const getD=async()=>{
          const requestBody = JSON.stringify({
            username:userId,
          });
          const req = await fetch('/api/info', {
            method: 'POST',
            body: requestBody,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const res = await req.json();
          if (res.status === 200) {
            getData(res.body);
            
          } else {
            console.log(res.error);
          }
    
    
        }
        getD();
    
      },[])
    //   console.log(post);

    return (
        <div className={pf.main}>
            <Side_nav />
            {info ? <Profile_1 na_={info.username} pi_c={info.profile} /> : <p>Loading...</p>}
            <div className={pf.posts}>
            {post ? post.map((e)=>{
                return (
                    <Card_1 img={data.profile} tweet={e.text} name={e.username} dte={e.date} pic={e.image} k={e.unique} key={e.unique}/>
                )

            }):<></>}

            </div>
            

        </div>
    );
};

export default Page;
