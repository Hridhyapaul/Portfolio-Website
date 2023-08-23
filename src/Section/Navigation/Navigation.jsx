import { Link, scroller } from "react-scroll";
import { motion } from "framer-motion"
import '../Navigation/Navigation.css';
import logo from '../../assets/Images/logo.png'
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Navigation = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNavItemClick = (to) => {
        scroller.scrollTo(to, {
            smooth: true,
            offset: -70,
            duration: 500,
        });
        setMenuOpen(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);

    return (
        <div className="lg:mt-5 ">
            <div className="text-white font-semibold relative">
                {/* Large Screen */}
                <div className="flex justify-center items-center lg:mt-5">
                    <motion.img
                        initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
                        className="w-14 lg:block hidden" src={logo} alt="" />
                </div>

                <div className="flex justify-center w-44 lg:mt-10">
                    <ul className="space-x-2 text-center text-lightText font-body lg:block hidden">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>
                                <motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Home</motion.a>
                            </li>
                        </Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>
                                <motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">About</motion.a>
                            </li>
                        </Link>
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}

                        >
                            <li><motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Experience</motion.a>
                            </li>
                        </Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li><motion.a initial={{ y: -10, opacity: 0 }} animate={{ y2: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Projects</motion.a>
                            </li>
                        </Link>
                        <Link
                            activeClass="active"
                            to="skill"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            scrolling="true"
                        >
                            <li>
                                <motion.a initial={{ y: -10, opacity: 0 }} animate={{ y2: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Skills</motion.a>
                            </li>
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li><motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Contact</motion.a>
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Mobile Screen */}
                <div className="lg:hidden block bg-[#000000] w-screen px-5 py-5 border-b border-lightText border-opacity-20 ">
                    <div className="flex justify-between items-center">
                        <img className="w-10" src={logo} alt="" />
                        <FaBars onClick={handleMenuToggle} className="text-[25px] text-designColor lg:hidden block"></FaBars>
                    </div>
                </div>

                <div className={`w-screen lg:hidden absolute h-screen bg-bodyColor transition-all duration-500 ${isMenuOpen ? 'top-[81px] right-0 left-0 transition-all duration-500 object-left opacity-100' : 'top-[81px] left-[500px] opacity-0'}`}>
                    <div>
                        <ul className="space-x-2 text-center text-lightText my-10 font-body lg:hidden block">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >
                                <li>
                                    <motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Home</motion.a>
                                </li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => handleNavItemClick("about")}
                            >
                                <li>
                                    <motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">About</motion.a>
                                </li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >
                                <li><motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Experience</motion.a>
                                </li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >
                                <li><motion.a initial={{ y: -10, opacity: 0 }} animate={{ y2: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Projects</motion.a>
                                </li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >
                                <li>
                                    <motion.a initial={{ y: -10, opacity: 0 }} animate={{ y2: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Skills</motion.a>
                                </li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <li><motion.a initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className="hover:tracking-widest cursor-pointer hover:text-designColor duration-300 relative hoverDesign">Contact</motion.a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navigation;