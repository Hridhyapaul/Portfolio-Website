import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import '../ProjectLink4/ProjectLink4.css';
import { Link } from 'react-router-dom';

const ProjectLink4 = () => {
  return (
    <ul className="projectLink text-designColor">
      <li className="">
        <Link
          to="https://github.com/Hridhyapaul/e-commerce-shoe-store-clientSide"
          target="_blank"
          className="text-icon"
        >
          <span className="">
            <TbBrandGithub className="icon"></TbBrandGithub>
          </span>
          <span className="title">Client GitHub</span>
        </Link>
      </li>
      <li className="">
        <Link
          to="https://github.com/Hridhyapaul/e-commerce-shoe-store-backend"
          target="_blank"
          className="text-icon"
        >
          <span className="">
            <FaGithub className="icon"></FaGithub>
          </span>
          <span className="title">Server GitHub</span>
        </Link>
      </li>
      <li className="">
        <Link
          to="https://e-commerce-shoe-store-client-side.vercel.app"
          target="_blank"
          className="text-icon"
        >
          <span className="">
            <RxOpenInNewWindow className="icon"></RxOpenInNewWindow>
          </span>
          <span className="title">Live Website</span>
        </Link>
      </li>
    </ul>
  );
};

export default ProjectLink4;
