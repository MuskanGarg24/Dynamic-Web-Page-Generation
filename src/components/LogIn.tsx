import React, { useState } from 'react'
import Heading from './Heading';
import axios from 'axios';
import { navigate } from "gatsby"

interface Data {
    title: string;
    highlightedTitle: string;
    description: string;
    buttonLabel: string;
    data: any[];
    apiEndPoints: any;
}

const LogIn: React.FC<Data> = ({ title, buttonLabel, apiEndPoints }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiEndPoints.login, {
                username: username,
                password: password
            });
            localStorage.setItem('token', response.data.token)
            navigate('/')
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="mt-9">
                <Heading title={title} description='' />
            </div>
            <div className='flex justify-center mt-20'>
                <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} className='border-2 border-gray-500 px-5 py-3 rounded-xl text-lg' />
            </div>
            <div className='flex justify-center mt-5'>
                <input type="password" placeholder='password'
                    className='border-2 border-gray-500 px-5 py-3 rounded-xl text-lg'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="my-9 flex justify-center">
                <button className='bg-blue-500 text-white px-5 py-3 rounded-xl' onClick={handleLogin}>{buttonLabel}</button>
            </div>
        </div>
    )
}

export default LogIn;