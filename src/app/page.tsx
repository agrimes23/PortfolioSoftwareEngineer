import Image from "next/image";
import ProjectsHome from "./components/ProjectsHome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-5 sm:pt-24 gap-52">
      <div className="my-5 sm:my-10">
        {/* Hero Section */}
        <div className=" rounded-lg py-10 sm:py-32 lg:py-0 lg:h-[70vh] w-[90vw] xl:w-[60vw] flex flex-col items-center">
          <div className="w-[80vw] xl:w-[40vw] flex flex-col h-full justify-center gap-10 sm:gap-24">
            {/* Intro */}
            <div className="px-5 sm:p-0">
              {/* name */}
              <div className="text-[3rem] sm:text-[4rem] md:text-[5rem] text-primary font-bold">
                Alex Grimes
              </div>

              {/* pitch */}
              <div className="text-[1.2rem] md:text-[1.5rem] text-secondary">
                <h2>
                  A Software Engineer with experience in automating processes,
                  web development, and speech-to-text.
                </h2>
              </div>
            </div>

            {/* button container */}
            <div className="flex flex-col gap-6">
              {/* buttons */}
              <div className="flex gap-8 flex-wrap justify-center sm:justify-start">
                <a
                  href="https://github.com/agrimes23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="colorful-btn py-5 w-[11rem] border-2 gradient-border text-white text-center"
                >
                  Github Code
                </a>
                <a
                  href="https://www.linkedin.com/in/alex-grimes-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="colorful-btn py-5 w-[11rem] border-2 gradient-border text-white text-center"
                >
                  LinkedIn
                </a>
                {/* <Link
                  href="/projects"
                  className="colorful-btn py-5 w-[11rem] border-2 gradient-border text-white text-center"
                >
                  Projects
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectsHome />

      {/* Experience */}

      <div className="flex my-10">
        <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg w-[90vw] xl:w-[60vw] flex flex-col p-10">
          <div className="flex justify-center mb-10">
            <p className="text-white text-[3rem]">Work Experience</p>
          </div>
          {/* Container for timeline and content */}
          <div className="relative flex flex-col items-start">
            {/* Timeline Line */}
            <div className="relative flex items-start">
              {/* Line */}
              <div className="relative bg-gray-500 w-[2px] rounded-lg h-full min-h-[200px]">
                {/* Dots container */}
                <div className="absolute top-0 bottom-0 flex flex-col justify-between w-full">
                  {/* Dot */}
                  <div className="absolute -left-2 top-[12%] rounded-full bg-purple-300 w-4 h-4"></div>
                  {/* Dot */}
                  <div className="absolute -left-2 top-[45%] rounded-full bg-purple-300 w-4 h-4"></div>
                  {/* Dot */}
                  <div className="absolute -left-2 top-[80%] rounded-full bg-purple-300 w-4 h-4"></div>
                </div>
              </div>

              {/* Experience Entries */}
              <div className="flex flex-col gap-12 pl-10">
                <div className="relative flex flex-col gap-2 text-accent">
                  <div>
                    <h4 className="text-[1.2rem]">
                      IT Junior Software Engineer
                    </h4>
                    <h6 className="italic text-[0.9rem]">ASC Brands</h6>
                  </div>
                  <p>
                    Automated processes including sentiment analysis for
                    customer service calls, website performance testing for
                    lower performing web pages.
                  </p>
                </div>

                <div className="relative flex flex-col gap-2 text-accent">
                  <div>
                    <h4 className="text-[1.2rem]">Accountant</h4>
                    <h6 className="italic text-[0.9rem]">UACJ North America</h6>
                  </div>
                  <p>
                    Managed financial initiatives across North America,
                    communicated with Japanese banks, streamlined processes
                    through Power Automate.
                  </p>
                </div>

                <div className="relative flex flex-col gap-2 text-accent">
                  <div>
                    <h4 className="text-[1.2rem]">
                      Assistant Language Teacher at the JET Program
                    </h4>
                    <h6 className="italic text-[0.9rem]">
                      Fukui Board of Education
                    </h6>
                  </div>
                  <p>
                    Collaborated with Japanese English teachers to develop
                    engaging English learning activities for 450 middle school
                    students.
                  </p>
                </div>
              </div>
            </div>

            {/* View All Projects Button */}
            <div className="flex w-full py-8 justify-center">
              <Link href="/experience">
                <button className="py-5 w-[13rem] border-2 gradient-border rounded-lg text-white colorful-btn">
                  View All Experience
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
