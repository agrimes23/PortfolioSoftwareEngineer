import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="h-[100vh]">
        {/* Hero Section */}
        <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg h-[70vh] w-[60vw] flex flex-col items-center">
          <div className="w-[40vw] flex flex-col h-full justify-center gap-24">
            {/* Intro */}
            <div className="">
              {/* name */}
              <div className="text-[5rem] text-primary font-bold">
                Alex Grimes
              </div>

              {/* pitch */}
              <div className="text-[1.5rem] text-secondary">
                <h2>
                  A Software Engineer with experience in automating processes,
                  web development, and speech-to-text.
                </h2>
              </div>
            </div>

            {/* button container */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[1rem] text-white">Learn More About Me</h4>
              {/* buttons */}
              <div className="flex gap-8">
                <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">
                  Github Code
                </button>
                <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">
                  LinkedIn
                </button>
                <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">
                  Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="h-[100vh]">
        <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg h-[70vh] w-[60vw] flex items-center">
          {/* Title ("Recent Projects")*/}
          <div className="w-4/12 h-full pt-10 pl-20 text-[3rem] text-white">
            <h1>Recent Projects</h1>
          </div>

          {/* Recent Projects list */}
          <div className="flex flex-col w-8/12 h-full justify-between">
            {/* the list */}
            <div className="flex flex-col gap-8 justify-center h-full w-[90%] max-w-[900px]">
              <div className="flex items-center h-[10rem] rounded-lg bg-gray-800">
                <div className="flex flex-1 flex-col pl-10">
                  <p className="text-white">(Project Name)</p>
                  <p className="text-white">Last worked on: (Date)</p>
                </div>
                <div className="flex-grow-2">
                  <p className="text-white">Description</p>
                </div>
                <div className="flex-1 justify-end">
                  <p className="text-white pr-10">Tech</p>
                </div>
              </div>
              <div className="flex items-center h-[10rem] rounded-lg bg-gray-800">
                <div className="flex flex-1 flex-col pl-10">
                  <p className="text-white">(Project Name)</p>
                  <p className="text-white">Last worked on: (Date)</p>
                </div>
                <div className="flex-grow-2">
                  <p className="text-white">Description</p>
                </div>
                <div className="flex-1 justify-end">
                  <p className="text-white pr-10">Tech</p>
                </div>
              </div>
              <div className="flex items-center h-[10rem] rounded-lg bg-gray-800">
                <div className="flex flex-1 flex-col pl-10">
                  <p className="text-white">(Project Name)</p>
                  <p className="text-white">Last worked on: (Date)</p>
                </div>
                <div className="flex-grow-2">
                  <p className="text-white">Description</p>
                </div>
                <div className="flex-1 justify-end">
                  <p className="text-white pr-10">Tech</p>
                </div>
              </div>
            </div>
            {/* view all projects button */}
            <div className="flex w-[90%] pb-10 justify-center">
              <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Career */}

      <div className="h-[100vh]">
        <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg h-[70vh] w-[60vw] flex flex-col">
          <div className="flex justify-center">
            <p className="text-white text-[3rem] pt-10">Work Experience</p>
          </div>
          {/* Timeline line */}
          <div className="relative h-full pl-36 flex flex-col">
            {/* line */}
            <div className="relative bg-gray-500 h-[75%] w-[2px] rounded-lg">
              {/* Dots container */}
              <div className="absolute top-0 bottom-0 flex flex-col justify-between w-full">
                {/* dot */}
                <div>
                  <div className="absolute -left-2 top-[12%] rounded-full bg-purple-300 w-4 h-4"></div>
                </div>
                {/* dot */}
                <div className="absolute -left-2 top-[45%] rounded-full bg-purple-300 w-4 h-4"></div>
                {/* dot */}
                <div className="absolute -left-2 top-[80%] rounded-full bg-purple-300 w-4 h-4"></div>
              </div>
            </div>


            <div className="absolute flex flex-col gap-2 text-accent left-52 top-[5%] pr-10">
              <div>
                <h4 className="text-[1.2rem]">IT Junior Software Engineer</h4>
                <h6 className="italic text-[0.9rem]">ASC Brands</h6>
              </div>
              <p>
                Automated processes including sentiment analysis for customer service calls, website performance testing for lower performing web pages.
              </p>
            </div>

            <div className="absolute flex flex-col gap-2 text-accent left-52 top-[30%] pr-10">
              <div>
                <h4 className="text-[1.2rem]">Accountant</h4>
                <h6 className="italic text-[0.9rem]">UACJ North America</h6>
              </div>
              <p>
              Managed financial initiatives across North American, communicated with Japanese banks, streamlined processes through Power Automate.
              </p>
            </div>


            <div className="absolute  flex flex-col gap-2 text-accent left-52 top-[56%] pr-10">
              <div>
                <h4 className="text-[1.2rem]">Assistant Language Teacher at the JET Program</h4>
                <h6 className="italic text-[0.9rem]">Fukui Board of Education</h6>
              </div>
              <p>
              Collaborated with Japanese English teachers to develop engaging English learning activities for 450 middle school students.

              </p>
            </div>
            {/* view all projects button */}
            <div className="flex w-[90%] py-8 justify-center">
              <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">
                View All Work Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}

      <div className="h-[100vh]">
        <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg h-[70vh] w-[60vw] flex flex-col items-center text-accent">
          CONTACT
        </div>
      </div>
    </main>
  );
}
