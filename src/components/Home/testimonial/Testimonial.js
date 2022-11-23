import React from 'react';
import { ImStack } from "react-icons/im";

const Testimonial = () => {
    return (
        <div className='px-24 my-24'>
            <div className='md:flex items-center justify-between mb-6'>
                <div>
                    <p className='tracking-widest text-xs text-[#2583EE]'>TESTIMONIALS</p>
                    <h2 className='text-2xl text-[#391400] mt-5 mb-3 font-bold'>What our Clients are saying</h2>
                </div>
                <div>
                    <button className="mt-4 mb-4 p-1 px-4 text-white bg-gradient-to-r from-[#4D40EE] to-[#5E80F8] cursor-pointer rounded mr-5">Read More</button>
                </div>
            </div>

            <div className='md:grid grid-cols-3 gap-4 text-center'>

                <div>
                    <div className='flex items-center md:ml-32'>
                        <ImStack className='w-10 h-10 mr-4' />
                        <h3 className='text-2xl'>Stack<span className='font-bold'>OS</span></h3>
                    </div>
                    <p className='text-[#391400] my-4'>Very professional and timed delivery. Also very prompt in responses and queries.</p>
                    <div className='text-[#391400]'>
                        <h4 className='font-bold'>Vishnu Korde</h4>
                        <p>CEO, StackOS</p>
                    </div>
                </div>

                <div>
                    <div className='flex items-center md:ml-32'>
                        <ImStack className='w-10 h-10 mr-4' />
                        <h3 className='text-2xl'>Stack<span className='font-bold'>OS</span></h3>
                    </div>
                    <p className='text-[#391400] my-4'>Very professional and timed delivery. Also very prompt in responses and queries.</p>
                    <div className='text-[#391400]'>
                        <h4 className='font-bold'>Vishnu Korde</h4>
                        <p>CEO, StackOS</p>
                    </div>
                </div>

                <div>
                    <div className='flex items-center md:ml-32'>
                        <ImStack className='w-10 h-10 mr-4' />
                        <h3 className='text-2xl'>Stack<span className='font-bold'>OS</span></h3>
                    </div>
                    <p className='text-[#391400] my-4'>Very professional and timed delivery. Also very prompt in responses and queries.</p>
                    <div className='text-[#391400]'>
                        <h4 className='font-bold'>Vishnu Korde</h4>
                        <p>CEO, StackOS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;