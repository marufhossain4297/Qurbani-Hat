import React from 'react';
import NavBar from '../components/sheard/NavBar';
import Banner from '../components/Home/Banner';

const MainLayout = ({ children }) => {
    return (
        <div className=''>
            <>
                <NavBar />
                <Banner />
                {children}
            </>
        </div>
    );
};

export default MainLayout;