import React, { useEffect } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import Container from '../../Shared/Container';
import ProgressBar from "@ramonak/react-progress-bar";
import 'aos/dist/aos.css';
import AOS from 'aos';

const MySkills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);
    return (
        <Container>
            <div id='skill' className='lg:pl-56 lg:mt-24 mt-20 relative'>
                <div className='text-center' data-aos="zoom-in-down">
                    <SectionTitle title='My Skills' subtitle='Visit My Skills & Hire Me'></SectionTitle>
                </div>

                <div className='bg-bodyColor shadow-shadowOne rounded-lg lg:mr-12 lg:mt-20 mt-10 px-10 py-8 grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>HTML</p>
                            <p>90%</p>
                        </div>
                        
                        <ProgressBar
                            completed={90}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>CSS</p>
                            <p>80%</p>
                        </div>
                        <ProgressBar
                            completed={80}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>Tailwind CSS</p>
                            <p>80%</p>
                        </div>
                        <ProgressBar
                            completed={80}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>Bootstrap</p>
                            <p>70%</p>
                        </div>
                        <ProgressBar
                            completed={70}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="800" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>JavaScript</p>
                            <p>60%</p>
                        </div>
                        <ProgressBar
                            completed={60}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>React.js</p>
                            <p>60%</p>
                        </div>
                        <ProgressBar
                            completed={60}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1200" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>Rest API</p>
                            <p>70%</p>
                        </div>
                        <ProgressBar
                            completed={70}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1400" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>Node.js</p>
                            <p>50%</p>
                        </div>
                        <ProgressBar
                            completed={50}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1600" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>Express.js</p>
                            <p>60%</p>
                        </div>
                        <ProgressBar
                            completed={60}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1800" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>MongoDB</p>
                            <p>50%</p>
                        </div>
                        <ProgressBar
                            completed={50}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                    <div className='grid-col-1' data-aos="flip-right" data-aos-duration="1000" data-aos-delay="2000" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center text-lightText font-semibold font-body'>
                            <p>GIt & GitHub</p>
                            <p>80%</p>
                        </div>
                        <ProgressBar
                            completed={80}
                            bgColor='#19A7CE'
                            height="15px"
                            margin='10px 0'
                            labelAlignment="outside"
                            isLabelVisible={false}
                            transitionDuration="2s"
                            animateOnRender
                        />
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default MySkills;  