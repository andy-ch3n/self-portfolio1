// import Flicking, {
//   MoveEvent,
//   WillChangeEvent,
//   ViewportSlot,
// } from "@egjs/react-flicking";
// import Anime from "./Assets/animeapes.gif";
// import React from "react";
// import Catwalk from "./Assets/projectcatwalk.gif";
// import jobify from "./Assets/jobify.gif";
// import Mousefit from "./Assets/Mousefit.png";
// import Imprintgif from "./Assets/imprintgg.gif";
// import imprint from "./Assets/imprint.png";
// import { Arrow } from "@egjs/flicking-plugins";
// import "@egjs/flicking-plugins/dist/arrow.css";
// import { AutoPlay } from "@egjs/flicking-plugins";

// export default function Showcase() {
//   const plugins = [
//     new Arrow({
//     }),
//     new AutoPlay({
//       duration: 50000000,
//       direction: "NEXT",
//       stopOnHover: true,
//     })
//   ];

//   return (
//     <div class="container mx-auto">
//       <h1 class="py-4 justify-center flex text-primary text-4xl">Showcase</h1>
//       <Flicking
//         plugins={plugins}
//         viewportTag="div"
//         cameraTag="div"
//         align="center"
//         onMove={(e: MoveEvent) => {}}
//         onWillChange={(e: WillChangeEvent) => {}}
//         horizontal={true}
//         circular={false}
//         interruptable={false}
//       >
//         {/* https://naver.github.io/egjs-flicking/Plugins/ */}

//         <div class="max-w-sm rounded bg-secondary mt-8 pt-2 pl-6 ml-6 overflow-hidden">
//         <h1 class="text-4xl text-black py-4 text-center">Mousefit.gg</h1>
//       <img class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out overflow-hidden shadow-lg" src={Mousefit} alt="Mousefit.gg picture"/>
//           <div class="px-6 py-4">
//             <p class="text-gray-700 text-base">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Voluptatibus quia, nulla! Maiores et perferendis eaque,
//               exercitationem praesentium nihil.
//             </p>
//           </div>
//           <div class="px-6 pt-4 pb-2">
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               React
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               Material UI
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               Javascript
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               Node
//             </span>
//           </div>
//         </div>


//         <div class="max-w-sm rounded bg-secondary mt-8 pt-4 pl-8 ml-6 overflow-hidden shadow-lg">
//         <h1 class="text-4xl text-black py-4 text-center">Anime Apes</h1>
//         <img class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out" src={Anime} alt="Mousefit.gg picture"/>
//           <div class="px-6 py-4">
//             <p class="text-gray-700 text-base">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Voluptatibus quia, nulla! Maiores et perferendis eaque,
//               exercitationem praesentium nihil.
//             </p>
//           </div>
//           <div class="px-6 pt-4 pb-2">
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #photography
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #travel
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #winter
//             </span>
//           </div>
//         </div>



//         <div class="max-w-sm rounded bg-secondary mt-8 pt-4 pl-8 ml-6 overflow-hidden shadow-lg">
//       <h1 class="text-4xl text-black py-4 text-center hover:scale-110 transition duration-300 ease-in-out">Jobify</h1>
//         <img class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out" src={jobify} alt="jobify picture"/>
//           <div class="px-6 py-4">
//             <p class="text-gray-700 text-base">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Voluptatibus quia, nulla! Maiores et perferendis eaque,
//               exercitationem praesentium nihil.
//             </p>
//           </div>
//           <div class="px-6 pt-4 pb-2">
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #photography
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #travel
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #winter
//             </span>
//           </div>
//         </div>








//         <div class="max-w-sm bg-secondary pt-4 pl-8 ml-6 mt-20 rounded overflow-hidden shadow grow-1">
//       <h1 class="text-4xl text-black py-4 text-center">Project Catwalk</h1>
//         <img class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out" src={Catwalk} alt="Project Catwalk walkthrough"/>
//           <div class="px-6 py-4">
//             <p class="text-gray-700 text-base">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Voluptatibus quia, nulla! Maiores et perferendis eaque,
//               exercitationem praesentium nihil.
//             </p>
//           </div>
//           <div class="px-6 pt-4 pb-2">
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #photography
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #travel
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #winter
//             </span>
//           </div>
//         </div>


//         <div class="max-w-sm bg-secondary pt-4 pl-8 ml-6 mt-20 rounded overflow-hidden shadow-lg flex-1">
//       <h1 class="text-4xl text-black py-4 text-center">Imprint.gg</h1>
//         <img class="w-full pr-8 hover:scale-110 transition duration-300 ease-in-out" src={imprint} alt="Imprint.gg"/>
//           <div class="px-6 py-4">
//             <p class="text-gray-700 text-base">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Voluptatibus quia, nulla! Maiores et perferendis eaque,
//               exercitationem praesentium nihil.
//             </p>
//           </div>
//           <div class="px-6 pt-4 pb-2">
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #photography
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #travel
//             </span>
//             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               #winter
//             </span>

//           </div>

//         </div>



//         <ViewportSlot>
//           <span className="flicking-arrow-prev"></span>
//           <span className="flicking-arrow-next"></span>
//         </ViewportSlot>
//       </Flicking>
//     </div>
//   );
// }
