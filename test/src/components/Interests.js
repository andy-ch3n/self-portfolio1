import React from "react";
import "../Assets/App.css";
import HobbyChart from './HobbyChart.js'


export default function Interests() {
  return (
    <div className="mt-8">
      <div className="md:container md:mx-auto pl-40 md:pl-0">
        <div className="md:grid grid-cols-2 mx-56 px-8 py-6 ">
          <div className="space-y-3 py-2">
            <h1 className="flex flex-col lg:flex text-black text-3xl pb-8 font-bold">Coding Interests and Experiences</h1>
            <div className="w-full  bg-gray-200 rounded">
              <div className="absolute top-0 h-7 rounded shim-darkblue w-6/6 flex justify-center">
                Learning new things
              </div>
            </div>

            <div className="relative w-full sm:w-4/5 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 rounded shim-red w-5/6 flex justify-center">
                React
              </div>
            </div>

            <div className="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 rounded shim-blue w-4/5 flex justify-center">
                HTML/CSS
              </div>
            </div>

            <div className="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 rounded shim-purple w-4/5 flex justify-center">
                MUI/Bootstrap/Tailwind
              </div>
            </div>

            <div className="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 rounded shim-green w-3/4 flex justify-center">
                Javascript
              </div>
            </div>

            <div className="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 rounded shim-yellow w-3/4 flex justify-center">
              Node/Express/SQL
              </div>
            </div>

            <div className="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 rounded shim-darkOrange w-3/4 flex justify-center">
                Git/npm/yarn
              </div>
            </div>

            <div className="relative w-full sm:w-3/4 bg-gray-200 rounded">
              <div className="absolute top-0 h-6 rounded shim-orange w-2/3 flex justify-center">
                Solidity/Web3
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden ">
            <div className="flex justify-center text-3xl md:mt-2 xl:mt-2 px-4 text-primary font-bold">
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