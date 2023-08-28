import React from 'react';
import { HiXCircle } from "react-icons/hi";

const Modal2 = ({setIsModalOpen}) => {
    const technologies = ["HTML", "CSS", "Tailwind CSS", "React.js", "React Router", "React Hook", "Firebase", "React-Hook-Form", "React-Query", "Axios", "Stripe", "JWT", "Node.js", "Express.js", "MongoDB"]
    return (
        <div className="fixed z-20 inset-0 flex items-center justify-center py-32">
            <div className='modal-overlay fixed inset-0 bg-black opacity-30'></div>
            <div className='lg:modal-container bg-bodyColor lg:w-[70%] w-screen rounded shadow-lg z-50' data-aos="zoom-in-down">
                <div className='bg-designColor text-bodyColor pl-12 pr-4 py-4 flex justify-between items-center'>
                    <h2 className='lg:text-2xl text-xl font-bold'>Foreign Language Learning Website</h2>
                    <button onClick={() => setIsModalOpen(false)} className=''>
                        <HiXCircle className='text-4xl text-bodyColor hover:text-opacity-70 duration-300'></HiXCircle>
                    </button>
                </div>
                <div className='lg:modal-content lg:px-4 lg:py-[16px] px-4 py-4 max-h-[80vh] bg-white text-left overflow-y-auto'>
                    <div className='space-y-4 px-8 py-5 font-body'>
                        <div className=''>
                            <p>A comprehensive foreign language learning website that merges cutting-edge technologies and innovative concepts to provide an immersive language learning experience. This project underscores my proficiency in a range of technologies and highlights my ability to create functional, user-centric web applications. <br /> <br /> This project exemplifies my ability to integrate diverse technologies to build feature-rich web applications. By incorporating MongoDB, AXIOS, JWT, and dynamic dashboards, I showcased expertise in back-end development and authentication systems. The implementation of interactive language learning tools highlights my dedication to creating engaging user experiences. <br /> <br /> This project is a testament to my skills in web development, user experience design, authentication mechanisms, and role-based access controls.</p>
                        </div>
                        <div className=' text-bodyColor'>
                            <h1 className='text-2xl font-semibold'>Key Features:</h1>
                            <ul className='mt-4 space-y-2 list-outside list-disc pl-5'>
                                <li><span className='font-semibold'>Language Learning Platform:</span> The website offers a feature-rich language learning platform where users can engage with lessons, quizzes, and interactive exercises to enhance their language skills.</li>

                                <li><span className='font-semibold'>MongoDB CRUD Operations:</span> Leveraging MongoDB, I orchestrated seamless Create, Read, Update, and Delete operations to manage user profiles, course progress, and learning materials.</li>

                                <li><span className='font-semibold'>AXIOS for HTTP Requests:</span> AXIOS served as the bridge between the front-end and back-end, facilitating seamless data exchange and ensuring smooth user interactions.</li>

                                <li><span className='font-semibold'>Stripe Payment Integration:</span> The website seamlessly processes payments through Stripe, ensuring a secure and user-friendly payment experience for travelers.</li>

                                <li><span className='font-semibold'>JWT Authentication:</span>  I implemented robust JSON Web Tokens (JWT) for secure user authentication, enabling user registration, login, and personalized content access.</li>

                                <li><span className='font-semibold'>Multi-Dashboard System:</span> By designing distinct dashboards for administrators, instructors, and students, I tailored the user experience and functionalities to match different roles.</li>

                                <li><span className='font-semibold'>Private Routes and Role-Based Access:</span> Through private routes, I ensured data security and crafted role-specific access controls, delivering a personalized experience to users.</li>

                                <li><span className='font-semibold'>Innovative Learning Tools:</span> The website features interactive lessons, quizzes, and practice exercises, fostering a dynamic and engaging language learning environment.</li>

                                <li><span className='font-semibold'>User Roles and Dashboards:</span> Through user role differentiation and dedicated dashboards, I provided tailored experiences for administrators and travelers.</li>

                                <li><span className='font-semibold'>Private and Admin Routes: </span> To enhance security and user experience, I skillfully implemented private routes and admin routes for different user roles.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Technologies:</h1>

                            <ul className='flex justify-start items-center gap-3 flex-wrap mt-4'>
                                {
                                    technologies.map((technology, index) => (
                                        <li
                                            key={index}
                                            className='list-none text-sm bg-bodyColor text-lightText px-2 py-1 rounded-md'
                                        >
                                            {technology}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal2;