import React from 'react';
import NavBar from '../components/sheard/NavBar';

const AuthLayout = ({ children }) => {
    return (
        <div className=''>
            <>
                <NavBar />
                {children}
            </>
        </div>
    );
};

export default AuthLayout;