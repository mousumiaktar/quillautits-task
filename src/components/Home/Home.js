import React from 'react';
import HeroArea from './heroArea/HeroArea';
import PartnersArea from './partnersArea/PartnersArea';
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
        </div>
    );
};

export default Home;