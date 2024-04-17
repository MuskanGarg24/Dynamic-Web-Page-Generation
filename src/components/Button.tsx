import React from 'react';

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <button className='bg-[#036efa] text-white text-lg px-3 py-2 rounded-md hover:opacity-90'>{label}</button>
    );
}

export default Button;