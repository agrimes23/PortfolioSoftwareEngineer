"use client"
import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  language: string | null;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  // TODO:
  // make component to render cards for each repo given
  // props: username, repo name, description (if any, optl)


  // NOTES
  // since using public api for now, need a game plan on simple use
  // repo name
  // repo desc || manually write it
  // code link URL
  // live site URL
  // created date
  // most recently updated (date)
  
  // // SEPARATE API CALLS
  // my contributions amount (separate api call)
  // languages (separate api call) (maybe make a bar like github does?)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api`);
        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }
        const data: Repo[] = await response.json();
        setRepos(data);
        console.log("api key maybe: " + process.env.NEXT_PUBLIC_GITHUB_USERNAME)
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="my-10">
        <h2 className="text-[3rem] text-accent">Projects</h2>
      </div>

      {/* Project list container */}
      <div>
        <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg py-20 my-32 w-[60vw] flex flex-col items-center">
          {repos.map(repo => (
            <div key={repo.id} className="p-4 border-b border-neutralSecondary-dark w-full">
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description || 'No description available'}</p>
              <p>Date created: {new Date(repo.created_at).toLocaleDateString()}</p>
              <p>Language: {repo.language || 'Not specified'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;