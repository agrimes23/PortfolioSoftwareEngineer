"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { FaUpRightFromSquare } from "react-icons/fa6";

interface RepoCardProps {
  username: string;
  repoName: string;
  description?: string;
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  pushed_at: string;
  language: string | null;
  homepage: string | null;
  html_url: string | null;
}

const RepoCard: React.FC<RepoCardProps> = ({ username, repoName, description }) => {
  const [repo, setRepo] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        // call the api filed in api/route.ts
        const response = await fetch(`/api?username=${username}&repoName=${repoName}`);
        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }
        const data: Repo = await response.json();
        setRepo(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [username, repoName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 border-b border-neutralSecondary-dark w-full">
      <h3 className="text-xl font-bold">{repo?.name}</h3>
      <p>{repo?.description || description }</p>
      <p>Date created: {repo ? new Date(repo.created_at).toLocaleDateString() : 'N/A'}</p>
      <p>Last updated: {repo ? new Date(repo.pushed_at).toLocaleDateString() : 'N/A'}</p>
      <div className="flex gap-3">
        <a
        href={repo?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex bg-[#0c0c20] px-5 py-2 text-accent justify-center gap-3 items-center rounded-lg"
        >
            <FaGithub className="text-2xl "/>
            <p>Code</p>
        </a>
        <a
        href={repo?.homepage}
        target="_blank"
        rel="noopener noreferrer"
        className="flex bg-[#0c0c20] px-5 py-2 text-accent justify-center gap-3 items-center rounded-lg"
        >
            <FaUpRightFromSquare className="text-xl "/>
            <p>Website</p>
        </a>
      </div>
    </div>
  );
};

export default RepoCard;