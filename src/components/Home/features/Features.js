import React from 'react';
import feature1 from '../../../images/feature/feature1.png';
import feature2 from '../../../images/feature/feature2.png';

const Features = () => {
    return (
        <div className='md:px-24 lg:px-24 mx-12 mb-6'>
            <div className='text-center pt-5'>
                <p className='tracking-widest text-sm text-[#2583EE]'>MENTIONS</p>
                <h2 className='text-3xl mt-4 mb-3'>As Featured In</h2>
                <div className='md:grid grid-cols-3 gap-y-8 mt-12'>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-4 py-6 mb-4 md:mb-0'>
                        <img className='h-16' src={feature1} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-4 py-6 mb-4 md:mb-0'>
                        <img className='h-16' src={feature2} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-4 py-6 mb-4 md:mb-0'>
                        <img className='h-16' src={feature1} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-4 py-6 mb-4 md:mb-0'>
                        <img className='h-16' src={feature2} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-4 py-6 mb-4 md:mb-0'>
                        <img className='h-16' src={feature1} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-4 py-6'>
                        <img className='h-16' src={feature2} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;