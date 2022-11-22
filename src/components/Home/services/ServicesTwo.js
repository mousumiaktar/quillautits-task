import React from 'react';
import serviceimg2 from '../../../images/services/service2.png'

const ServicesTwo = () => {
    return (
        <div className='px-12 md:flex lg:flex justify-around items-center my-12'>
            <div>
                <p className='text-sm text-[#2583EE]'>SERVICES</p>
                <h2 className='text-2xl mt-5'>Blockchain Penetration Testing</h2>
                <p className='mt-5'>QuillAudits proven strategy to tackle vulnerabilities specific to <br /> blockchain technology comes with a mix-blend of conventional <br /> pentesting approach and dynamic blockchain analysis</p>
                <button className="mt-6 mb-4 p-2 px-8 shadow-xl text-white bg-gradient-to-r from-[#4D40EE] to-[#5E80F8] rounded cursor-pointer">Learn More</button>
            </div>

            <div>
                <img className='h-56' src={serviceimg2} alt="" />
            </div>
        </div>
    );
};

export default ServicesTwo;