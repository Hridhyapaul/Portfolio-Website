import React from 'react';
import { HiXCircle } from 'react-icons/hi';

const Modal3 = ({setIsModalOpen}) => {
    const technologies = ["HTML", "CSS", "Tailwind CSS", "React.js", "React Router", "React Hook", "Firebase", "Node.js", "Express.js", "MongoDB"]
    return (
        <div className="fixed z-20 inset-0 flex items-center lg:justify-center py-32">
            <div className='modal-overlay fixed inset-0 bg-black opacity-30'></div>
            <div className='lg:modal-container bg-bodyColor lg:w-[70%] w-screen rounded shadow-lg z-50' data-aos="zoom-in-down">
                <div className='bg-designColor text-bodyColor pl-12 pr-4 py-4 flex justify-between items-center'>
                    <h2 className='lg:text-2xl text-xl font-bold'>Travel Agency</h2>
                    <button onClick={() => setIsModalOpen(false)} className=''>
                        <HiXCircle className='text-4xl text-bodyColor hover:text-opacity-70 duration-300'></HiXCircle>
                    </button>
                </div>
                <div className='lg:modal-content lg:px-4 lg:py-[16px] px-4 py-4 max-h-[80vh] bg-white text-left overflow-y-auto'>
                    <div className='space-y-4 px-8 py-5 font-body'>
                        <div className=''>
                            <p>KidsZone, a captivating and interactive e-commerce platform tailored exclusively for children. This portfolio project is a testament to my prowess in web development, harnessing technologies like Tailwind CSS, React.js, React Router, Firebase, Express.js, and MongoDB to curate a seamless user journey.</p>
                        </div>
                        <div className=' text-bodyColor'>
                            <h1 className='text-2xl font-semibold'>Key Features:</h1>
                            <ul className='mt-4 space-y-2 list-outside list-disc pl-5'>
                                <li><span className='font-semibold'>Immersive E-commerce Experience:</span> KidsZone offers an enthralling e-commerce interface designed to captivate and engage young users.</li>

                                <li><span className='font-semibold'>Tailwind CSS Styling:</span> Employing Tailwind CSS, I crafted a visually appealing and responsive design, ensuring optimal user experience across devices.</li>

                                <li><span className='font-semibold'>React.js Power:</span> Leveraging React.js, I brought dynamic interactivity to the platform, enhancing usability and user engagement.</li>

                                <li><span className='font-semibold'>Efficient Routing with React Router:</span> I employed React Router for seamless navigation, allowing users to explore KidsZone's offerings effortlessly.</li>

                                <li><span className='font-semibold'>Firebase Integration:</span> By integrating Firebase, I streamlined user authentication and data management, enhancing security and user experience.</li>

                                <li><span className='font-semibold'>Expressive UI with MongoDB:</span> Utilizing MongoDB, I orchestrated seamless Create, Read, Update, and Delete operations, ensuring smooth user interactions and profile management.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Technologies:</h1>

                            <ul className='flex justify-start items-center gap-3 flex-wrap mt-4'>
                                {
                                    technologies.map((technology, index) => (
                                        <li
                                            key={index}
                                            className='list-none text-sm bg-bodyColor text-lightText px-2 py-1 rounded-md'
                                        >
                                            {technology}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal3;