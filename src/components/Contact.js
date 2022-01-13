/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import ReactGa from "react-ga";

const Contact = () => {
  const container = useRef(null);
  React.useMemo(() => container, [container]);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./programmer.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  const clickResume = () =>
    ReactGa.event({
      category: "Resume button - Footer",
      action: "Clicked on resume button from footer,",
    });

  return (
    <article className="my-28" id="contact">
      <header className="px-5 text-2xl font-bold pt-10">
        <h2>Contact Me</h2>
        <p className="text-base font-thin">I'd love to hear your thoughts!</p>
      </header>
      <div className="md:mx-6 flex flex-col md:flex-row justify-between md:items-end">
        <div className="bg-gray px-6 py-8 md:rounded-lg shadow-lg justify-center my-7 md:w-6/12  ">
          <div>
            <p className="font-bold">Anurag</p>
            <p className="font-thin">New Delhi, India</p>
            <a
              href="mailto: anuragmy2729@gmail.com"
              className="border-b-2 mt-3 inline-block border-gray-500"
            >
              anuragmy2729@gmail.com
            </a>
          </div>
          {/* <a
            className="border-b-2 mt-3 inline-block border-gray-500"
            href="https://github.com/anuragmy/resume/blob/master/Anurag%20(2).pdf"
            target="_blank"
            onClick={clickResume}
            rel="noreferrer"
          >
            Resume
          </a> */}
          <div className="flex flex-row flex-wrap mt-7">
            <div className="mr-4">
              <a
                href="https://www.linkedin.com/in/anuragmy/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  <img
                    src="./images/icons/linkedin.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="mr-4">
              <a
                href="https://github.com/anuragmy"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  GitHub
                </span>
              </a>
            </div>

            {/* <a
              href="https://codepen.io/deelip7"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                <img
                  src="./images/icons/codepen.svg"
                  alt=""
                  width="24px"
                  height="24px"
                  className="mr-1"
                />
                CodePen
              </span>
            </a> */}
          </div>
        </div>
        <div className="m-auto mt-10 md:mt-0 max-w-xs md:max-w-sm">
          {/* <Avatar circle src={Pic} /> */}
          {/* <img src={Pic} min-width="380px" min-height="280px" alt="Anurag" /> */}

          <div className="container" ref={container} style={{ height: 250 }} />
        </div>
      </div>
    </article>
  );
};

export default Contact;
