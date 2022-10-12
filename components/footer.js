import React from "react";

export function Footer() {
  return (
    <div className="bg-black flex flex-col lg:flex-row items-center justify-between px-20 py-5">
      <h1 className="font-serif font-bold text-4xl text-slate-400 mb-5">
        logo
      </h1>
      <div className="flex justify-between items-center">
        <p className="text-white text-xl font-medium capitalize mb-5 tracking-wide pr-5">
          Home
        </p>

        <p className="text-white text-xl font-medium capitalize mb-5 tracking-wide pr-5">
          Contact
        </p>

        <p className="text-white text-xl font-medium capitalize mb-5 tracking-wide pr-5">
          Page1
        </p>

        <p className="text-white text-xl font-medium capitalize mb-5 tracking-wide pr-5">
          Page2
        </p>

        <p className="text-white text-xl font-medium capitalize mb-5 tracking-wide pr-5">
          Page3
        </p>
      </div>
    </div>
  );
}
