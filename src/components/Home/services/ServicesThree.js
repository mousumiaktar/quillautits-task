import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import serviceimg3 from '../../../images/services/service3.png';

const ServicesThree = () => {
    return (
        <div className='px-12 md:flex lg:flex justify-around items-center my-16'>
            <div>
                <img className='h-56' src={serviceimg3} alt="" />
            </div>
            <div>
                <p className='text-sm text-[#2583EE]'>SERVICES</p>
                <h2 className='text-2xl mt-5'>Smart Contract Auditing</h2>
                <p className='mt-5'>QuilAudits acknowledges the significant threats involved in <br /> smart contracts, which can lead to many critical <br /> possibilities</p>
                <div className='mt-8'>
                    <div className='flex items-center'>
                        <AiFillThunderbolt className='text-[#7497F5]' />
                        <p className='ml-2'>DeFi Due Diligence</p>
                    </div>
                    <div className='flex items-center'>
                        <AiFillThunderbolt className='text-[#7497F5]' />
                        <p className='ml-2'>NFT Due Diligence</p>
                    </div>
                    <div className='flex items-center'>
                        <AiFillThunderbolt className='text-[#7497F5]' />
                        <p className='ml-2'>Rug Pull Due Diligence</p>
                    </div>
                </div>
                <button className="mt-6 mb-4 p-2 px-8 shadow-xl text-white bg-gradient-to-r from-[#4D40EE] to-[#5E80F8] rounded cursor-pointer">Explore</button>
            </div>
        </div>
    );
};

export default ServicesThree;