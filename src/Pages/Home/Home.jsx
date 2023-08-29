import About from '../../Section/About/About';
import Banner from '../../Section/Banner/Banner';
import ContactMe from '../../Section/ContactMe/ContactMe';
// import Experience from '../../Section/Experience/Experience';
import Footer from '../../Section/Footer/Footer';
import MySkills from '../../Section/MySkills/MySkills';
import Navigation from '../../Section/Navigation/Navigation';
import OtherProjects from '../../Section/OtherProjects/OtherProjects';
import Projects from '../../Section/Projects/Projects';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {
                isLoading ?
                    (
                        <div><Loader></Loader></div>
                    )
                    :
                    (
                        <div>
                            <div className='bg-bgColor lg:h-screen lg:fixed absolute z-20 border-r border-lightText border-opacity-10' data-aos="fade-right">
                                <Navigation></Navigation>
                            </div>
                            <div>
                                <Banner></Banner>
                            </div>
                            <div className='mb-12'>
                                <About></About>
                            </div>
                            {/* <div>
                                <Experience></Experience>
                            </div> */}
                            <div>
                                <Projects></Projects>
                            </div>
                            <div>
                                <OtherProjects></OtherProjects>
                            </div>
                            <div>
                                <MySkills></MySkills>
                            </div>
                            <div>
                                <ContactMe></ContactMe>
                            </div>
                            <div>
                                <Footer></Footer>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Home;