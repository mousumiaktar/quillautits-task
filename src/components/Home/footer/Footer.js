import React from 'react';
import { AiTwotoneMail } from "react-icons/ai";
import istock from '../../../images/footerimg/istock.png';
import index from '../../../images/footerimg/index.png';
import flag from '../../../images/footerimg/flag.png';
import img1 from '../../../images/footerimg/img1.png';
import img2 from '../../../images/footerimg/img2.png';
import img3 from '../../../images/footerimg/img3.png';
import img4 from '../../../images/footerimg/img4.png';
import img5 from '../../../images/footerimg/img5.png';
import img6 from '../../../images/footerimg/img6.png';
import img7 from '../../../images/footerimg/img7.png';
import img8 from '../../../images/footerimg/img8.png';
import img9 from '../../../images/footerimg/img9.png';


const Footer = () => {
    return (
        <div className='bg-[#28293E] pb-5'>
            <div className='md:grid grid-cols-4 mx-12 pt-5 text-white'>
                <div>
                    <p className='text-white font-bold mb-4'>Parent Company</p>
                    <h3 className=' font-bold'>QuillHash</h3>
                    <p className='text-sm mt-2'>Quillhash delivers enterprise <br /> grade blockchain technology <br /> to leading companiies <br /> worldwide.</p>
                    <div className='mt-2 flex items-center bg-white w-32 pl-2'>
                        <img src={istock} alt="" />
                        <p className='text-black ml-4'>ENG</p>
                    </div>
                    <div className='flex items-center mt-3 gap-4'>
                        <img src={index} alt="" />
                        <img src={flag} alt="" />
                    </div>
                </div>
                <div>
                    <p className='mb-4 font-bold'>Parent Company</p>
                    <div className='text-sm leading-7'>
                        <p>Careers</p>
                        <p>Courses</p>
                        <p>Blockchain Security CTF</p>
                        <p>QuillAudits Partner Program</p>
                        <p>Referral Program</p>
                    </div>
                </div>
                <div>
                    <p className='mb-4 font-bold'>Services</p>
                    <div className='text-sm leading-7'>
                        <p>Smart Contract Auditing</p>
                        <p>Blockchain Pen Testing</p>
                        <p>Due Diligence</p>
                    </div>
                </div>
                <div>
                    <p className='mb-4 font-bold'>Contact Us</p>
                    <p className='text-sm'>LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur DLF Phase1, Sector 28, Gurugram, Haryana - 122002</p>
                    <div className='flex items-center mt-5 text-sm'>
                        <AiTwotoneMail className='mr-2' />
                        <p><u>contract@guillaudits.com</u></p>
                    </div>
                </div>

            </div>
            <div className='mx-12'>
                <p className='text-center text-white pr-40'>Join our Journey</p>
                <div className='md:flex items-center gap-4 md:ml-auto md:mr-auto md:w-[50%]  mt-5'>
                    <div className='flex gap-4 mb-4 md:mb-0'>
                        <img className='h-10' src={img1} alt="" />
                        <img className='h-10' src={img2} alt="" />
                        <img className='h-10' src={img3} alt="" />
                    </div>
                    <div className='flex gap-4 mb-4 md:mb-0'>
                        <img className='h-10' src={img4} alt="" />
                        <img className='h-10' src={img5} alt="" />
                        <img className='h-10' src={img6} alt="" />
                    </div>
                    <div className='flex gap-4'>
                        <img className='h-10' src={img7} alt="" />
                        <img className='h-10' src={img8} alt="" />
                        <img className='h-10' src={img9} alt="" />
                    </div>
                </div>
                <hr className='mt-5 opacity-20' />
                <p className='text-center text-white text-xs mt-3'>All Rights Reserved, @Copyright 2022. QuillHash Technologies Private Limited</p>
            </div>
        </div>
    );
};

export default Footer;