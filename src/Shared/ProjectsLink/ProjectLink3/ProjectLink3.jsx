import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import '../ProjectLink3/ProjectLink3.css';
import { Link } from 'react-router-dom';

const ProjectLink3 = () => {
    
    return (
        <ul className='projectLink text-designColor'>
            <li className=''>
                <Link to='https://github.com/Hridhyapaul/Food-Lover-Client' className='text-icon'>
                    <span className=''>
                        <TbBrandGithub className='icon'></TbBrandGithub>
                    </span>
                    <span className='title'>Client GitHub
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to='https://github.com/Hridhyapaul/Food-Lover-Server' className='text-icon'>
                    <span className=''>
                        <FaGithub className='icon'></FaGithub>
                    </span>
                    <span className='title'>Server GitHub
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to='https://deluxe-tarsier-e487f4.netlify.app/' className='text-icon'>
                    <span className=''>
                        <RxOpenInNewWindow className='icon'></RxOpenInNewWindow>
                    </span>
                    <span className='title'>Live Website
                    </span>
                </Link>
            </li>
        </ul>
    );
};

export default ProjectLink3;