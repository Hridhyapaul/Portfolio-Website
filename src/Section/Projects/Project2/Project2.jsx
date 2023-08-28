import React, { useState } from 'react';
import eSpeak from '../../../assets/Images/eSpeak.png'
import ProjectsLink2 from '../../../Shared/ProjectsLink/ProjectLink2/ProjectLink2'
import Modal2 from './Modal2';

const Project2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='lg:mt-20 mt-10'>

            {/* Large Screen */}

            <div className='lg:block hidden'>
                <div className='w-full py-[24px] px-[28px] rounded-md flex justify-center items-center gap-10 shadow-shadowOne'>
                    <div className='w-[55%] font-body text-left space-y-4'>
                        <div>
                            <p className='text-designColor font-semibold'>Featured Project</p>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-lightText font-semibold text-2xl w-[50%]'>Language Learning Platform</h3>
                                <button onClick={() => setIsModalOpen(true)} className='bg-lightText text-bodyColor px-3 py-2 rounded font-semibold'>Features & Technologies</button>
                            </div>

                            {/* Modal */}

                            {isModalOpen && (
                                <Modal2 setIsModalOpen={setIsModalOpen}></Modal2>
                            )}
                        </div>
                        <div className='border-2 border-lightText px-5 py-5 rounded-lg'>
                            <p className='text-lightText'>
                                A comprehensive foreign Language Learning Platform that merges cutting-edge technologies and innovative concepts to provide an immersive language learning experience. This project underscores my proficiency in a range of technologies and highlights my ability to create functional, user-centric web applications.
                            </p>
                        </div>
                        <div className='flex justify-start'>
                            <ProjectsLink2></ProjectsLink2>
                        </div>
                    </div>
                    <div className='w-[45%] bg-bodyColor'>
                        <img className='w-full h-[300px] rounded-md object-cover object-top hover:object-bottom duration-[10s] cursor-pointer' src={eSpeak} alt="" />
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}

            <div className='lg:hidden block'>
                <div className='w-full py-[24px] px-[28px] rounded-md flex flex-col gap-8 shadow-shadowOne'>
                    <div className=' bg-bodyColor'>
                        <img className='w-full h-[300px] rounded-md object-cover object-top hover:object-bottom duration-[10s] cursor-pointer' src={eSpeak} alt="" />
                    </div>
                    <div className='font-body text-center space-y-4'>
                        <div>
                            <p className='text-designColor font-semibold'>Featured Project</p>
                            <div>
                                <h3 className='text-lightText font-semibold text-2xl'>Language Learning Platform</h3>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <ProjectsLink2></ProjectsLink2>
                            </div>
                        </div>
                        <div className='border-2 border-lightText px-5 py-5 rounded-lg'>
                            <p className='text-lightText'>
                                A comprehensive foreign Language Learning Platform that merges cutting-edge technologies and innovative concepts to provide an immersive language learning experience. This project underscores my proficiency in a range of technologies and highlights my ability to create functional, user-centric web applications.
                            </p>
                        </div>
                        <div>
                            <button onClick={() => setIsModalOpen(true)} className='bg-lightText text-bodyColor px-3 py-2 rounded font-semibold'>Features & Technologies</button>

                            {/* Modal */}

                            {isModalOpen && (
                                <Modal2 setIsModalOpen={setIsModalOpen}></Modal2>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;