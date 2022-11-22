import React from 'react';
import heroimg2 from '../../../images/hero/heroimg2.png'
import Pricing from './Pricing';

const HeroArea = () => {
    return (
        <div className=' bg-[#0E1B4E] '>
            <div className='md:flex justify-between items-center px-5 mx-12 gap-8 relative pt-36'>
                <div className='my-12'>
                    <h3 className='text-3xl text-white leading-10'>Emerging Web3 Ventures <br /> Rrust Our Smart Contract <br /> Audits & Diligence Services</h3>
                    <p className='text-white mt-10'>QuillAudits, Making web3 a safe place</p>

                    <div className='flex mt-6'>
                        <button className="mt-4 mb-4 p-2 px-5 text-white bg-[#4750FA] rounded cursor-pointer mr-4">Request Free Quote</button>
                        <button className="mt-4 mb-4 p-2 px-5 text-white bg-[#4750FA] rounded cursor-pointer">Explore Services</button>
                    </div>

                </div>
                <div>
                    <img src={heroimg2} alt="" />
                </div>
            </div>
            <Pricing />
        </div>
    );
};

export default HeroArea;