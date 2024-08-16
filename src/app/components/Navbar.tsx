"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row w-full justify-between py-5 px-10 shadow-lg text-accent">
      {/* LOGO */}
      <div className="w-2/12">
        <Link href="/">Alex Grimes</Link>
      </div>
      {/* Other Pages */}
      <div className={`hidden lg:flex w-full`}>
        <ul className="flex flex-row gap-10 justify-end w-full">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
        </ul>
      </div>

      <div
        className="z-30 flex lg:hidden flex-col cursor-pointer sm:px-5"
        onClick={handleToggle}
      >
        <div
          className={`w-9 h-[2px] bg-white my-0.5 transition-transform duration-400 ${
            isOpen ? "transform translate-y-2 rotate-[-45deg]" : ""
          }`}
        ></div>
        <div
          className={`w-9 h-[2px] bg-white my-1 transition-opacity duration-400 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-9 h-[2px] bg-white my-0.5 transition-transform duration-400 ${
            isOpen ? "transform -translate-y-2 rotate-[45deg]" : ""
          }`}
        ></div>
      </div>
          {/* Overlay and Drawer */}
          {isOpen && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-gray-800 opacity-50 z-20 duration-1000 ${
              isOpen ? "opacity-50 z-20" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div
            className={`fixed flex flex-col justify-center items-center text-lg gap-5 z-30 top-0 left-0 bottom-0 bg-gray-700 w-[250px] sm:w-[400px] text-white transform transition-transform duration-1000 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Link href="/projects">
              <span
                onClick={() => setIsOpen(false)}
                className="hover:underline cursor-pointer"
              >
                Projects
              </span>
            </Link>
            <Link href="/experience">
              <span
                onClick={() => setIsOpen(false)}
                className="hover:underline cursor-pointer"
              >
                Experience
              </span>
            </Link>
          </div>
        </>
      )}

    </div>
  );
};

export default Navbar;
