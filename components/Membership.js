import React from "react";

export function Membership() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row w-full h-full lg:h-screen lg:pt-44 bg-slate-300">
        <div className="w-full lg:w-1/2">
          <div className="bg-transparent lg:bg-pink-400 w-full h-56 lg:relative mt-5 lg:mt-0">
            <div className="bg-white w-full lg:w-3/4 h-[30rem] p-10 lg:absolute lg:-top-10 lg:left-1/4 z-10">
              <h1 className="text-black text-4xl font-medium uppercase text-left mb-5 tracking-wide ">
                running club Membership
              </h1>

              <p className="text-left font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5 w-full lg:w-3/4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              <button className="float-left border rounded-lg border-pink-400 px-5 py-2 w-1/4">
                learn more
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0 mb-10">
          <div className="bg-transparent lg:bg-pink-400 w-full h-56 mt-56 lg:relative">
            <div className="hero-background w-full h-[30rem] lg:absolute lg:-top-3/4 lg:right-1/4"></div>
          </div>
        </div>
      </div>

      <div className="bg-white h-full mt-10">
        <div className="hidden lg:flex flex-col lg:flex-row mx-20">
          <div className="membership-grid1 w-96 h-96 mx-auto lg:-mt-48 border rounded-lg mb-5"></div>
          <div className="membership-grid2 w-96 h-96 mx-auto lg:-mt-20 border rounded-lg mb-5"></div>
          <div className="membership-grid3 w-96 h-96 mx-auto lg:-mt-48 border rounded-lg mb-5"></div>
          <div className="membership-grid4 w-96 h-96 mx-auto lg:-mt-20 border rounded-lg mb-5"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between m-20">
          <p className="lg:w-2/4 text-left font-serif tracking-wide leading-6 capitalize text-base mb-5 lg:pr-28">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h1 className="text-5xl font-light capitalize lg:w-1/2 lg:text-right lg:pl-28">
            join the networks of more than 500 runners
          </h1>
        </div>
      </div>
    </div>
  );
}
