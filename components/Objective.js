import React from "react";

export function Objective() {
  return (
    <div className="w-full h-full lg:h-screen px-24 bg-pink-400 pt-32">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-white text-4xl font-medium uppercase text-center mb-5 tracking-wide">
          the power of running{" "}
        </h1>
        <h3 className="text-slate-200 text-xl font-medium uppercase text-center mb-5 tracking-wide">
          join a network of more than 500 runners supporing our local running
          community{" "}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-20">
        <div className="bg-white w-96 h-[30rem] border rounded-lg p-5 flex flex-col justify-between mb-5">
          <div className="objecive-grid1 w-full h-1/2"></div>
          <div className="h-1/2 mt-5">
            <h1 className="text-slate-900 text-2xl font-normal uppercase text-center mb-2">
              Local Race
            </h1>
            <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              risus nullam eget felis eget nunc lobortis.
            </p>
          </div>
        </div>
        <div className="bg-white w-96 h-[30rem] border rounded-lg p-5 flex flex-col justify-between mb-5">
          <div className="objecive-grid2 w-full h-1/2"></div>
          <div className="h-1/2 mt-5">
            <h1 className="text-slate-900 text-2xl font-normal uppercase text-center mb-2">
              Networking
            </h1>
            <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              risus nullam eget felis eget nunc lobortis.
            </p>
          </div>
        </div>
        <div className="bg-white w-96 h-[30rem] border rounded-lg p-5 flex flex-col justify-between mb-5">
          <div className="objecive-grid3 w-full h-1/2"></div>
          <div className="h-1/2 mt-5">
            <h1 className="text-slate-900 text-2xl font-normal uppercase text-center mb-2">
              programs
            </h1>
            <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              risus nullam eget felis eget nunc lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
