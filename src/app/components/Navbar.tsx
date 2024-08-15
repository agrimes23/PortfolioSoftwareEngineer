"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between py-5 px-10 shadow-lg text-accent">
      {/* LOGO */}
      <div className="w-2/12">
      <Link href="/">Alex Grimes</Link>
      </div>
      {/* Other Pages */}
      <div className="flex w-full">
        <ul className="flex flex-row gap-10 justify-end w-full">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
