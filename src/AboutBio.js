import React from "react";
import Interests from "./Interests.js";

export default function AboutBio() {
  return (
    <div className="container mx-auto">
      <div className="mb-16 pb-12 pr-16 md:pr-0 md:x-16">
        <h1 className="flex justify-center mb-12 text-5xl text-black py-4 font-bold">
          About Me
        </h1>
        <p className="text-lg md:text-xl pr-8 md:mx-72 mb-8 flex justify-center font-medium text-black">
          In 2021, I made the career switch from a market analyst role to a
          software developer. The ability to build technology and make lives around me easier appealed to me, and after coding my first project I knew I had to make the switch. More importantly, my path to becoming a software engineer has taught me that
          there is always something new to learn, and always new technologies to keep up with. I enjoy being able to have a skill set that is desired in almost every industry and
          to have the potential to morph into the many different types of tech roles. Becoming a software engineer has helped me understand how
          websites and applications operate and has inspired me to build useful and scalable technology.

        </p>
        <div className="flex justify-center pr-64 md:pr-0">
        <Interests />
        </div>
        <br />
        <h1 id="third" className="flex justify-center mb-12 text-5xl text-black py-4 font-bold">
          Education
        </h1>
        <div className="flex justify-center">
          <ol className="relative border-l border-primary dark:border-gray-700 px-2">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-blue dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-bold text-gray-900">
                Completed Hack Reactor - LA Cohort
              </h3>
              <time className="mb-1 text-lg font-normal leading-none text-white">
                December 2021
              </time>
              <p className="mb-4 text-base font-normal text-gray-500">
                12 week Immersive Software Engineering Bootcamp.
              </p>
              <a
                rel="noreferrer"
                href="https://github.com/andy-ch3n"
                target="_blank"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-black bg-white rounded-lg border border-primary hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:text-primary dark:border-gray-600 dark:hover:text-primary"
              >
                Projects &nbsp; {" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-bold text-gray-900">
                Began Hack Reactor
              </h3>
              <time className="mb-1 text-lg font-normal leading-none text-white">
                July 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-500">
               3 month pre-tests. Learning Javascript, HTML/CSS, JQuery fundamentals.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-bold text-gray-900">
                Graduated from UC San Diego
              </h3>
              <time className="mb-1 text-lg font-normal leading-none text-white">
                December 2018
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-500">
              B.A in Economics. Minor in Business Minor with a concentration in Finance.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
