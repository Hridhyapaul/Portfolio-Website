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
                <Link to='https://github.com/Hridhyapaul/KidsZone-Client' className='text-icon'>
                    <span className=''>
                        <TbBrandGithub className='icon'></TbBrandGithub>
                    </span>
                    <span className='title'>Client GitHub
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to='https://github.com/Hridhyapaul/KidsZone-Server' className='text-icon'>
                    <span className=''>
                        <FaGithub className='icon'></FaGithub>
                    </span>
                    <span className='title'>Server GitHub
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to='https://heartfelt-buttercream-d4c778.netlify.app/' className='text-icon'>
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