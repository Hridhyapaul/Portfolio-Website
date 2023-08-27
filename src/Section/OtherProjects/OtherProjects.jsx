import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import OtherProjectsCard from './OtherProjectsCard';
import 'aos/dist/aos.css';
import AOS from 'aos';

const OtherProjects = () => {
    const [moreProjects, setMoreProjects] = useState([])

    useEffect(() => {
        fetch('Projects.js')
            .then(res => res.json())
            .then(data => setMoreProjects(data))
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);
    return (
        <Container>
            <div id='projects' className='lg:pl-56 lg:mt-0 mt-20'>
                <div className='mt-10 text-center' data-aos="zoom-in-down">
                    <SectionTitle subtitle='More Projects I will Build' title='Other Noteworthy Projects'></SectionTitle>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 lg:pr-12 mt-20 font-body text-lightText'>
                    {
                        moreProjects.map((project, index) => <OtherProjectsCard key={index} project={project} index={index}></OtherProjectsCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default OtherProjects;