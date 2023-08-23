import { useState } from "react";
import WorkPlace1 from "../../Components/Works/WorkPlace1";
import WorkPlace2 from "../../Components/Works/WorkPlace2";
import WorkPlace3 from "../../Components/Works/WorkPlace3";
import WorkPlace4 from "../../Components/Works/WorkPlace4";
import WorkPlace5 from "../../Components/Works/WorkPlace5";
import Container from "../../Shared/Container";
import SectionTitle from "../../Shared/SectionTitle";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Experience = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);

    const [workPlace1, setWorkPlace1] = useState(true)
    const [workPlace2, setWorkPlace2] = useState(false)
    const [workPlace3, setWorkPlace3] = useState(false)
    const [workPlace4, setWorkPlace4] = useState(false)
    const [workPlace5, setWorkPlace5] = useState(false)

    const handleWork1 = () => {
        setWorkPlace1(true)
        setWorkPlace2(false)
        setWorkPlace3(false)
        setWorkPlace4(false)
        setWorkPlace5(false)
    }

    const handleWork2 = () => {
        setWorkPlace1(false)
        setWorkPlace2(true)
        setWorkPlace3(false)
        setWorkPlace4(false)
        setWorkPlace5(false)
    }

    const handleWork3 = () => {
        setWorkPlace1(false)
        setWorkPlace2(false)
        setWorkPlace3(true)
        setWorkPlace4(false)
        setWorkPlace5(false)
    }

    const handleWork4 = () => {
        setWorkPlace1(false)
        setWorkPlace2(false)
        setWorkPlace3(false)
        setWorkPlace4(true)
        setWorkPlace5(false)
    }

    const handleWork5 = () => {
        setWorkPlace1(false)
        setWorkPlace2(false)
        setWorkPlace3(false)
        setWorkPlace4(false)
        setWorkPlace5(true)
    }

    return (
        <Container>
            <div id="experience" className="lg:mt-24 mt-20">
                <div className="lg:pl-44 text-center" data-aos="zoom-out-up">
                    <SectionTitle title='Where I have Worked' subtitle='Previous Roles and Responsibilities'></SectionTitle>
                </div>
                <div className="lg:flex justify-center mt-12" data-aos="zoom-in-down">
                    <div className="lg:w-[80%] mt-10 flex flex-col lg:flex-row gap-16 lg:pl-56">
                        <ul className="lg:w-32 flex flex-col font-body">
                            <li
                                onClick={handleWork1}
                                className={`${workPlace1 ? "border-l-designColor text-designColor bg-bgColor" : "border-l-hoverColor text-lightText"} border-l-2 hover:bg-bgColor hover:text-designColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                            >
                                Facebook
                            </li>
                            <li
                                onClick={handleWork2}
                                className={`${workPlace2 ? "border-l-designColor text-designColor bg-bgColor" : "border-l-hoverColor text-lightText"} border-l-2 hover:bg-bgColor hover:text-designColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                            >
                                Google
                            </li>
                            <li
                                onClick={handleWork3}
                                className={`${workPlace3 ? "border-l-designColor text-designColor bg-bgColor" : "border-l-hoverColor text-lightText"} border-l-2 hover:bg-bgColor hover:text-designColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                            >
                                Twitter
                            </li>
                            <li
                                onClick={handleWork4}
                                className={`${workPlace4 ? "border-l-designColor text-designColor bg-bgColor" : "border-l-hoverColor text-lightText"} border-l-2 hover:bg-bgColor hover:text-designColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                            >
                                Instagram
                            </li>
                            <li
                                onClick={handleWork5}
                                className={`${workPlace5 ? "border-l-designColor text-designColor bg-bgColor" : "border-l-hoverColor text-lightText"} border-l-2 hover:bg-bgColor hover:text-designColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                            >
                                ReactBD
                            </li>
                        </ul>

                        {workPlace1 && <WorkPlace1></WorkPlace1>}
                        {workPlace2 && <WorkPlace2></WorkPlace2>}
                        {workPlace3 && <WorkPlace3></WorkPlace3>}
                        {workPlace4 && <WorkPlace4></WorkPlace4>}
                        {workPlace5 && <WorkPlace5></WorkPlace5>}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Experience;