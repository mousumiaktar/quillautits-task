import React from 'react';
import HeroArea from './heroArea/HeroArea';
import PartnersArea from './partnersArea/PartnersArea';
import Services from './services/Services';


const Home = () => {
    return (
        <div className=' '>
            <HeroArea />
            <PartnersArea />
            <Services />
        </div>
    );
};

export default Home;