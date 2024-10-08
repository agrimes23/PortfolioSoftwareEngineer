import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex my-10">
        <h2 className="text-[3rem] text-accent">Experience</h2>
      </div>
      <div className="flex flex-col bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg w-[85vw] lg:w-[60vw] pt-10 my-10 min-h-[600px]">
        <div className="relative flex flex-col items-start h-full pb-5">
          {/* Timeline line */}
          <div className="relative flex items-start h-full">
            {/* line */}
            <div className="absolute flex bg-gray-500 h-full w-[2px] rounded-lg ml-10">
              {/* Dots container */}
              <div className="absolute top-0 bottom-0 flex flex-col justify-between w-full">
                {/* dot */}
                <div className="absolute -left-2 top-[8%] rounded-full bg-purple-300 w-4 h-4"></div>
                {/* dot */}
                <div className="absolute -left-2 top-[28%] rounded-full bg-purple-300 w-4 h-4"></div>
                {/* dot */}
                <div className="absolute -left-2 top-[47%] rounded-full bg-purple-300 w-4 h-4"></div>
                <div className="absolute -left-2 top-[69%] rounded-full bg-purple-300 w-4 h-4"></div>
                <div className="absolute -left-2 top-[89%] rounded-full bg-purple-300 w-4 h-4"></div>
              </div>
            </div>

            <div className="flex flex-col gap-12 pl-20 px-5 py-10">
              <div className="relative flex flex-col gap-2 text-accent">
                <div>
                  <h4 className="text-[1.2rem] font-bold">
                    IT Junior Software Engineer
                  </h4>
                  <h6 className="italic text-[0.9rem]">ASC Brands</h6>
                </div>
                <p>
                  Automated processes including sentiment analysis for customer
                  service calls, website performance testing for lower
                  performing web pages.
                </p>
              </div>

              <div className="relative flex flex-col gap-2 text-accent">
                <div>
                  <h4 className="text-[1.2rem] font-bold">
                    Software Engineer - Sprint Participant
                  </h4>
                  <h6 className="italic text-[0.9rem]">
                    The Opportunity Project 2023
                  </h6>
                </div>
                <p>
                  A privacy-centric mobile application for encrypted test
                  reporting, and authored a comprehensive suite of Jest unit
                  tests to ensure high code quality and coverage standards.
                </p>
              </div>

              <div className="relative flex flex-col gap-2 text-accent ">
                <div>
                  <h4 className="text-[1.2rem] font-bold">
                    Software Engineer Fellow
                  </h4>
                  <h6 className="italic text-[0.9rem]">General Assembly</h6>
                </div>
                <p>
                  Developed a travel planner web application, implementing a
                  secure backend with Java, Spring Boot, and MongoDB, reinforced
                  by JWT for authentication. Implemented RESTful API endpoints,
                  ensured reliable service functionality
                </p>
              </div>

              <div className="relative flex flex-col gap-2 text-accent ">
                <div>
                  <h4 className="text-[1.2rem] font-bold">Accountant</h4>
                  <h6 className="italic text-[0.9rem]">UACJ North America</h6>
                </div>
                <p>
                  Managed financial initiatives across North American,
                  communicated with Japanese banks, streamlined processes
                  through Power Automate.
                </p>
              </div>

              <div className="relative flex flex-col gap-2 text-accent ">
                <div>
                  <h4 className="text-[1.2rem] font-bold">
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
