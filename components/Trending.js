import React from "react";

export function Trending() {
  return (
    <div className="bg-slate-800 w-full h-full py-20">
      <div className="hidden lg:flex mx-20 relative">
        <div className="trending-grid1 w-[30rem] h-[35rem]"></div>
        <div className="trending-grid2 w-[30rem] h-[35rem] absolute top-10 left-[25rem] z-20"></div>
        <div className="hidden lg:block w-[30rem] h-[30rem] bg-pink-400 z-10 absolute top-20 left-[27rem]"></div>
        <div className="trending-grid3 w-[25rem] h-[35rem] absolute -top-10 left-[50rem]"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mx-20 mt-10 lg:mt-20">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-white text-5xl font-normal capitalize text-left mb-5 tracking-wide w-full lg:w-2/4">
            top running trends of 2021
          </h1>
          <p className="lg:w-2/4 text-left font-serif tracking-wide leading-6 capitalize text-base mb-5 lg:pr-28 text-white">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col justify-between items center">
          <p className="lg:w-2/4 text-left font-serif tracking-wide leading-6 capitalize text-base mb-5 lg:pr-28 text-white">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="lg:w-1/4 py-2 px-5 mt-5 border-white bg-pink-400 uppercase">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
}
