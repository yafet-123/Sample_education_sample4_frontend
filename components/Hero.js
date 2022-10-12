import Link from "next/link";
import React from "react";

export function Hero() {
  return (
    <div className="">
      <div className="hero-background w-full h-[40rem]"></div>
      <div className="bg-slate-900 w-full h-full lg:h-screen ">
        <div className="hidden lg:flex flex-col lg:flex-row mx-20">
          <div className="bg-white w-96 h-96 mx-auto -mt-20 border rounded-lg p-5 flex flex-col justify-between">
            <h1 className="text-slate-700 text-xl font-extrabold uppercase text-center">
              Programmes
            </h1>
            <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5 mx-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              risus nullam eget felis eget nunc lobortis.
            </p>
            <Link href="">
              <a className="text-base font-medium underline text-center">
                More
              </a>
            </Link>
          </div>
          <div className="bg-white w-96 h-96 mx-auto -mt-48 border rounded-lg p-5 flex flex-col justify-between">
            <h1 className="text-slate-700 text-xl font-extrabold uppercase text-center">
              Results
            </h1>
            <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5 mx-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              risus nullam eget felis eget nunc lobortis.
            </p>
            <Link href="">
              <a className="text-base font-medium underline text-center">
                More
              </a>
            </Link>
          </div>
          <div className="bg-white w-96 h-96 mx-auto -mt-20 border rounded-lg p-5 flex flex-col justify-between">
            <h1 className="text-slate-700 text-xl font-extrabold uppercase text-center">
              Coaching
            </h1>
            <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5 mx-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              risus nullam eget felis eget nunc lobortis.
            </p>
            <Link href="">
              <a className="text-base font-medium underline text-center">
                More
              </a>
            </Link>
          </div>
          <div className="bg-white w-96 h-96 mx-auto -mt-48 border rounded-lg p-5 flex flex-col justify-between">
            <h1 className="text-slate-700 text-xl font-extrabold uppercase text-center">
              Events
            </h1>
            <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5 mx-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              risus nullam eget felis eget nunc lobortis.
            </p>
            <Link href="">
              <a className="text-base font-medium underline text-center">
                More
              </a>
            </Link>
          </div>
        </div>

        <div className="text-white grid grid-cols-1 lg:grid-cols-2 mx-24 py-20 lg:py-0 lg:my-20">
          <h1 className="text-3xl lg:text-5xl font-light capitalize text-left w-full lg:w-1/2 mb-10">
            our programs that prompt running
          </h1>
          <div className="flex flex-col justify-between">
            <p className="text-left font-serif tracking-wide leading-6 capitalize text-base mb-10">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="float-left border rounded-lg px-5 py-2 w-1/4">
              learn more
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-300 px-0 lg:px-24 h-screen w-full relative">
        <div className="hidden lg:block bg-pink-400 w-96 h-full float-right mt-0 lg:-mt-72"></div>
        <div className="hero-background-two w-full lg:w-3/4 h-full lg:h-3/4 lg:absolute lg:right-48 pt-5 lg:-mt-48 ">
          <div className="bg-white w-full lg:w-[40rem] h-96 p-10 absolute bottom-0 lg:-bottom-72 left-0 lg:-left-20">
            <h1 className="text-slate-700 text-xl lg:text-2xl font-medium uppercase text-left mb-5 tracking-wide">
              running school
            </h1>

            <h1 className="text-black text-3xl lg:text-5xl font-medium uppercase text-left w-3/4 tracking-wide leading-[4rem] ">
              boost your running skills
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
