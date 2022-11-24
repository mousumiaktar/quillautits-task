import { Accordion } from 'flowbite-react';


const Questions = () => {

    return (
        <div className='px-12 md:flex lg:flex justify-around items-center my-16'>
            <div className=''>
                <p className='tracking-widest text-sm text-[#2583EE]'>FAQ</p>

                <div className='text-2xl mt-2 leading-relaxed text-[#391400]'>
                    <h2>Frequently Asked</h2>
                    <h2>Questions</h2>
                </div>

                <p className='my-4 text-[#391400]'>
                    Visit our help center to clear out any second thouthts that <br /> you may have regarding our services.
                </p>

                <button className="mt-6 mb-4 p-2 px-4 shadow-xl text-white bg-gradient-to-r from-[#4D40EE] to-[#5E80F8] rounded cursor-pointer">Contact Us</button>
            </div>

            <div className='md:w-[40%] lg:w-[40%]'>
                <Accordion className='border-2 border-[#5E80F8] rounded-lg'>

                    <Accordion.Panel class="divide-y divide-blue-200">
                        <Accordion.Title>
                            <h3 className='text-[#391400] text-xl'>
                                What is smart contract security?
                            </h3>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-[#391400] dark:text-gray-400">
                                Smart Contract Security is a set of best practies to identify bugs and vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>

                    <hr className='bg-[#5e80F8]' />

                    <Accordion.Panel class="divide-y divide-blue-200">
                        <Accordion.Title>
                            <h3 className='text-[#391400] text-xl'>
                                Are smart contracts vulnerable?
                            </h3>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-[#391400] dark:text-gray-400">
                                Smart Contract Security is a set of best practies to identify bugs and vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <hr className='bg-[#5e80F8]' />

                    <Accordion.Panel class="divide-y divide-blue-200">
                        <Accordion.Title>
                            <h3 className='text-[#391400] text-xl'>
                                What is a smart contract audit?
                            </h3>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-[#391400] dark:text-gray-400">
                                Smart Contract Security is a set of best practies to identify bugs and vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <hr className='bg-[#5e80F8]' />

                    <Accordion.Panel>
                        <Accordion.Title className='text-[#391400]'>
                            <h3 className='text-[#391400] text-xl'>
                                Why do smart contract fail?
                            </h3>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-[#391400] dark:text-gray-400">
                                Smart Contract Security is a set of best practies to identify bugs and vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>

        </div>
    );
};

export default Questions;