import React from 'react';
import hasimg from '../../../images/hasingbits/hash.png';
import mailbox from '../../../images/hasingbits/mailbox.png';
import { AiFillCheckCircle } from "react-icons/ai";
import './hashing.css';

const HashingBits = () => {
    return (
        <div className='bg-[#0E1B4E] bg-gradient-to-b from-[#0E1B4E] to-[#1E3C7A] mb-12 w-full'>
            <div className='md:flex justify-between md:mx-24 mx-4'>
                <div className='pt-10'>
                    <img className='h-12' src={hasimg} alt="" />
                    <p className='text-white mt-5'>DeFi NFT Hacks, CTFs, and Blockchain Insights Straight to your Inbox.</p>
                    <p className='text-white mt-3'>Explore our weekly newsletter: HashingBits. Stay updated on everything we're publishing. Stand a step ahead.</p>
                    <input className='bg-[#051647] py-2 px-10 rounded-md mt-6' type="email" name="" id="" placeholder='youremail@gmail.com' />
                    <div className='flex items-center my-5'>
                        <AiFillCheckCircle className='text-[#29D089] mr-2' />
                        <p className='text-white'>Your email has been successfully registered, headlines will be sent to you soon.</p>
                    </div>
                </div>
                <div>
                    <div className='mailone'>
                        <img className='h-80 opacity-20 ' src={mailbox} alt="" />
                    </div>
                    <div className='mailtwo'>
                        <img className='' src={mailbox} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HashingBits;