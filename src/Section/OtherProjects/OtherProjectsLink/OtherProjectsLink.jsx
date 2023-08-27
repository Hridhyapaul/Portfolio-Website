import React from 'react';
import './OtherProjectsLink.css'
import { Link } from 'react-router-dom';

const OtherProjectsLink = ({ client, server, live }) => {
    return (
        <ul className='otherProjectLink text-bodyColor font-semibold'>
            <li className=''>
                <Link to={client} target='_blank' className='text-icon px-[10px] py-[6px]'>
                    <span className='lg:text-base text-sm'>Github Client
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to={server} target='_blank' className='text-icon px-[10px] py-[6px]'>
                    <span className='lg:text-base text-sm'>Github Server
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link to={live} target='_blank' className='text-icon px-[10px] py-[6px]'>
                    <span className='lg:text-base text-sm'>Live Website
                    </span>
                </Link>
            </li>
        </ul>
    );
};

export default OtherProjectsLink;