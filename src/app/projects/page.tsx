import React from 'react';
import RepoCard from '../components/RepoCard';


const Projects: React.FC = () => {
  // list of specific repos to display
  const repo = [{username: "agrimes23", repoName: "JLPTNewsStudy"}, {username: "Noordibou", repoName: "Feeling-Friends", description: "manual description"}, {username: "agrimes23", repoName: "travel_plan_backend"}];

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="my-10">
        <h2 className="text-[3rem] text-accent">Projects</h2>
      </div>

      {/* Project list container */}
      <div className="flex flex-wrap gap-10">
        {repo.map((repo) => (
          <RepoCard key={repo.repoName} username={repo.username} repoName={repo.repoName} description={repo.description} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

