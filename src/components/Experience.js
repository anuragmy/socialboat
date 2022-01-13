import React from "react";

import experience from "../experienceDetails";

const Experince = () => {
  return (
    <>
      <article className="my-28 px-5" id="experience">
        <header className="text-2xl font-bold pt-10">
          <h2>Experience</h2>
        </header>
        <div className="my-7 space-y-24">
          {experience.map((project, index) => (
            <div
              className="flex flex-wrap md:justify-between md:items-center"
              key={index}
            >
              <img
                src={project.image}
                width="380px"
                height="280px"
                alt={project.title}
                onClick={() => {
                  window.open(project.link);
                }}
                className={
                  "w-full md:w-6/12 rounded-lg shadow-lg md:order-1 cursor-pointer"
                }
                //   index % 2 === 0
                //     ? "w-full md:w-6/12 rounded-lg shadow-lg cursor-pointer"
                //     : "w-full md:w-6/12 rounded-lg shadow-lg md:order-1 cursor-pointer"
                // }
              />

              <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
                <h3 className="uppercase font-bold text-lg">{project.title}</h3>
                <div className="flex overflow-auto space-x-3 pb-2 ">
                  {project.tools.map((disc, index) => (
                    <span
                      className="border border-gray-500 px-2 py-1 rounded-lg text-sm "
                      key={index}
                    >
                      {disc}
                    </span>
                  ))}
                </div>
                {/* <div className="w-auto flex space-x-5 relative">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img
                        src="./images/icons/external-link.svg"
                        alt="link to live website"
                        width="24px"
                        height="24px"
                      />
                    </a>
                  )}
                </div> */}

                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Experince;
