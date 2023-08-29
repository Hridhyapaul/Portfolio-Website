import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../Banner/Banner.css';
import FollowSocialLink from '../../Shared/FollowSocialLink';
// import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Container from '../../Shared/Container';

const Banner = () => {

    const [text] = useTypewriter({
        words: ['Professional Coder.', 'Front-end Developer.', 'Web Developer.'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });

    const handleDownloadResume = () => {
        // Replace the file URL with the actual URL of your resume file
        const resumeUrl = '../../../Hridhya_Paul_Resume.pdf';

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Hridhya_Paul_Resume.pdf';
        link.click();
    };

    return (
        <Container>
            <div id='home'>
                <div className='lg:block hidden'>
                    <FollowSocialLink></FollowSocialLink>
                </div>
                <div className='lg:pl-56 bg-bgColor'>
                    {/* Large Screen */}
                    <div className='lg:block hidden'>
                        <div className='h-screen flex items-center'>
                            <div className='lg:flex justify-between w-screen gap-2'>
                                <div className='text-white font-body w-[50%] flex justify-center items-center' data-aos="fade-right">
                                    <div>
                                        <h1 className='text-[20px] font-body text-lightText'>Hey, This is</h1>
                                        <h1 className='text-[60px] font-semibold text-designColor'>Hridhya Paul</h1>
                                        <h1 className='text-[30px] font-semibold text-lightText'>a <span>{text}</span>
                                            <Cursor
                                                cursorColor='#19A7CE'
                                                cursorBlinking='true'
                                            />
                                        </h1>
                                        <h1 className='text-lightText font-body mt-3'>
                                            a passionate front-end developer specializing in React.js. I bring creativity, attention to detail, and a strong problem-solving mindset to every project.
                                        </h1>

                                        <div className='flex items-center gap-6'>
                                            <button onClick={handleDownloadResume} className='btn1 flex items-center gap-2 mt-6'><FaDownload></FaDownload> Download Resume</button>
                                            <button className='contact-btn flex items-center gap-2'>Contact me</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[50%]' data-aos="fade-left">
                                    <div className='h-screen flex justify-center items-end'>
                                        <img className='w-full mr-12' src='https://i.ibb.co/RSPhxQd/Portfolio.png' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Screen */}
                    <div className='lg:hidden block pt-20'>
                        <div className='pb-10'>
                            <div className='flex flex-col-reverse items-center justify-between w-full gap-16'>
                                <div className='text-white text-center font-body'>
                                    <div>
                                        <h1 className='text-[20px] font-body text-lightText'>Hey, This is</h1>
                                        <h1 className='text-[40px] font-semibold text-designColor'>Hridhya Paul</h1>
                                        <h1 className='text-[25px] font-semibold text-lightText'>a <span>{text}</span>
                                            <Cursor
                                                cursorColor='#19A7CE'
                                                cursorBlinking='true'
                                            />
                                        </h1>
                                        <h1 className='text-lightText font-body mt-3 mx-8'>
                                            a passionate front-end developer specializing in React.js. I bring creativity, attention to detail, and a strong problem-solving mindset to every project.
                                        </h1>
                                    </div>

                                    <div className='mt-3 flex justify-between'>
                                        <FollowSocialLink></FollowSocialLink>
                                    </div>

                                    <div className='flex justify-center items-center gap-6'>
                                        <button className='btn1 flex items-center gap-2'><FaDownload></FaDownload> Download Resume</button>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <img className='w-[400px]' src='https://i.ibb.co/RSPhxQd/Portfolio.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Container>
    );
};

export default Banner;