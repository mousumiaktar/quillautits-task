import React from 'react';
import newsimg from '../../../images/news/news.png';

const News = () => {
    return (
        <div className='mx-12'>
            <div className='mx-12'>
                <p className='tracking-widest text-sm text-[#2583EE]'>OUR BLOG</p>
                <h2 className='text-2xl text-[#391400] mt-5 mb-3 font-bold'>Catch up the news</h2>
            </div>
            <div className='md:grid grid-cols-3 gap-32 mx-12 my-8'>
                <div className='mx-auto'>
                    <div>
                        <img className='w-auto' src={newsimg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#2583EE] mt-3'>Web3 Security: Classification & Analysis of Web3 Hacks</h3>
                        <p className='mt-3 text-[#391400]'><span className='text-sm'>15 Mar, 2023</span></p>
                        <p className='mt-3 text-[#391400]'>At every point in time, the internet keeps changing dimensions to solve shortcoming of the previous version.</p>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div>
                        <img className='w-auto' src={newsimg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#2583EE] mt-3'>Web3 Security: Classification & Analysis of Web3 Hacks</h3>
                        <p className='mt-3 text-[#391400]'><span className='text-sm'>15 Mar, 2023</span></p>
                        <p className='mt-3 text-[#391400]'>At every point in time, the internet keeps changing dimensions to solve shortcoming of the previous version.</p>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div>
                        <img className='w-auto' src={newsimg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#2583EE] mt-3'>Web3 Security: Classification & Analysis of Web3 Hacks</h3>
                        <p className='mt-3 text-[#391400]'><span className='text-sm'>15 Mar, 2023</span></p>
                        <p className='mt-3 text-[#391400]'>At every point in time, the internet keeps changing dimensions to solve shortcoming of the previous version.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;