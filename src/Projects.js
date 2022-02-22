import React from "react";
import Anime from "./Assets/animeapes.gif";
import Catwalk from "./Assets/projectcatwalk.gif";
import "@egjs/react-flicking/dist/flicking.css";
import imprint from "./Assets/imprint.png";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import Flicking, {
  MoveEvent,
  WillChangeEvent,
  ViewportSlot,
} from "@egjs/react-flicking";
import Mousefit from './Assets/Mousefit.png'
import jobify from './Assets/jobify.gif'



export default function Projects() {
  const plugins = [
    new Arrow({}),
    // new AutoPlay({
    //   duration: 9000,
    //   direction: "NEXT",
    //   stopOnHover: true,
    // }),
  ];

  return (
    <div class="container mx-auto">
      <div class="mb-12 pt-2 flex items-center justify-center text-5xl text-black">
        Projects
      </div>
      <div class="">
        <Flicking
          plugins={plugins}
          viewportTag="div"
          cameraTag="div"
          align="prev"
          onMove={(e: MoveEvent) => {}}
          onWillChange={(e: WillChangeEvent) => {}}
          horizontal={true}
          circular={true}
        >
          {/* https://naver.github.io/egjs-flicking/Plugins/ */}

          <div class="max-w-sm rounded bg-secondary mt-8 pt-4 mb-2 pl-8 ml-6 overflow-hidden shadow-2xl outline outline-offset-2 outline-primary outline-1 ">
            <h1 class="text-4xl text-black py-4 text-center">Mousefit.gg</h1>
            <img
              class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out overflow-hidden shadow-lg"
              src={Mousefit}
              alt="Mousefit.gg picture"

            />
            <div class="px-6 py-4">
              <p class="text-gray-700 text-base">
              Liquid Hackathon 2 submission. Third place overall. Project designed to help users find their 'perfect' gaming mouse by having users take a 'survey' and then filtering their survey answers conditionally in a database
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Material UI
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Javascript
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Express
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                MongoDB
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Redux
              </span>
            </div>
            <div class="flex justify-between">
                <a href="https://github.com/andy-ch3n/Mousefit.gg" target="_blank" rel="noreferrer">
              <button class="text-primary text-2xl">Github</button>
              </a>
                <a href="https://devpost.com/software/mousefit-gg" target="_blank" rel="noreferrer">
              <button class="text-primary text-2xl mr-6">Hackathon</button>
              </a>
              </div>
          </div>

          <div class="max-w-sm rounded bg-secondary mt-8 mb-2 pt-4 pl-8 ml-6 overflow-hidden shadow-2xl outline outline-offset-2 outline-primary outline-1 ">
            <h1 class="text-4xl text-black py-4 text-center">Anime Apes</h1>
            <img
              class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out overflow-hidden shadow-lg"
              src={Anime}
              alt="Mousefit.gg picture"
            />
            <div class="px-6 py-8">
              <p class="text-gray-700 text-base">
                Decentralized application that incorporated solidity and Web3. Website that allowed users to connect Metamask wallet and buy NFT's.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Material UI
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Solidity
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Web3
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                HTML
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node
              </span>
            </div>
            <div class="flex mt-3 justify-center">
                <a href="https://7omy6a9xx15lokh.pages.dev/" target="_blank" rel="noreferrer">
              <button class="text-primary text-2xl">Website</button>
              </a>
              </div>
          </div>

          <div class="max-w-sm rounded bg-secondary mt-8 pt-4 mb-2 pl-8 ml-6 overflow-hidden shadow-2xl outline outline-offset-2 outline-primary outline-1 ">
            <h1 class="text-4xl text-black py-4 text-center hover:scale-110 transition duration-300 ease-in-out">
              Jobify
            </h1>
            <img
              class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out"
              src={jobify}
              alt="jobify picture"
            />
            <div class="px-6 py-4">
              <p class="text-gray-700 text-base">
              Jobify is an open-source job search portal for employers/job seekers of all industries and backgrounds. Project timeline was one week.
              </p>
              <div class="justify-center flex">
              </div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Material UI
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Axios
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                PostgreSQL
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Agile
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Express
              </span>

            </div>
            <div class="flex mt-3 justify-center">
                <a href="https://github.com/blue-ocean-team/Jobify" target="_blank" rel="noreferrer">
              <button class="text-primary text-2xl">Github</button>
              </a>
              </div>
          </div>

          <div class="max-w-sm rounded bg-secondary mt-8 pt-4 mb-2 pl-8 ml-6 overflow-hidden shadow-2xl outline outline-offset-2 outline-primary outline-1 ">
            <h1 class="text-4xl text-black py-4 text-center">
              Project Catwalk
            </h1>
            <img
              class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out"
              src={Catwalk}
              alt="Project Catwalk walkthrough"

            />
            <div class="px-6 py-4">
              <p class="text-gray-700 text-base">
              Project Catwalk is a MVP retail e-commerce client for browsing catalog products
              with a modern customer experience. This frontend project is built to serve product
              records from an external API.
              </p>
              <div class="flex justify-center">
              </div>
            </div>

            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React styled components
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Express
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Agile
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Axios
              </span>
            </div>
              <div class="flex mt-4 justify-center">
                <a href="https://github.com/fec-bareminimum/project-catwalk#readme" target="_blank" rel="noreferrer">
              <button class="text-primary text-2xl">Github</button>
              </a>
              </div>
          </div>

          <div class="max-w-sm rounded bg-secondary mt-8 pt-4 mb-2 pl-8 ml-6 overflow-hidden shadow-2xl outline outline-offset-2 outline-primary outline-1 ">
            <h1 class="text-4xl text-black py-4 text-center">Imprint.gg</h1>
            <img
              class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out"
              src={imprint}
              alt="Imprint.gg"
            />
            <div class="px-6 py-4">

              <p class="text-gray-700 text-base">
                Imprint.GG was a MVP demo done in 24 hours. This website pulled Apex Legends user data from the tracker.gg database
                and gave users a comprehensive dashboard on their stats.
              </p>

            </div>
            <div class="px-6 pt-4 pb-2">

              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Bootstrap
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Axios
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Express
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                HTML
              </span>
              </div>
              <div class="flex mt-4 justify-center">
                <a href="https://github.com/fec-bareminimum/project-catwalk#readme" target="_blank" rel="noreferrer">
              <button class="text-primary text-2xl">Github</button>
              </a>
            </div>

          </div>

          <ViewportSlot>
            <span className="flicking-arrow-prev"></span>
            <span className="flicking-arrow-next"></span>
          </ViewportSlot>
        </Flicking>
      </div>
    </div>
  );
}
