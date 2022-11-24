import React from 'react';
import securityimg from '../../../images/security/securityimg.png';

const Security = () => {
    return (
        <div className='px-12 my-10'>
            <div className='text-center'>
                <p className='tracking-widest text-sm text-[#2583EE]'>THE SECURITY</p>
                <h2 className='text-2xl mt-3 mb-8'>How We Secure Your Web3 Projects</h2>
            </div>
            <img src={securityimg} alt="" />
        </div>
    );
};

export default Security;