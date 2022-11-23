import React from 'react';
import HeroArea from './heroArea/HeroArea';
import PartnersArea from './partnersArea/PartnersArea';
import Portfolio from './portfolio/Portfolio';
import Security from './security/Security';
import Services from './services/Services';
import ServicesThree from './services/ServicesThree';
import ServicesTwo from './services/ServicesTwo';
import WhyAudit from './whyAudit/WhyAudit';


const Home = () => {
    return (
        <div className=' '>
            <HeroArea />
            <PartnersArea />
            <Services />
            <ServicesTwo />
            <ServicesThree />
            <Security />
            <Portfolio />
            <WhyAudit />
        </div>
    );
};

export default Home;