'use client'
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/user';
import Profile_1 from '../components/Profile_1';
import Side_nav from '../components/Side_nav';
import pf from '../styles/profile_1.module.css';

const Page = () => {
    const [info, setInfo] = useState(null); // Initialize info as null

    const { userId } = useGlobalContext();
    const q = JSON.stringify({ username: userId });

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

    return (
        <div className={pf.main}>
            <Side_nav />
            {info ? <Profile_1 na_={info.username} pi_c={info.profile} /> : <p>Loading...</p>}
        </div>
    );
};

export default Page;
