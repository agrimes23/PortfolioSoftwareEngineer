"use client";
import React, { useEffect, useState } from "react";
import LanguagesBar from "./LanguagesBar";
import Link from "next/link";

interface Languages {
  [key: string]: number;
}

interface RepoData {
  username: string;
  repoName: string;
  description?: string;
}

const repoList: RepoData[] = [
  { username: "agrimes23", repoName: "JLPTNewsStudy", description:
    "Japanese Learners can learn from real news articles, and add new words directly from the news article to flashcard decks to study", },
  {
    username: "Noordibou",
    repoName: "Feeling-Friends",
    description:
        "an educational web application, enhancing communication and accessibility, and fostering a supportive environment for student engagement",
  },
  { username: "agrimes23", repoName: "travel_plan_backend", description: "Handles logic for saving planned trips, with JWT authentication. Uses the Spring Boot framework", },
];

const ProjectsHome = () => {
  const [repoInfo, setRepoInfo] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepoInfo = async () => {
      const repoDataPromises = repoList.map(
        async ({ username, repoName, description }) => {
          try {
            const [repoRes, languagesRes] = await Promise.all([
              fetch(`/api/repos/${username}/${repoName}`),
              fetch(`/api/repos/${username}/${repoName}/languages`),
            ]);

            const repoData = await repoRes.json();
            const languagesData = await languagesRes.json();
            console.log("language data: " + JSON.stringify(languagesData));
            return {
              ...repoData,
              languages: languagesData,
              manualDescription: repoData.description || description,
            };
          } catch (error) {
            console.error("Error fetching repo data:", error);
            return null;
          }
        }
      );
      
      const repoData = await Promise.all(repoDataPromises);
      setRepoInfo(repoData.filter((data) => data !== null)); // Filter out any null responses
      setLoading(false);
    };

    fetchRepoInfo();
  }, []);
  return (
    <div className="flex">
      <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg w-[90vw] xl:w-[60vw] flex items-center flex-col xl:flex-row">
        {/* Title ("Recent Projects")*/}
        <div className="w-full xl:h-full my-5 xl:my-0 xl:w-4/12 pt-10 pl-10 text-[3rem] text-white">
          <h1>Recent Projects</h1>
        </div>

        {/* Recent Projects list */}
        <div className="flex flex-col w-full xl:w-8/12 h-full justify-between items-center xl:my-24">
          {/* the list */}
          <div className="flex flex-col gap-8 justify-center h-full w-[90%] max-w-[900px]">
            {loading
              ? repoList.map((_, index) => (
                <div
                key={index}
                className="flex sm:items-center rounded-lg bg-gray-800 p-5 flex-col sm:flex-row animate-pulse min-h-[150px] w-full"
              >
                <div className="flex flex-col flex-1 gap-4">
                  {/* project title */}
                  <div className="bg-gray-500 h-[28px] w-[85%] rounded-lg"></div>
                  {/* description */}
                  <div>
                    <div className="bg-gray-500 h-[15px] w-[85%] rounded-lg my-2"></div>
                    <div className="bg-gray-500 h-[15px] w-[85%] rounded-lg"></div>
                    <div className="bg-gray-500 h-[15px] w-[85%] rounded-lg my-2"></div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 h-full justify-between px-4">
                  <div className="bg-gray-600 w-[30%] h-[30px] self-end"></div>
                  <div className="bg-gray-600 h-4 rounded mt-2 sm:mt-0"></div>
                  <div className="flex flex-row justify-between my-2 sm:my-0">
                    <div className="bg-gray-600 w-[30%] h-4 rounded"></div>
                    <div className="bg-gray-600 w-[30%] h-4 rounded"></div>
                    <div className="bg-gray-600 w-[30%] h-4 rounded"></div>
                  </div>
                </div>
              </div>
                ))
              : repoInfo.map((repo, index) => (
                  <div
                    key={index}
                    className="flex sm:items-center rounded-lg bg-gray-800 p-5 flex-col sm:flex-row max-w-[800px]"
                  >
                    <div className="flex flex-col flex-1 h-full gap-4">
                      <p className="text-white text-[1.3rem]">{repo.name}</p>
                      <p className="text-white text-[0.9rem] lg:text-[1rem]">
                        {repo.manualDescription}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 h-full justify-between px-4 w-full">
                      <p className="flex flex-col text-gray-400 text-right text-[0.8rem]">
                        Last updated:{" "}
                        <span className="text-[0.8rem]">
                          {new Date(repo.pushed_at).toLocaleDateString()}
                        </span>
                      </p>
                      <LanguagesBar languages={repo.languages} />
                    </div>
                  </div>
                ))}
          </div>
          {/* view all projects button */}
          <div className="flex w-[90%] h-[20%] justify-center items-center">
            <Link href="/projects">
              <button className="my-10 xl:my-0 py-5 w-[11rem] border-2 gradient-border rounded-lg text-white colorful-btn">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHome;
