import React from 'react';
import NavBar from '../components/sheard/NavBar';
import Footer from '../components/sheard/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className=''>
            <>
                <NavBar />
                {children}
                <Footer />
            </>
        </div>
    );
};

export default MainLayout;