import React from 'react';
import web3img from '../../../images/web3/web3.png';

const Web3Banner = () => {
    return (
        <div className='md:mx-24 mb-12'>
            <div className='bg-[#2D83EE] md:flex items-center justify-around py-10 px-2 rounded-3xl md:mx-10 gap-4'>
                <div>
                    <div className='text-2xl text-white leading-relaxed'>
                        <h2>Join Hands With us to</h2>
                        <h2>secure Web3 Together</h2>
                    </div>
                    <p className='mt-5 text-white'>Help us in our journey to secure web3 by joining our team of talented <br /> individuals spread across the globe.</p>
                    <button className="mt-12 mb-4 p-2 px-4 shadow-x text-sm bg-white rounded cursor-pointer">APPLY NOW!</button>
                </div>
                <div>
                    <img className='h-64' src={web3img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Web3Banner;