import React from "react";
import smart from "../../../assets/Images/Smart-Shoe-Store.jpg";
// import ProjectsLink3 from "../../../Shared/ProjectsLink/ProjectLink3/ProjectLink3";
import { useState } from "react";
import Modal4 from "./Modal4";
import ProjectLink4 from "../../../Shared/ProjectsLink/ProjectLink4/ProjectLink4";

const Project4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="lg:mt-20 mt-10">
      {/* Large Screen */}

      <div className="lg:block hidden">
        <div className="w-full py-[24px] px-[28px] rounded-md flex justify-center items-center gap-10 shadow-shadowOne">
          <div className="w-[55%] font-body text-right space-y-4">
            <div>
              <p className="text-designColor font-semibold">Featured Project</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-lightText text-bodyColor px-3 py-2 rounded font-semibold"
                >
                  Features & Technologies
                </button>
                <h3 className="text-lightText font-semibold text-2xl">
                  Smart Shoe Store
                </h3>

                {/* Modal */}

                {isModalOpen && (
                  <Modal4 setIsModalOpen={setIsModalOpen}></Modal4>
                )}
              </div>
            </div>
            <div className="border-2 border-lightText px-5 py-5 rounded-lg">
              <p className="text-lightText">
                The Smart Shoe Store website is a dynamic e-commerce platform
                designed to provide an engaging and efficient shopping
                experience for footwear enthusiasts. This project showcases my
                expertise in web development, user experience design, state
                management, content management, image hosting, API testing, and
                online payment integration.
              </p>
            </div>
            <div className="flex justify-end">
              <ProjectLink4></ProjectLink4>
            </div>
          </div>

          <div className="w-[45%] bg-bodyColor">
            <img
              className="w-full h-[300px] rounded-md object-cover object-top hover:object-bottom duration-[10s] cursor-pointer"
              src={smart}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Mobile Screen */}

      <div className="lg:hidden block">
        <div className="w-full py-[24px] px-[28px] rounded-md flex flex-col gap-8 shadow-shadowOne">
          <div className="bg-bodyColor">
            <img
              className="w-full h-[340px] rounded-md object-cover object-top hover:object-bottom duration-[10s]"
              src={smart}
              alt=""
            />
          </div>
          <div className="font-body text-center space-y-4">
            <div>
              <p className="text-designColor font-semibold">Featured Project</p>
              <div>
                <h3 className="text-lightText font-semibold text-2xl">
                  KidsZone
                </h3>
              </div>
              <div className="flex justify-center mt-2">
                <ProjectLink4></ProjectLink4>
              </div>
            </div>
            <div className="border-2 border-lightText px-5 py-5 rounded-lg">
              <p className="text-lightText">
                The Smart Shoe Store website is a dynamic e-commerce platform
                designed to provide an engaging and efficient shopping
                experience for footwear enthusiasts. This project showcases my
                expertise in web development, user experience design, state
                management, content management, image hosting, API testing, and
                online payment integration.
              </p>
            </div>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-lightText text-bodyColor px-3 py-2 rounded font-semibold"
              >
                Features & Technologies
              </button>

              {/* Modal */}

              {isModalOpen && <Modal4 setIsModalOpen={setIsModalOpen}></Modal4>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;
