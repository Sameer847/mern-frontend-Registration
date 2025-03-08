import React, { useEffect, useState } from 'react';
import { getCookie } from 'react-use-cookie';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch name from cookies or localStorage
        const storedName = getCookie('name') || localStorage.getItem('name');
        const token = getCookie('token') || localStorage.getItem('token');
        
        if (storedName) {
            setName(storedName);
            setLoading(false);
        } else {
            console.log('Name not found in storage');
            // If no name is found, redirect to login after a short delay
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear cookies and localStorage
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        localStorage.clear();
        navigate('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                    <svg className="animate-spin h-10 w-10 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-lg">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <header className="bg-white/10 backdrop-blur-lg shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span className="ml-2 text-xl font-bold text-white">MyApp</span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                    <div className="inline-block p-4 rounded-full bg-white/20 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Welcome, {name}!
                    </h1>
                    <p className="text-xl text-white/80 mb-8">
                        We're thrilled to have you here. Start exploring your dashboard.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white text-left hover:bg-white/30 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">My Tasks</h3>
                            <p className="opacity-80">Manage your tasks and track your progress.</p>
                        </div>
                        
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white text-left hover:bg-white/30 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Activity</h3>
                            <p className="opacity-80">View your recent activities and progress.</p>
                        </div>
                        
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white text-left hover:bg-white/30 transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Settings</h3>
                            <p className="opacity-80">Customize your account settings and preferences.</p>
                        </div>
                    </div>
                    
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                        Explore Dashboard
                    </button>
                </div>
            </main>
            
            <footer className="bg-white/10 backdrop-blur-lg py-6 mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/60">
                    <p>© 2025 MyApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Welcome;