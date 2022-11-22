import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    

    return (
        <div className='container'>
            <nav
                className='w-full z-50 pl-5 pr-5 absolute'
            >
                <div className="container mx-auto h-full bg-transparent">
                    <div className="flex justify-between items-center w-full lg:px-12  z-50 nav-area left-0">
                        <div className="logo flex items-center">
                            <h2 className='text-xl font-bold text-white'>QUILLAUDITS</h2>
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
                            <li className="mt-4 mb-4 p-2 px-5 text-white bg-[#4750FA] rounded cursor-pointer">
                                Portfolio
                            </li>
                            <li className="mt-4 mb-4 p-2 px-5 text-white bg-[#4750FA] rounded cursor-pointer">
                                Request an audit
                            </li>

                        </ul>

                        <div onClick={handleNav} className="block md:hidden">
                            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                        </div>

                        <ul
                            className={
                                nav
                                    ? "fixed left-2 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                                    : "ease-in-out duration-500 fixed left-[-100%]"
                            }
                        >
                            <h2 className='text-xl font-bold'>QUILLAUDITS</h2>
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