"use client";
import React, { useEffect, useState } from 'react';

interface RepoCardProps {
  username: string;
  repoName: string;
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  language: string | null;
}

const RepoCard: React.FC<RepoCardProps> = ({ username, repoName }) => {
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
      <p>{repo?.description || 'No description available'}</p>
      <p>Date created: {repo ? new Date(repo.created_at).toLocaleDateString() : 'N/A'}</p>
      <p>Language: {repo?.language || 'Not specified'}</p>
    </div>
  );
};

export default RepoCard;