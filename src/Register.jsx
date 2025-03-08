import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook

    const handleRegister = async () => {
        try {
            await axios.post('https://mern-backend-registration-1.onrender.com/register', {
                name,
                email,
                password,
            });
            alert('User registered successfully');
            setName('');
            setEmail('');
            setPassword('');
            navigate('/'); // Redirect to login page after successful registration
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-center text-2xl font-bold mb-4">Register</h1>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <button
                    onClick={handleRegister}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
