import React from 'react';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import Project1 from './Project1/Project1';
import Project2 from './Project2/Project2';
import Project3 from './Project3/Project3';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);
    return (
        <Container>
            <div id='projects' className='lg:pl-56 lg:pb-10'>
                <div className='lg:mt-24 mt-20 lg:text-center text-center' data-aos="zoom-out-up">
                    <SectionTitle subtitle='Some Things I have Built' title='My Best Projects'></SectionTitle>
                </div>
                <div className='lg:mr-12'>

                    {/* Project-01 */}
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <Project1></Project1>
                    </div>

                    {/* Project-02 */}
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <Project2></Project2>
                    </div>

                    {/* Project-03 */}
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <Project3></Project3>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Projects;