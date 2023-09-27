import React from "react";
import { HiXCircle } from "react-icons/hi";

const Modal4 = ({setIsModalOpen}) => {
  const technologies = [
    "HTML",
    "Tailwind CSS",
    "Next.js",
    "Strapi",
    "Cloudinary",
    "Insomnia",
    "Redux",
    "Stripe Payment",
    "Postgres",
  ];
  return (
    <div className="fixed z-20 inset-0 flex items-center lg:justify-center py-32">
      <div className="modal-overlay fixed inset-0 bg-black opacity-30"></div>
      <div
        className="lg:modal-container bg-bodyColor lg:w-[70%] w-screen rounded shadow-lg z-50"
        data-aos="zoom-in-down"
      >
        <div className="bg-designColor text-bodyColor pl-12 pr-4 py-4 flex justify-between items-center">
          <h2 className="lg:text-2xl text-xl font-bold">Smart Shoe Store</h2>
          <button onClick={() => setIsModalOpen(false)} className="">
            <HiXCircle className="text-4xl text-bodyColor hover:text-opacity-70 duration-300"></HiXCircle>
          </button>
        </div>
        <div className="lg:modal-content lg:px-4 lg:py-[16px] px-4 py-4 max-h-[80vh] bg-white text-left overflow-y-auto">
          <div className="space-y-4 px-8 py-5 font-body">
            <div className="">
              <p>
                The Smart Shoe Store website is a dynamic e-commerce platform
                designed to provide an engaging and efficient shopping
                experience for footwear enthusiasts. This project showcases my
                expertise in web development, user experience design, state
                management, content management, image hosting, API testing, and
                online payment integration. <br /> <br />
                This project showcases my proficiency in a wide range of
                technologies and my ability to create a fully functional and
                user-centric e-commerce platform. It demonstrates expertise in
                web development, user experience design, payment integration,
                authentication implementation, and content management.
              </p>
            </div>
            <div className=" text-bodyColor">
              <h1 className="text-2xl font-semibold">Key Features:</h1>
              <ul className="mt-4 space-y-2 list-outside list-disc pl-5">
                <li>
                  <span className="font-semibold">Product Catalog:</span> The
                  website boasts an extensive catalog of shoes, categorized by
                  type and allowing users to easily browse and find their
                  desired footwear.
                </li>

                <li>
                  <span className="font-semibold">Shopping Cart:</span> Users
                  can add and remove items from their shopping carts, view order
                  summaries, and proceed to checkout seamlessly.
                </li>

                <li>
                  <span className="font-semibold">
                    Stripe Payment Integration:
                  </span>{" "}
                  The website securely processes payments through Stripe,
                  offering multiple payment methods and ensuring data security.
                </li>

                <li>
                  <span className="font-semibold">Responsive Design:</span> The
                  website is designed to work flawlessly on desktops, tablets,
                  and mobile devices, providing a consistent user experience.
                </li>

                <li>
                  <span className="font-semibold">Image Optimization:</span>{" "}
                  Cloudinary is used to store and optimize product images,
                  ensuring fast loading times and a visually appealing
                  presentation.
                </li>

                <li>
                  <span className="font-semibold">Content Management:</span>{" "}
                  Strapi serves as the content management system, enabling easy
                  updates and additions to product listings and other content.
                </li>
                <li>
                  <span className="font-semibold">API Testing:</span> Insomnia
                  is utilized for testing API endpoints, ensuring that data is
                  retrieved and updated accurately.
                </li>
                <li>
                  <span className="font-semibold">SEO-Friendly:</span> Next.js
                  provides server-side rendering and SEO optimization, improving
                  search engine rankings and site performance.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Technologies:</h1>

              <ul className="flex justify-start items-center gap-3 flex-wrap mt-4">
                {technologies.map((technology, index) => (
                  <li
                    key={index}
                    className="list-none text-sm bg-bodyColor text-lightText px-2 py-1 rounded-md"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal4;
