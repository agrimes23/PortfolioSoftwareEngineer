"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaUpRightFromSquare } from "react-icons/fa6";
import LanguagesBar from "./LanguagesBar";
import Image from 'next/image';

interface RepoCardProps {
  username: string;
  repoName: string;
  description?: string;
  image: string;
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  pushed_at: string;
  language: string | null;
  homepage: string | undefined;
  html_url: string | undefined;
}

interface Contributor {
  contributions: number;
}

const RepoCard: React.FC<RepoCardProps> = ({
  username,
  repoName,
  description,
  image
}) => {
  const [repo, setRepo] = useState<Repo | null>(null);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [languages, setLanguages] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch repository data
        const repoResponse = await fetch(`/api/repos/${username}/${repoName}`);
        if (!repoResponse.ok)
          throw new Error(`GitHub API returned status ${repoResponse.status}`);
        const repoData = await repoResponse.json();
        setRepo(repoData);

        // Fetch contributors
        const contributorsResponse = await fetch(
          `/api/repos/${username}/${repoName}/contributors`
        );
        if (!contributorsResponse.ok)
          throw new Error(
            `GitHub API returned status ${contributorsResponse.status}`
          );
        const contributorsData = await contributorsResponse.json();
        setContributors(contributorsData);

        // Fetch languages
        const languagesResponse = await fetch(
          `/api/repos/${username}/${repoName}/languages`
        );
        if (!languagesResponse.ok)
          throw new Error(
            `GitHub API returned status ${languagesResponse.status}`
          );
        const languagesData = await languagesResponse.json();
        setLanguages(languagesData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, repoName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg my-32 flex flex-col text-accent w-[400px] min-h-[300px]">
      <div>
      <Image
        className="object-cover h-[300px]"
        src={image}
        alt="Thumbnail"
        width={500}
        height={400}
      />
    </div>
    <div className="px-8 py-5">
      
      <div>
      
        <h3 className="text-xl font-bold">{repo?.name}</h3>
        <div className="flex text-[0.8rem] text-gray-400 pb-2 gap-10">
          <p className="flex flex-col">
            Date created{" "}
            <span>
            {repo ? new Date(repo.created_at).toLocaleDateString() : "N/A"}</span>
          </p>
          <p className="flex flex-col">
            Last updated{" "}
            <span>
            {repo ? new Date(repo.pushed_at).toLocaleDateString() : "N/A"}</span>
          </p>
        </div>
        <p>{repo?.description || description}</p>
      </div>
      <div className="flex gap-3 py-4">
        <a
          href={repo?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-[#0c0c20] px-5 py-2 text-accent justify-center gap-3 items-center rounded-lg"
        >
          <FaGithub className="text-2xl " />
          <p>Code</p>
        </a>
        <a
          href={repo?.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-[#0c0c20] px-5 py-2 text-accent justify-center gap-3 items-center rounded-lg"
        >
          <FaUpRightFromSquare className="text-xl " />
          <p>Website</p>
        </a>
      </div>


      <LanguagesBar languages={languages}/>
    </div>
    </div>
  );
};

export default RepoCard;
