import React from 'react';
import HeroArea from './heroArea/HeroArea';
import PartnersArea from './partnersArea/PartnersArea';
import Security from './security/Security';
import Services from './services/Services';
import ServicesThree from './services/ServicesThree';
import ServicesTwo from './services/ServicesTwo';


const Home = () => {
    return (
        <div className=' '>
            <HeroArea />
            <PartnersArea />
            <Services />
            <ServicesTwo />
            <ServicesThree />
            <Security />
        </div>
    );
};

export default Home;