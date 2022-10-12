import React from "react";

export function About() {
  return (
    <div className="bg-slate-300 px-24 h-screen w-full">
      <div className="about-background w-3/4 h-1/2 mt-16 float-right relative">
        <div className="bg-slate-800 w-[40rem] h-[25rem] p-10 absolute top-2/4 -left-52">
          <h1 className="text-white text-2xl font-light capitalize text-left mb-5 tracking-wide">
            about us
          </h1>

          <h1 className="text-white text-5xl font-normal capitalize text-left w-3/4 tracking-wide leading-[4rem] ">
            road runners new club
          </h1>
        </div>

        <div className="bg-white w-[40rem] h-[30rem] p-10 absolute top-3/4 right-1/4">
          <h1 className="text-black text-4xl font-light capitalize text-center mb-5 tracking-wide">
            contact us
          </h1>

          <input
            placeholder="Enter Your Name "
            type="text"
            className="w-full bg-transparent outline-none p-3 mb-3 placeholder:text-slate-500 border-b-2 border-black"
          />
          <input
            placeholder="Enter Your Valid Email"
            type="text"
            className="w-full bg-transparent outline-none p-3 mb-3 placeholder:text-slate-500 border-b-2 border-black"
          />
          <input
            placeholder="Enter Your Message"
            type="text"
            className="w-full bg-transparent outline-none p-3 mb-3 placeholder:text-slate-500 border-b-2 border-black"
          />

          <button className="border-2 py-2 px-5 mt-5 w-full border-black uppercase">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
