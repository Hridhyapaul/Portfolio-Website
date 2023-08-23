import SectionTitle from "../../Shared/SectionTitle";
import image from "../../assets/Images/About.png"
import Container from "../../Shared/Container";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);
    return (
        <Container>
            <div id="about">
                <div className="lg:hidden block mt-10 text-center" data-aos="fade-down">
                    <SectionTitle title='About Me' subtitle='VISIT MY PORTFOLIO & HIRE ME'></SectionTitle>
                </div>
                <div className="lg:pl-56 lg:pr-12 lg:mt-24 mt-10">
                    <div className="lg:flex justify-center items-center gap-14 lg:border-b-4 lg:border-opacity-20 lg:border-bgColor lg:pb-24">
                        <div className="bg-boxBg p-4 shadow-shadowOne rounded-3xl lg:w-[30%]" data-aos="fade-right">
                            <div className="flex justify-center">
                                <img src={image} className="w-full h-[400px] object-cover rounded-2xl" alt="" />
                            </div>
                        </div>
                        <div className="lg:w-[70%]" data-aos="fade-left">
                            <div className="lg:block hidden">
                                <SectionTitle title='About Me' subtitle='VISIT MY PORTFOLIO & HIRE ME'></SectionTitle>
                            </div>
                            <div className="lg:mt-5 mt-10">
                                <p className="text-lightText lg:text-left text-center font-body">
                                    Welcome to my portfolio website! I'm Hridhya Paul, a passionate Front-end Web Developer with expertise in HTML, CSS, JavaScript, and React. With a strong foundation in these technologies, I strive to create stunning and interactive user experiences. <br /> <br />

                                    Over the years, I have honed my skills and gained hands-on experience in building responsive websites that seamlessly adapt to various screen sizes and devices.
                                    One of my primary focuses is creating clean and elegant user interfaces. I believe that a well-designed website not only captivates users but also enhances their overall experience. By combining my knowledge of HTML, CSS, and JavaScript, I can transform static designs into dynamic and engaging web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default About;