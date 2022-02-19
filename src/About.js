import React from "react";
import Selfie from "./Assets/selfie.jpeg";
import Typist from 'react-typist';


export default function About() {
  return (
    <>
      <div class="ml-10 mt-32 mr-24 grid grid-cols-2 grid-rows-1 rounded overflow-hidden shadow-lg">
        <div>
          <img class="w-96" src={Selfie} alt="selfie" />
        </div>
        <div class="text-color-white text-7xl">
          <p>Hi, I'm Andy.</p>
          <br />
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
          </div>
          <p class="font-mono text-2xl text-black">
            Welcome to my portfolio page! I am an aspiring Web developer. Here
            you can find the projects I've worked on in the past as well as
            projects I am currently working on.
          </p>
          <br></br>
          <p class="font-mono text-2xl text-primary">
            Click on the arrow below to learn more!
          <a href="#first">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 ml-64 mt-6 flex items-center justify-center hover:fill-none cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

//        class="h-10 w-10 ml-64 mt-6 flex items-center justify-center hover:fill-current hover:text-white cursor-pointer"

