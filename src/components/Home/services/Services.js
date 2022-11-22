import React from 'react';
import serviceimg from '../../../images/services/service.png';
import { AiFillThunderbolt, AiOutlineDoubleRight, AiFillCodeSandboxSquare, AiOutlineForward } from "react-icons/ai";

const Services = () => {
    return (
        <div className='px-12 md:flex lg:flex justify-around items-center my-16'>
            <div>
                <img className='h-56' src={serviceimg} alt="" />
            </div>
            <div>
                <p className='text-sm text-[#2583EE]'>SERVICES</p>
                <h2 className='text-2xl mt-5'>Smart Contract Auditing</h2>
                <p className='mt-5'>Our Audit process for smart contract for based on the <br /> comprehensive approach we follow to investigate the code <br /> for security flaws and potential vulnerabilities.</p>
                <div className='mt-5'>
                    <div className='flex items-center'>
                        <AiFillThunderbolt />
                        <p className='ml-2'>Etherem</p>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineDoubleRight className='text-[#BEA1F2]' />
                        <p className='ml-2'>Polygon</p>
                    </div>
                    <div className='flex items-center'>
                        <AiFillCodeSandboxSquare className='text-[#F0BC16]' />
                        <p className='ml-2'>BSC</p>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineForward className='text-[#30E5B5]' />
                        <p className='ml-2'>Solana</p>
                    </div>
                    <div className='flex items-center'>
                        <AiFillThunderbolt />
                        <p className='ml-2'>EOs</p>
                    </div>
                </div>
                <button className="mt-6 mb-4 p-2 px-8 shadow-xl text-white bg-gradient-to-r from-[#4D40EE] to-[#5E80F8] rounded cursor-pointer">Explore</button>
            </div>
        </div>
    );
};

export default Services;