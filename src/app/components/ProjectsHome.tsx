"use client";
import React, { useEffect, useState } from "react";
import LanguagesBar from "./LanguagesBar";

interface Languages {
  [key: string]: number;
}

interface RepoData {
  username: string;
  repoName: string;
  description?: string;
}

const repoList: RepoData[] = [
  { username: "agrimes23", repoName: "JLPTNewsStudy" },
  {
    username: "Noordibou",
    repoName: "Feeling-Friends",
    description:
      "Manual description for repo2 asdf asdf asdsadf sdsad fasdf asd",
  },
  { username: "agrimes23", repoName: "travel_plan_backend" },
];

const ProjectsHome = () => {
  const [repoInfo, setRepoInfo] = useState<any[]>([]);
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
    };

    fetchRepoInfo();
  }, []);
  return (
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
            {repoInfo.map((repo, index) => (
              <div
                key={index}
                className="flex items-center h-[10rem] rounded-lg bg-gray-800 p-5"
              >
                <div className="flex flex-col flex-1 h-full gap-4">
                  <p className="text-white text-[1.3rem]">{repo.name}</p>
                  <p className="text-white">{repo.manualDescription}</p>
                </div>
                <div className="flex flex-col flex-1 h-full justify-between px-4">
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
          <div className="flex w-[90%] pb-10 justify-center">
            <button className="py-3 w-[11rem] border-2 gradient-border rounded-lg text-white">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHome;
