'use client'
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Card_1 from '../components/Card_1';
import { useState } from 'react';
import pd from '../styles/post.module.css';
import { useGlobalContext } from '../context/user';
import Com_ment from '../components/Com_ment';

const Page = () => {
  const u = useGlobalContext();
  const searchParams = useSearchParams();
  const q = {
    pf: searchParams.get('pf'),
    twt: searchParams.get('twt'),
    nm: searchParams.get('nm'),
    pic: searchParams.get('pic'),
    key: searchParams.get('key'),
  };
  const [data, setData] = useState({ user: u.userId, text: '' });
  const [comment, setcomment] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchComments = async () => {
    const requestBody = JSON.stringify({
      key: q.key,
    });
    const req = await fetch('/api/comment', {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await req.json();
    if (res.status === 200) {
      setcomment(res.body);
    } else {
      console.log(res.error);
    }
  };
  
  

  useEffect(() => {
    fetchComments();
    
  },[]);

  const getData = (e) => {
    setData({
      user: u.userId,
      text: e.target.value,
    });
  };
  const sendData = async () => {
    try {
      const requestBody = JSON.stringify({
        username: data.user,
        text: data.text,
        key: q.key,
      });
      const req = await fetch('/api/comment', {
        method: 'PUT',
        body: requestBody,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchComments();
      setData({ ...data, text: '' });
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className={pd.main}>
      <div>
        <Card_1 img={q.pf} tweet={q.twt} name={q.nm} pic={q.pic} key={q.key} />
      </div>

      <div className={pd.commentsContainer}>
        <div className={pd.comments}>
          {comment.map((e) => (
            <Com_ment text={e.text} account={e.username}/>
          ))}
        </div>
      </div>
      
      <div className={`${pd.post} ${isScrolling ? 'hidden' : ''}`}>
      <input
  type="text"
  className={pd.text}
  placeholder="Post here..."
  value={data.text} // Bind input field value to data.text
  onChange={getData}
/>
        <button className={pd.button} onClick={sendData}>
          post
        </button>
      </div>
      
    </div>
  );
};

export default Page;
