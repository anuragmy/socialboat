/* eslint-disable no-unused-vars */
import React from "react";
import ReactGa from "react-ga";

const Header = () => {
  const clickResume = () =>
    ReactGa.event({
      category: "Resume button - Header",
      action: "Clicked on resume button from header,",
    });
  const clickProjects = () =>
    ReactGa.event({
      category: "Project button - Header",
      action: "Clicked on project button from header,",
    });

  return (
    <nav className="space-x-10">
      <ul className="flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
        <li className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg">
          <a href="#experience" onClick={clickProjects}>
            Experience
          </a>
        </li>
        <li className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg">
          <a href="#projects" onClick={clickProjects}>
            Projects
          </a>
        </li>
        <li className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg">
          <a href="#contact">Contact</a>
        </li>
        {/* <li className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg">
          <a
            href="https://github.com/anuragmy/resume/blob/master/Anurag%20(2).pdf"
            target="_blank"
            onClick={clickResume}
            rel="noreferrer"
          >
            Resume
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
