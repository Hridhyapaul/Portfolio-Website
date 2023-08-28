import React, { useState } from 'react';
import travel from '../../../assets/Images/travel.png'
import ProjectsLink1 from '../../../Shared/ProjectsLink/ProjectLink1/ProjectsLink1';
import Modal1 from './Modal1';

const Project1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='lg:mt-20 mt-10'>

            {/* Large Screen */}

            <div className='lg:block hidden'>
                <div className='w-full py-[24px] px-[28px] rounded-md flex justify-center items-center gap-10 shadow-shadowOne'>
                    <div className='w-[45%] bg-bodyColor'>
                        <img className='w-full h-[300px] rounded-md object-cover object-top hover:object-bottom duration-[10s] cursor-pointer' src={travel} alt="" />
                    </div>
                    <div className='w-[55%] font-body text-right space-y-4'>
                        <div>
                            <p className='text-designColor font-semibold'>Featured Project</p>
                            <div className='flex justify-between items-center'>
                                <button onClick={() => setIsModalOpen(true)} className='bg-lightText text-bodyColor px-3 py-2 rounded font-semibold'>Features & Technologies</button>
                                <h3 className='text-lightText font-semibold text-2xl'>Travel Agency</h3>
                            </div>

                            {/* Modal */}

                            {isModalOpen && (
                                <Modal1 setIsModalOpen={setIsModalOpen}></Modal1>
                            )}
                        </div>
                        <div className='border-2 border-lightText px-5 py-5 rounded-lg'>
                            <p className='text-lightText'>
                                A dynamic travel agency website that empowers travelers to explore and book accommodations based on their preferred destinations. This project showcases my proficiency in several key technologies and highlights my ability to create a functional and user-friendly web application.
                            </p>
                        </div>
                        <div className='flex justify-end'>
                            <ProjectsLink1></ProjectsLink1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}

            <div className='lg:hidden block'>
                <div className='w-full py-[24px] px-[28px] rounded-md flex flex-col gap-8 shadow-shadowOne'>
                    <div className='bg-bodyColor'>
                        <img className='w-full h-[340px] rounded-md object-cover object-top hover:object-bottom duration-[10s] cursor-pointer' src={travel} alt="" />
                    </div>
                    <div className='font-body text-center space-y-4'>
                        <div>
                            <p className='text-designColor font-semibold'>Featured Project</p>
                            <div>
                                <h3 className='text-lightText font-semibold text-2xl'>Travel Agency</h3>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <ProjectsLink1></ProjectsLink1>
                            </div>
                        </div>
                        <div className='border-2 border-lightText px-5 py-5 rounded-lg'>
                            <p className='text-lightText'>
                                A dynamic travel agency website that empowers travelers to explore and book accommodations based on their preferred destinations. This project showcases my proficiency in several key technologies and highlights my ability to create a functional and user-friendly web application.
                            </p>
                        </div>
                        <div>
                            <button onClick={() => setIsModalOpen(true)} className='bg-lightText text-bodyColor px-3 py-2 rounded font-semibold'>Features & Technologies</button>

                            {/* Modal */}

                            {isModalOpen && (
                               <Modal1 setIsModalOpen={setIsModalOpen}></Modal1>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project1;