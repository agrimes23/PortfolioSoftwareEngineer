import React from 'react';
import RepoCard from '../components/RepoCard';


const Projects: React.FC = () => {
  // list of specific repos to display
  const repo = [
    {
      username: "agrimes23",
      repoName: "JLPTNewsStudy",
      description:
        "Japanese Learners can learn from real news articles, and add new words directly from the news article to flashcard decks to study",
      thumbnail: "/images/JLPT_News_Study_thumbnail.PNG",
    },
    {
      username: "Noordibou",
      repoName: "Feeling-Friends",
      description:
        "an educational web application, enhancing communication and accessibility, and fostering a supportive environment for student engagement",
      thumbnail: "/images/Feeling_Friends_thumbnail.PNG",
    },
    {
      username: "agrimes23",
      repoName: "travel_plan_backend",
      description: "Handles logic for saving planned trips, with JWT authentication. Uses the Spring Boot framework",
      thumbnail: "/images/Backend_Code_thumbnail.PNG",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="my-10">
        <h2 className="text-[3rem] text-accent">Projects</h2>
      </div>

      {/* Project list container */}
      <div className="flex flex-wrap gap-10">
        {repo.map((repo) => (
          <RepoCard key={repo.repoName} username={repo.username} repoName={repo.repoName} description={repo.description} image={repo.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

