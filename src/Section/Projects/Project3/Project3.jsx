import React from 'react';
import kidzZone from '../../../assets/Images/KidzZone.jpg'
import ProjectsLink3 from '../../../Shared/ProjectsLink/ProjectLink3/ProjectLink3';
import Modal3 from './Modal3';
import { useState } from 'react';

const Project3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='lg:mt-20 mt-10'>

            {/* Large Screen */}

            <div className='lg:block hidden'>
                <div className='w-full py-[24px] px-[28px] rounded-md flex justify-center items-center gap-10 shadow-shadowOne' >
                    <div className='w-[45%] bg-bodyColor'>
                        <img className='w-full h-[300px] rounded-md object-cover object-top hover:object-bottom duration-[10s]' src={kidzZone} alt="" />
                    </div>
                    <div className='w-[55%] font-body text-right space-y-4'>
                        <div>
                            <p className='text-designColor font-semibold'>Featured Project</p>
                            <div className='flex justify-between items-center'>
                                <button onClick={() => setIsModalOpen(true)} className='bg-lightText text-bodyColor px-3 py-2 rounded font-semibold'>Features & Technologies</button>
                                <h3 className='text-lightText font-semibold text-2xl'>KidsZone</h3>

                                {/* Modal */}

                                {isModalOpen && (
                                    <Modal3 setIsModalOpen={setIsModalOpen}></Modal3>
                                )}
                            </div>
                        </div>
                        <div className='border-2 border-lightText px-5 py-5 rounded-lg'>
                            <p className='text-lightText'>
                                KidsZone, a captivating and interactive e-commerce platform tailored exclusively for children. This portfolio project is a testament to my prowess in web development, harnessing technologies like Tailwind CSS, React.js, React Router, Firebase, Express.js, and MongoDB to curate a seamless user journey
                            </p>
                        </div>
                        <div className='flex justify-end'>
                            <ProjectsLink3></ProjectsLink3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}

            <div className='lg:hidden block'>
                <div className='w-full py-[24px] px-[28px] rounded-md flex flex-col gap-8 shadow-shadowOne'>
                    <div className='bg-bodyColor'>
                        <img className='w-full h-[340px] rounded-md object-cover object-top hover:object-bottom duration-[10s]' src={kidzZone} alt="" />
                    </div>
                    <div className='font-body text-center space-y-4'>
                        <div>
                            <p className='text-designColor font-semibold'>Featured Project</p>
                            <div>
                                <h3 className='text-lightText font-semibold text-2xl'>KidsZone</h3>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <ProjectsLink3></ProjectsLink3>
                            </div>
                        </div>
                        <div className='border-2 border-lightText px-5 py-5 rounded-lg'>
                            <p className='text-lightText'>
                                KidsZone, a captivating and interactive e-commerce platform tailored exclusively for children. This portfolio project is a testament to my prowess in web development, harnessing technologies like Tailwind CSS, React.js, React Router, Firebase, Express.js, and MongoDB to curate a seamless user journey.
                            </p>
                        </div>
                        <div>
                            <button onClick={() => setIsModalOpen(true)} className='bg-lightText text-bodyColor px-3 py-2 rounded font-semibold'>Features & Technologies</button>

                            {/* Modal */}

                            {isModalOpen && (
                                <Modal3 setIsModalOpen={setIsModalOpen}></Modal3>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project3;