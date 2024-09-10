import React from "react";
import { calculatePosition } from "../utils/calculatePosition";
import dayjs from "dayjs";
import TimelineBracket from "./TimelineBracket";

const events = [
  {
    startDate: "2016-01-08",
    endDate: "2017-06-01",
    title: "Accountant, Internship",
    company: "Magnolia Health Systems",
    description: "• Uploaded Accounts Receivable from Matrix software to Hi-Tech accounting software. • Set up training guide and taught experienced accounting staff how to perform Accounts Receivable uploads. • Helped Accounts Payable department by entering invoices, cutting checks, and filing. • Assisted Controller and Senior Accounting Manager with various account analysis and projects. • Calculated and entered monthly recurring journal entries.",
  },
  {
    startDate: "2016-07-01",
    endDate: "2017-07-01",
    title: "English Teacher",
    company: "VIPKID",
    description: "• Instructed one-on-one classes to Chinese students ages 5-12. • Indicated areas of improvement and wrote unit assessments and feedback for parents. • Used data from previous classes to change the plan and learning environment to fit student's needs.",
  },
  {
    startDate: "2016-06-01",
    endDate: "2016-06-01",
    title: "TEFL Certificate",
    company: "",
    description: "Training to provide English instruction in foreign classrooms. Completed 20 hours teaching to non-native speakers and observed TEFL professionals teach.",
  },
  {
    startDate: "2019-08-20",
    endDate: "2019-08-20",
    title: "Passed N3 Level",
    company: "Japanese Language Proficiency Test (JLPT)",
    description: "",
  },
  {
    startDate: "2017-07-20",
    endDate: "2019-07-20",
    title: "Assistant Language Teacher with JET Program",
    company: "Fukui Board of Education",
    description: "• Managed financial initiatives across North American entities by establishing new and recurring loans with Japanese banks, streamlined processes by introducing a trip request system through Power Automate that cut down approval times by over 66%, and led the transition to a paperless expense reporting system, enhancing operational efficiency.",
  },
  {
    startDate: "2019-09-30",
    endDate: "2022-05-31",
    title: "Accountant",
    company: "UACJ North America",
    description: "• Managed financial initiatives across North American entities by establishing new and recurring loans with Japanese banks, streamlined processes by introducing a trip request system through Power Automate that cut down approval times by over 66%, and led the transition to a paperless expense reporting system, enhancing operational efficiency.",
  },
  {
    startDate: "2022-10-18",
    endDate: "2023-01-30",
    title: "Software Engineering Fellow",
    company: "General Assembly",
    description: "• Developed a travel planner web application, implementing a secure backend with Java, Spring Boot, and MongoDB, reinforced by JWT for authentication • Managed environment configurations to facilitate the deployment process via Heroku • Implemented RESTful API endpoints, ensured reliable service functionality, and crafted a seamless UI by integrating frontend components with backend APIs using JavaScript and React",
  },
  {
    startDate: "2023-09-15",
    endDate: dayjs().format("YYYY-MM-DD"),
    title: "Software Engineer",
    company: "Feeling Friends",
    description: "• Collaborated with a three-person team to design and develop an educational web application, enhancing communication and accessibility, and fostering a supportive environment for student engagement • Developed and deployed RESTful API endpoints with Node.js, Express.js, MongoDB, and Vercel • Utilized React Context for state management and HOCs to secure and manage URL access",
  },
  {
    startDate: "2023-05-09",
    endDate: "2023-08-02",
    title: "Sprint Participant - Software Engineer",
    company: "The Top Project",
    description: "• Led a cross-functional team as Scrum Master, building a privacy-centric mobile application for encrypted COVID-19 test reporting • Created a robust RESTful API using TypeScript, Express.js, and SQL with Sequelize for optimal performance and reliability, and authored a comprehensive suite of Jest unit tests to ensure high code quality and coverage standards before production deployment • Developed the frontend with React Native, ensuring cross-device compatibility and user experience excellence",
  },
  {
    startDate: "2024-02-07",
    endDate: "2024-08-07",
    title: "IT Jr. Software Engineer",
    company: "ASC Brands",
    description: "• Managed a Python project to analyze performance metrics of the company website with results from an API,including comparisons with historical data saved to an SSMS database • Implemented stored procedures to optimize data retrieving speed and security, leveraging Power BI for clear visualization of historical performance metrics • Migrated return label service from web services to a third-party API, connecting it to our customer database using Flask",
  },
];

const Timeline: React.FC = () => {
  const minDate = "2016-01-01"; // Timeline start date
  const maxDate = dayjs().format("YYYY-MM-DD"); // Timeline end date (current date)

  return (
    <>
      <div className="relative h-[400vh] w-2 bg-gray-300 ml-20 my-20"></div>
      
      <div className="absolute w-[90%] max-w-screen h-[400vh] my-20 ml-20">
        {events.map((event, index) => {
          const startPercentage = calculatePosition(
            event.startDate,
            minDate,
            maxDate
          );
          // If startDate and endDate are the same, treat it as a one-day event
          const endPercentage = event.startDate === event.endDate
            ? startPercentage
            : calculatePosition(event.endDate, minDate, maxDate);

          const midPercentage = (startPercentage + endPercentage) / 2;

          return (
            <TimelineBracket
              key={index}
              event={event}
              startPercentage={startPercentage}
              endPercentage={endPercentage}
              midPercentage={midPercentage}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
