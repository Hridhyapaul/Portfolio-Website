import React from 'react';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    
    return (
        <div className='lg:pl-44'>
            <footer className="footer footer-center p-10 mt-28 bg-bgColor font-body text-lightText rounded">
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <span className='bg-lightText text-bgColor rounded-full cursor-pointer text-[16px] px-2 py-2'>
                            <Link to='https://www.linkedin.com/in/hridhya-paul-38099a114/'><FaLinkedinIn className='icon'></FaLinkedinIn></Link>
                        </span>
                        <span className='bg-lightText text-bgColor rounded-full cursor-pointer text-[16px] px-2 py-2'>
                            <Link to='https://twitter.com/HridhyaPaul2'><FaTelegramPlane className='icon'></FaTelegramPlane></Link>
                        </span>
                        <span className='bg-lightText text-bgColor rounded-full cursor-pointer text-[16px] px-2 py-2'>
                            <Link to='https://github.com/Hridhyapaul'><FaGithub className='icon'></FaGithub></Link>
                        </span>
                        <span className='bg-lightText text-bgColor rounded-full cursor-pointer text-[16px] px-2 py-2'>
                            <Link to='https://t.me/Hridhyapaul'><FaTwitter className='icon'></FaTwitter></Link>
                        </span>
                        <span className='bg-lightText text-bgColor rounded-full cursor-pointer text-[16px] px-2 py-2'>
                            <Link to='https://wa.me/01834526418'><FaWhatsapp className='icon'></FaWhatsapp></Link>
                        </span>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Hridhya Paul</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;