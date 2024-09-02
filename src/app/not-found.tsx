"use client"
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const NotFound: FC = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 sm:mt-0 sm:justify-center items-center md:items-start h-screen md:mt-72 gap-10 sm:gap-28">
      <div className="">
        <Image
          src="/images/Snoozing_Black_Cat.PNG"
          alt="Cute Cartoon Black Cat Sleeping"
          width={200}
          height={200}
          className="w-44 sm:w-72 h-auto"
        />
      </div>
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="px-5 sm:px-0">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">Page Not Found</h1>
          <p className="mt-8 text-md sm:text-xl text-white">
            Finding the page got in the way of this cat&apos;s nap time.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="text-white text-md sm:text-lg">Try one of these pages instead:</p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 py-5">
            <Link href="/">
              <button className="bg-secondary-light w-44 py-3 rounded-lg text-sm sm:text-lg transition-shadow duration-300 ease-in-out hover:shadow-secondary-glow">Home</button>
            </Link>
            <Link href="/projects">
              <button className="bg-primary w-44 py-3 rounded-lg text-sm sm:text-lg transition-shadow duration-300 ease-in-out hover:shadow-glow">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;