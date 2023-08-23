import React, { useEffect } from 'react';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactMe = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
        });
    }, []);

    return (
        <Container>
            <div id='contact' className='lg:mt-24 mt-20 lg:pl-56 lg:pr-12'>
                <div className='flex justify-center text-center lg:mb-20 mb-10' data-aos="zoom-in-down">
                    <SectionTitle title='Contact Me' subtitle='Contact & Hire Me'></SectionTitle>
                </div>

                <div className='bg-bodyColor shadow-shadowOne px-10 py-8 font-body' data-aos="zoom-in-up">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                            <div className='lg:col-span-1'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='input input-ghost px-5 py-4 text-lightText w-full rounded-full border-2 border-designColor bg-transparent focus:bg-transparent focus:text-lightText focus:textarea-info'
                                    {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <div className='lg:col-span-1'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='input input-ghost px-5 py-4 text-lightText focus:text-lightText w-full rounded-full border-2 border-designColor bg-transparent focus:bg-transparent focus:textarea-info'
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                {errors.email && <span className="text-red-500 text-sm">Please enter a valid email address</span>}
                            </div>


                            <div className='lg:col-span-2'>
                                <input
                                    placeholder='Subject'
                                    className='input input-ghost px-5 py-4 text-lightText focus:text-lightText w-full rounded-full border-2 border-designColor bg-transparent focus:bg-transparent focus:textarea-info'
                                    type='text' {...register("subject", { required: true })}
                                />
                                {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}

                            </div>

                            <div className='lg:col-span-2'>
                                <textarea
                                    placeholder='Message'
                                    className='textarea textarea-ghost text-base px-5 py-4 text-lightText focus:text-lightText w-full h-[200px] border-2 border-designColor bg-transparent focus:bg-transparent focus:textarea-info'
                                    {...register("message", { required: true })}></textarea>
                                {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>
                        </div>
                        <div className='flex justify-center mt-6'>
                            <button
                                type='submit'
                                className="border-2 border-designColor w-[200px] px-5 py-2 rounded-full text-lightText font-semibold hover:bg-designColor hover:text-bodyColor duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default ContactMe;