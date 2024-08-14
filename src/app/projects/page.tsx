import React from 'react';
import RepoCard from '../components/RepoCard';

  // TODO:
  
  // // SEPARATE API CALLS
  // my contributions amount (separate api call)
  // languages (separate api call) (maybe make a bar like github does?)

  

const Projects: React.FC = () => {
  // list of specific repos to display
  const repo = [{username: "agrimes23", repoName: "JLPTNewsStudy"}, {username: "Noordibou", repoName: "Feeling-Friends", description: "manual description"}];

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="my-10">
        <h2 className="text-[3rem] text-accent">Projects</h2>
      </div>

      {/* Project list container */}
      <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg py-20 my-32 w-[60vw] flex flex-col items-center">
        {repo.map((repo) => (
          <RepoCard key={repo.repoName} username={repo.username} repoName={repo.repoName} description={repo.description} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

