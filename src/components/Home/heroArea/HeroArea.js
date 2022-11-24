import React from 'react';
import heroimg from '../../../images/hero/hero.png'
import Pricing from './Pricing';

const HeroArea = () => {
    return (
        <div className=' bg-[#0E1B4E] bg-gradient-to-b from-[#0E1B4E] to-[#1E3C7A]'>
            <div className='md:flex justify-between items-center px-5 md:mx-12 gap-8 relative pt-36 '>
                <div className='my-12'>
                    <h3 className='text-4xl text-white leading-tight'>Emerging Web3 Ventures <br /> Rrust Our Smart Contract <br /> Audits & Diligence Services</h3>
                    <p className='text-white mt-10'>QuillAudits, Making web3 a safe place</p>

                    <div className='flex mt-6'>
                        <button className="mt-4 mb-4 p-2 px-5 text-white bg-gradient-to-r from-[#4D42EF] to-[#557EF5] rounded cursor-pointer mr-4">Request Free Quote</button>
                        <button className="mt-4 mb-4 p-2 px-5 text-white border border-[#4750FA] rounded cursor-pointer">Explore Services</button>
                    </div>
                </div>
                <div>
                    <img className='h-96 pr-10 pb-8' src={heroimg} alt="" />
                </div>
            </div>
            <Pricing />
        </div>
    );
};

export default HeroArea;