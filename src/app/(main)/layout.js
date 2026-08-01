import React from 'react';
import NavBar from '../components/sheard/NavBar';
import Banner from '../components/Home/Banner';
import FeaturedCards from '../components/Home/Featured';
import Tips from '../components/Home/Tips';

const MainLayout = ({ children }) => {
    return (
        <div className=''>
            <>
                <NavBar />
                <Banner />
                <FeaturedCards />
                <Tips />
                {children}
            </>
        </div>
    );
};

export default MainLayout;