import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import '../ProjectLink2/ProjectLink2.css'
import { Link } from 'react-router-dom';

const ProjectLink2 = () => {
    return (
        <ul className='projectLink text-designColor'>
            <li className=''>
                <Link to='https://github.com/Hridhyapaul/eSpeak-Summer-camp-client'
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
                <Link to='https://github.com/Hridhyapaul/eSpeak-Summer-camp-server'
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
                <Link to='https://gilded-cucurucho-0c3153.netlify.app/'
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

export default ProjectLink2;