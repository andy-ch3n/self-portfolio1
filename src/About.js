import React from "react";
import Selfie from "./Assets/selfie.jpeg";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
      <div class="md:ml-10 md:mr-24 grid md:grid-cols-2 md:grid-rows-1 rounded overflow-hidden shadow-lg">
        <img class="md:w-96 w-64 pt-6 md:pt-0" src={Selfie} alt="selfie" />
        <div class="hidden md:block text-color-white text-5xl md:text-7xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi I'm Andy.")
                .pauseFor(2250)
                .deleteAll()
                .typeString("Welcome!")
                .pauseFor(2250)
                .start()
                .deleteAll()
                .typeString("Hi I'm Andy.");
            }}
          />
          </div>
          <div class="md:hidden md:py-0 py-4 text-color-white text-5xl md:text-7xl">
            Hi I'm Andy.
          <br />
          <p class="font-mono md:py-0 py-2 text-xl md:text-2xl  text-black">
            Welcome to my portfolio page! I am an aspiring Web developer. Here
            you can find the projects I've worked on in the past as well as
            projects I am currently working on.
          </p>
            </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <br></br>
          <p class="md:block hidden font-mono text-2xl text-primary">
            Click on the arrow below to learn more!
            <a href="#first">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 ml-16 md:ml-64 mt-6 flex items-center justify-center hover:fill-none cursor-pointer md:flex-col"
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
