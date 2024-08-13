import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
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
            <h2>A Software Engineer with experience in automating processes, web development, and speech-to-text.</h2>
          </div>
        </div>

        {/* button container */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[1rem] text-white">Learn More About Me</h4>
          {/* buttons */}
          <div className="flex gap-8">

            <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">Github Code</button>
            <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">LinkedIn</button>
            <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">Projects</button>
          </div>
        </div>
        </div>
      </div>

    </main>
  );
}
