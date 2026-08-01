import React from 'react';
import NavBar from '../components/sheard/NavBar';

const AuthLayout = ({ children }) => {
    return (
        <div className=''>
            <>
                {children}
            </>
        </div>
    );
};

export default AuthLayout;