import React from 'react';
import feature1 from '../../../images/features/feature1.png';
import feature3 from '../../../images/features/feature3.png';
import feature4 from '../../../images/features/feature4.png';
import feature5 from '../../../images/features/feature5.png';
import feature6 from '../../../images/features/feature6.png';

const Features = () => {
    return (
        <div className='px-24 mb-6'>
            <div className='text-center pt-5'>
                <p className='tracking-widest text-xs text-[#2583EE]'>MENTIONS</p>
                <h2 className='text-2xl mt-4 mb-3'>As Featured In</h2>
                <div className='md:grid grid-cols-3 gap-y-8 mt-12'>
                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-12 py-8'>
                        <img className='h-10' src={feature6} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-12 py-8'>
                        <img className='h-10' src={feature6} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-12 py-8'>
                        <img className='h-10' src={feature6} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-12 py-8 '>
                        <img className='h-10' src={feature6} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-12 py-8'>
                        <img className='h-10' src={feature6} alt="" />
                        <p className='text-[#2583EE] mt-8'>Read More</p>
                    </div>

                    <div className='mx-auto border-2 border-[#2583EE] rounded-xl shadow-xl px-12 py-8'>
                        <img className='h-10' src={feature6} alt="" />
                        <p className='text-[#2583EE] mt-8 '>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;