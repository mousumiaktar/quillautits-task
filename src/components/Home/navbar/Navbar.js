import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from '../../../images/logo.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    };
    

    return (
        <div className='container'>
            <nav className='w-full z-50 pl-5 pr-5 absolute'
            >
                <div className="container mx-auto h-full bg-transparent">
                    <div className="flex justify-between items-center w-full lg:px-12  z-50 nav-area left-0">
                        <div className="logo flex items-center">
                            <img className="h-24" src={logo} alt="" />
                        </div>


                        <ul className="hidden md:flex text-black items-center gap-5">
                            <li className="p-4 cursor-pointer text-white">
                                Audit Services
                            </li>
                            <li className="p-4 cursor-pointer text-white">
                                Pricing
                            </li>
                            <li className="p-4 cursor-pointer text-white">
                                Blog
                            </li>
                            <li className="p-4 cursor-pointer text-white">
                                Resources
                            </li>
                            <li className="mt-4 mb-4 p-2 px-5 text-white bg-gradient-to-r from-[#4D42EF] to-[#557EF5] rounded cursor-pointer">
                                Portfolio
                            </li>
                            <li className="mt-4 mb-4 p-2 px-5 text-white bg-gradient-to-r from-[#4D42EF] to-[#557EF5] rounded cursor-pointer">
                                Request an audit
                            </li>

                        </ul>

                        <div onClick={handleNav} className="block md:hidden">
                            {nav ? <AiOutlineClose className="text-white" size={20} /> : <AiOutlineMenu className="text-white" size={20} />}
                        </div>

                        <ul
                            className={
                                nav
                                    ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                                    : "ease-in-out duration-500 fixed left-[-100%]"
                            }
                        >
                            <img className="h-16" src={logo} alt="" />
                            <li className="p-4 border-b border-gray-600 text-white">audit services</li>
                            <li className="p-4 border-b border-gray-600 text-white">pricing</li>
                            <li className="p-4 border-b border-gray-600 text-white">Blog</li>
                            <li className="p-4 border-b border-gray-600 text-white">resourcest</li>
                            <li className="p-4 text-white">portfolio</li>
                            <li className="p-4 text-white">request an audit</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;