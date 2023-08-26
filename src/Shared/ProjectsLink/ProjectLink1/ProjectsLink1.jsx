import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import '../ProjectLink1/ProjectsLink1.css'
import { Link } from 'react-router-dom';

const ProjectsLink1 = () => {
    return (
        <ul className='projectLink text-designColor'>
            <li className=''>
                <Link to='https://github.com/Hridhyapaul/travel-agency-client'
                    target='_blank'
                    className='text-icon'>
                    <span className=''>
                        <TbBrandGithub className='icon'></TbBrandGithub>
                    </span>
                    <span className='title'>Client GitHub
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to='https://github.com/Hridhyapaul/travel-agency-server'
                    target='_blank'
                    className='text-icon'>
                    <span className=''>
                        <FaGithub className='icon'></FaGithub>
                    </span>
                    <span className='title'>Server GitHub
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to='https://zippy-chebakia-a74396.netlify.app/'
                    target='_blank'
                    className='text-icon'>
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

export default ProjectsLink1;