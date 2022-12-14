import React from 'react';
import Features from './features/Features';
import Footer from './footer/Footer';
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
import Web3Banner from './web3Banner/Web3Banner';
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
            <Web3Banner />
            <Footer />
        </div>
    );
};

export default Home;