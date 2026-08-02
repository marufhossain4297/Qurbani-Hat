import React from 'react';
import NavBar from '../components/sheard/NavBar';
import Banner from '../components/Home/Banner';
import FeaturedCards from '../components/Home/Featured';
import Tips from '../components/Home/Tips';
import StatsCounter from '../components/Home/StatsCounter';
import BrowseBanner from '../components/Home/BrowseBanner';
import Footer from '../components/sheard/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className=''>
            <>
                <NavBar />
                <Banner />
                <FeaturedCards />
                <Tips />
                <StatsCounter />
                <BrowseBanner />
                <Footer />
                {children}
            </>
        </div>
    );
};

export default MainLayout;