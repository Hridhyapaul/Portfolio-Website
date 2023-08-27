import React, { useEffect, useState } from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { HiOutlineFolder, HiXCircle } from "react-icons/hi";
import OtherProjectsLink from './OtherProjectsLink/OtherProjectsLink';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import '../OtherProjects/OtherProjectsLink/OtherProjectsLink.css'

const OtherProjectsCard = ({ project }) => {
    const { githubClient, githubServer, image, liveLink, projectName, technologies, description } = project;

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                setIsModalOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);

    return (
        <div className={`col-span-1 px-5 py-4 rounded-md h-[300px] bg-bodyColor shadow-shadowOne ${isModalOpen ? '' : 'hover:scale-105 duration-300'}`} data-aos="fade-up">
            <div className='space-y-3'>
                <div className='text-3xl flex justify-between items-center'>
                    <HiOutlineFolder className='text-designColor'></HiOutlineFolder>
                    <Link to={liveLink} target="_blank" className="tooltip">
                        <span>
                            <RxOpenInNewWindow className='icon hover:text-designColor'></RxOpenInNewWindow>
                        </span>
                        <span className="tooltiptext">
                            Live Link
                        </span>
                    </Link>
                </div>
                <h1 className='text-2xl font-bold w-fit cursor-pointer hover:text-designColor duration-300'>{projectName}</h1>
                <h1 className='text-sm line-clamp-6'>{description}</h1>
            </div>
            <div className=''>
                <button onClick={() => setIsModalOpen(true)} className='btn1 mt-4'>Preview</button>

                {isModalOpen && (
                    <div className='fixed inset-0 flex items-center lg:justify-center z-50 py-20' >
                        <div className='modal-overlay fixed inset-0 bg-lightText opacity-50'></div>
                        <div className='lg:modal-container bg-bodyColor lg:w-[70%] w-screen rounded shadow-lg z-50' data-aos="zoom-in-down">
                            <div className='bg-designColor text-bodyColor px-4 py-4 flex justify-between items-center'>
                                <h2 className='lg:text-2xl text-xl font-bold'>{projectName}</h2>
                                <button onClick={() => setIsModalOpen(false)} className=''>
                                    <HiXCircle className='text-4xl text-bodyColor hover:text-opacity-70 duration-300'></HiXCircle>
                                </button>
                            </div>
                            <div className='lg:modal-content lg:px-4 lg:py-[16px] px-4 py-4 max-h-[80vh] overflow-y-auto'>
                                <div className='space-y-4'>
                                    <div className=''>
                                        <img className='h-[400px] w-full object-cover object-top hover:object-bottom duration-[6s] rounded-md ' src={image} alt="" />
                                    </div>
                                    <div className=' text-bodyColor space-y-4'>
                                        <div className='flex justify-start items-center gap-3 flex-wrap'>
                                            {
                                                technologies.map((technology, index) => (
                                                    <li key={index} className='list-none text-sm bg-bodyColor text-lightText px-2 py-1 rounded-md'>{technology}</li>
                                                ))
                                            }
                                        </div>
                                        <div className='border-b-2 pb-6 border-lightText border-opacity-10'>
                                            <OtherProjectsLink live={liveLink} server={githubServer} client={githubClient}></OtherProjectsLink>
                                        </div>

                                        <div className='mt-10'>
                                            <div className='border-2 mt-6 border-lightText px-5 py-5 rounded-lg text-lightText'>
                                                <p className=''>{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OtherProjectsCard;