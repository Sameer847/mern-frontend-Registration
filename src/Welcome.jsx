import React, { useEffect, useState } from 'react';
import { getCookie } from 'react-use-cookie'; // Package for handling cookies

const Welcome = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        // const storedName = localStorage.getItem('name'); // Fetch name from localStorage
           // Fetch name from cookies or localStorage
           const storedName = getCookie('name') || localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        } else {
            console.log('Name not found in localStorage'); // Debugging
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600">Welcome {name} to the App!</h1>
        </div>
    );
};

export default Welcome;