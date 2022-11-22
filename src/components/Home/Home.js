import React from 'react';
import HeroArea from './heroArea/HeroArea';
import PartnersArea from './partnersArea/PartnersArea';
import Services from './services/Services';
import ServicesTwo from './services/ServicesTwo';


const Home = () => {
    return (
        <div className=' '>
            <HeroArea />
            <PartnersArea />
            <Services />
            <ServicesTwo />
        </div>
    );
};

export default Home;