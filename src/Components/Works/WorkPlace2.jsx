import React from 'react';
import { motion } from 'framer-motion';
import { TiArrowForwardOutline } from "react-icons/ti";

const WorkPlace2 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='w-full font-body text-lightText space-y-6'
        >
            <div>
                <h2 className='font-semibold text-xl'>Full Stack Developer <span className='text-designColor'>@Google</span></h2>
                <p className='text-sm text-lightText text-opacity-60'>January 2022 - December 2022</p>
            </div>
            <div>
                <ul className='space-y-3'>
                    <li className='flex items-start gap-2'>
                        <span><TiArrowForwardOutline className='text-designColor text-[20px]'></TiArrowForwardOutline></span>
                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                    </li>
                    <li className='flex items-start gap-2'>
                        <span><TiArrowForwardOutline className='text-designColor text-[20px]'></TiArrowForwardOutline></span>
                        Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify
                    </li>
                    <li className='flex items-start gap-2'>
                        <span><TiArrowForwardOutline className='text-designColor text-[20px]'></TiArrowForwardOutline></span>
                        Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default WorkPlace2;