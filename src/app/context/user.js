'use client';

import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const GlobalContext = createContext({
    userId: '',
    setUserId: () => '',
    userData: [],
    setData: () => [] 
});

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userId', userId);
    }, [userId]);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    return (
        <GlobalContext.Provider value={{ userId, setUserId, data, setData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
