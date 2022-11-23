import React from 'react';
import Features from './features/Features';
import HeroArea from './heroArea/HeroArea';
import PartnersArea from './partnersArea/PartnersArea';
import Portfolio from './portfolio/Portfolio';
import Questions from './questions/Questions';
import Security from './security/Security';
import Services from './services/Services';
import ServicesThree from './services/ServicesThree';
import ServicesTwo from './services/ServicesTwo';
import Testimonial from './testimonial/Testimonial';
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
            <Features />
            <Testimonial />
            <Questions />
        </div>
    );
};

export default Home;