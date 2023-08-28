import React from 'react';
import { HiXCircle } from "react-icons/hi";

const Modal1 = ({ setIsModalOpen }) => {
    const technologies = ["HTML", "CSS", "Tailwind CSS", "React.js", "React Router", "React Hook", "Firebase", "React-Hook-Form", "React-Query", "Axios", "Stripe", "JWT", "Node.js", "Express.js", "MongoDB"]
    return (
        <div className="fixed z-20 inset-0 flex items-center justify-center py-32">
            <div className='modal-overlay fixed inset-0 bg-black opacity-30'></div>
            <div className='lg:modal-container bg-bodyColor lg:w-[70%] w-screen rounded shadow-lg z-50' data-aos="zoom-in-down">
                <div className='bg-designColor text-bodyColor pl-12 pr-4 py-4 flex justify-between items-center'>
                    <h2 className='lg:text-2xl text-xl font-bold'>Travel Agency</h2>
                    <button onClick={() => setIsModalOpen(false)} className=''>
                        <HiXCircle className='text-4xl text-bodyColor hover:text-opacity-70 duration-300'></HiXCircle>
                    </button>
                </div>
                <div className='lg:modal-content lg:px-4 lg:py-[16px] px-4 py-4 max-h-[80vh] bg-white text-left overflow-y-auto'>
                    <div className='space-y-4 px-8 py-5 font-body'>
                        <div className=''>
                            <p>A dynamic travel agency website that empowers travelers to explore, book accommodations, and seamlessly manage their journeys. This project demonstrates my proficiency in a range of technologies and showcases my ability to create a fully functional and user-centric web application. <br /> <br /> This project serves as a testament to my ability to wield a versatile set of technologies to create robust web applications. My utilization of MongoDB, AXIOS, JWT, Stripe, and Firebase showcases my expertise in back-end development, authentication mechanisms, and seamless payment processing. <br /> <br /> This project stands as a comprehensive showcase of my skills in web development, user experience design, payment integration, and authentication implementation.</p>
                        </div>
                        <div className=' text-bodyColor'>
                            <h1 className='text-2xl font-semibold'>Key Features:</h1>
                            <ul className='mt-4 space-y-2 list-outside list-disc pl-5'>
                                <li><span className='font-semibold'>Destination Selection:</span> Travelers can effortlessly browse and select destinations based on their preferred countries, enhancing their travel planning experience.</li>

                                <li><span className='font-semibold'>Accommodation Booking:</span> The website offers users a streamlined booking process, enabling them to secure accommodations for their chosen destinations with ease.</li>

                                <li><span className='font-semibold'>MongoDB CRUD Operations:</span> I skillfully integrated MongoDB to manage data, perform CRUD operations, and ensure accurate storage and retrieval of user and booking information.</li>
                                <li><span className='font-semibold'>AXIOS for HTTP Requests:</span> AXIOS was employed to establish smooth communication between the front-end and back-end, enabling efficient data transfer and updates.</li>

                                <li><span className='font-semibold'>JWT Authentication:</span> I implemented JSON Web Tokens (JWT) for secure user authentication, enabling seamless user registration, login, and personalized content access.</li>

                                <li><span className='font-semibold'>Stripe Payment Integration:</span> The website seamlessly processes payments through Stripe, ensuring a secure and user-friendly payment experience for travelers.</li>

                                <li><span className='font-semibold'>Firebase User Management:</span> Firebase was leveraged to streamline user login and registration processes, enhancing security and user engagement.</li>

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

export default Modal1;