import React from 'react';
import Features from './features/Features';
import HashingBits from './hashingBits/HashingBits';
import HeroArea from './heroArea/HeroArea';
import News from './news/News';
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
            <News />
            <HashingBits />
        </div>
    );
};

export default Home;