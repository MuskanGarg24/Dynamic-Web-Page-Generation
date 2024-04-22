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
            <Heading title={title} description='' />
            <div>
                <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>{buttonLabel}</button>
        </div>
    )
}

export default LogIn;