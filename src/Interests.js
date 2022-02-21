import React from "react";
import "./Assets/App.css";
import AboutBio from './AboutBio.js'
import HobbyChart from './HobbyChart.js'


export default function Interests() {
  return (
    <div class="mt-8">


      <div class="container mx-auto">
        <div class="grid grid-cols-2 mx-56 px-8 py-6">
          <div class="space-y-3 py-2">
            <h1 class="flex flex-col lg:flex text-primary text-2xl pb-8">Coding Interests and Experiences</h1>
            <div class="w-full md:w-1/2 bg-gray-200 rounded">
              <div class="absolute top-0 h-7 rounded shim-darkblue w-6/6 flex justify-center">
                Learning new things
              </div>
            </div>

            <div class="relative w-full sm:w-4/5 bg-gray-200 rounded">
              <div class="absolute top-0 h-6 rounded shim-red w-5/6 flex justify-center">
                React
              </div>
            </div>

            <div class="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div class="absolute top-0 h-6 rounded shim-blue w-4/5 flex justify-center">
                HTML/CSS
              </div>
            </div>

            <div class="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div class="absolute top-0 h-6 rounded shim-purple w-4/5 flex justify-center">
                MUI/Bootstrap/Tailwind
              </div>
            </div>

            <div class="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div class="absolute top-0 h-6 rounded shim-green w-3/4 flex justify-center">
                Javascript
              </div>
            </div>

            <div class="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div class="absolute top-0 h-6 rounded shim-yellow w-3/4 flex justify-center">
              Node/Express/SQL
              </div>
            </div>

            <div class="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div class="absolute top-0 h-6 rounded shim-darkOrange w-3/4 flex justify-center">
                Git/npm/yarn
              </div>
            </div>

            <div class="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div class="absolute top-0 h-6 rounded shim-orange w-2/3 flex justify-center">
                Solidity/Web3
              </div>
            </div>
          </div>
          <div class="rounded-lg overflow-hidden ">
            <div class="flex justify-center text-3xl py-0 px-4 text-primary">
              Hobbies{" "}
            </div>
           <HobbyChart/>
          </div>
          <div>
        </div>
        </div>
      </div>

      </div>
  );
}
