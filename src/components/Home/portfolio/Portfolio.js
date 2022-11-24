import React from 'react';
import Portfolioimg from '../../../images/portfolio/portfolio.png';

const Portfolio = () => {
    return (
        <div className='bg-[#0E1B4E] bg-gradient-to-b from-[#0E1B4E] to-[#1E3C7A] py-8'>
            <div className='text-center pt-5'>
                <p className='tracking-widest text-sm text-[#2583EE]'>PORTFOLIO</p>
                <h2 className='text-white text-2xl mt-5 mb-3'>Latest Work</h2>
                <div>
                    <button className="mt-4 mb-4 p-1 px-4 text-white bg-[#557EF5] cursor-pointer rounded-full mr-5">Ethereum</button>
                    <button className="mt-4 mb-4 p-1 px-4 text-white border border-white rounded-full cursor-pointer mr-5">Binance SC</button>
                    <button className="mt-4 mb-4 p-1 px-4 text-white border border-white rounded-full cursor-pointer mr-5">NTF</button>
                    <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded-full cursor-pointer">Solona</button>
                </div>
            </div>
            <div className='md:grid grid-cols-3 md:mx-12 mx-16 my-8'>
                <div className='mx-auto'>
                    <div>
                        <img src={Portfolioimg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-white text-xl'>StackOS Audit Report</h3>
                        <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded cursor-pointer mr-5 text-sm">VIEW</button>
                        <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded cursor-pointer text-sm">DOWNLOAD</button>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div>
                        <img src={Portfolioimg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-white text-xl'>StackOS Audit Report</h3>
                        <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded cursor-pointer mr-5 text-sm">VIEW</button>
                        <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded cursor-pointer text-sm">DOWNLOAD</button>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div>
                        <img src={Portfolioimg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-white text-xl'>StackOS Audit Report</h3>
                        <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded cursor-pointer mr-5 text-sm">VIEW</button>
                        <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded cursor-pointer text-sm">DOWNLOAD</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className="mt-4 mb-4 px-4 p-1 text-white border border-white rounded cursor-pointer text-sm ">BUTTON</button>
            </div>
        </div>
    );
};

export default Portfolio;