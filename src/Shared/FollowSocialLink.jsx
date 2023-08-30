import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const FollowSocialLink = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);
    return (
        <div className="lg:fixed z-10 py-5 flex lg:justify-start justify-center lg:w-screen w-full bg-bgColor lg:pl-56" data-aos="fade-down">
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex font-body items-center ">
                <p className="text-lightText lg:block hidden">Follow Me</p>
                <span className="lg:block hidden h-[2px] w-[12px] bg-lightText ml-2"></span>
                <ul className='socialDiv text-bgColor'>
                    <li className=''>
                        <Link to='https://www.linkedin.com/in/hridhya-paul-38099a114/'>
                            <span className=''>
                                <FaLinkedinIn className='icon'></FaLinkedinIn>
                            </span>
                            <span className='title'>LinkedIn
                            </span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='https://twitter.com/HridhyaPaul2'>
                            <span className=''>
                                <FaTwitter className='icon'></FaTwitter>
                            </span>
                            <span className='title'>Twitter
                            </span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='https://github.com/Hridhyapaul'>
                            <span className=''>
                                <FaGithub className='icon'></FaGithub>
                            </span>
                            <span className='title'>GitHub
                            </span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='https://t.me/Hridhyapaul'>
                            <span className=''>
                                <FaTelegramPlane className='icon'></FaTelegramPlane>
                            </span>
                            <span className='title'>Telegram
                            </span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='https://wa.me/01834526418'>
                            <span className=''>
                                <FaWhatsapp className='icon'></FaWhatsapp>
                            </span>
                            <span className='title'>Whatsapp
                            </span>
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default FollowSocialLink;