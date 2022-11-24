import React from 'react';

const Pricing = () => {
    return (
        <div className='md:flex lg:flex justify-between items-center mx-12 pb-12'>
            <div className='md:flex lg:flex justify-between items-center mb-4 md:mb-0 lg:mb-0'>
                <h2 className='text-3xl font-bold text-[#2D83EE]'>$12.8B</h2>
                <div className='text-white ml-2 leading-5'>
                    <p>Amount Lost To</p>
                    <p>DeFi Hacks in 2021</p>
                </div>
            </div>
            <div className='md:flex lg:flex justify-between items-center mb-4 md:mb-0 lg:mb-0'>
                <h2 className='text-3xl font-bold text-[#2D83EE]'>600k</h2>
                <div className='text-white ml-2 leading-5'>
                    <p>lines of Codes</p>
                    <p>Secured by QuillAudits</p>
                </div>
            </div>
            <div className='md:flex lg:flex justify-between items-center'>
                <h2 className='text-3xl font-bold text-[#2D83EE]'>$14.6B</h2>
                <div className='text-white ml-2 leading-5'>
                    <p>Amount Protected</p>
                    <p>By QuillAudits</p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;