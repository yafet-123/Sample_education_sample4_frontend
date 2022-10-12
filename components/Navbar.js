import React from "react";
import Image from "next/image";
export function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 my-5 h-16">
      <h1 className="font-serif font-bold text-4xl text-slate-400 ">logo</h1>
      <Image
        src="/images/hambergerMenu.jpg"
        width={50}
        height={50}
        alt="Navbar Logo"
        className=""
      />
    </div>
  );
}
