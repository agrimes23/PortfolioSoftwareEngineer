import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="h-[100vh]">
        {/* Hero Section */}
        <div className="bg-[#35374B] rounded-lg h-[70vh] w-[60vw] flex flex-col items-center">
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
        <div className="bg-[#35374B] rounded-lg h-[70vh] w-[60vw] flex items-center">
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
        <div className="bg-[#35374B] rounded-lg h-[70vh] w-[60vw] flex flex-col items-center"></div>
      </div>

      {/* Contact */}

      <div className="h-[100vh]">
        <div className="bg-[#35374B] rounded-lg h-[70vh] w-[60vw] flex flex-col items-center"></div>
      </div>
    </main>
  );
}
