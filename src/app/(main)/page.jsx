import React from 'react';
import Banner from '../components/Home/Banner';
import FeaturedCards from '../components/Home/Featured';
import Tips from '../components/Home/Tips';
import StatsCounter from '../components/Home/StatsCounter';
import BrowseBanner from '../components/Home/BrowseBanner';

const Home = () => {
  return (
    <div>
      <>
        <Banner />
        <FeaturedCards />
        <Tips />
        <StatsCounter />
        <BrowseBanner />
      </>
    </div>
  );
};

export default Home;