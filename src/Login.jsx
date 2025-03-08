import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'react-use-cookie'; // Package for handling cookies

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post('https://mern-backend-registration-1.onrender.com/login', {
                email,
                password,
            });

            console.log('Backend Response:', res.data); // Debugging

            if (rememberMe) {
                // Save token in cookies with longer expiry (e.g., 7 days)
                setCookie('token', res.data.token, { path: '/', maxAge: 604800 }); // 7 days
                setCookie('name', res.data.name, { path: '/', maxAge: 604800 }); // 7 days
            } else {
                // Save token in localStorage (expires when browser is closed)
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', res.data.name);
            }

            console.log('Token saved:', res.data.token); // Debugging
            console.log('Name saved:', res.data.name); // Debugging
            alert('Logged in successfully');
            navigate('/welcome'); // Redirect to Welcome page
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
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
                {/* Remember Me Checkbox */}
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">
                        Remember Me
                    </label>
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-4"
                >
                    Login
                </button>
                {/* "Create account?" text with navigation */}
                <p
                    onClick={() => navigate('/register')}
                    className="text-right text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                    Create account?
                </p>
            </div>
        </div>
    );
};

export default Login;
