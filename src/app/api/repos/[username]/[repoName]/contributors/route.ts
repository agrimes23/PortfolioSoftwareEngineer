// src/app/api/repos/[username]/[repoName]/contributors/route.ts
import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com';

async function fetchFromGithub(endpoint: string) {
  const response = await fetch(`${GITHUB_API_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`GitHub API returned status ${response.status}`);
  }
  return response.json();
}

export async function GET(req: Request, { params }: { params: { username: string, repoName: string } }) {
  const { username, repoName } = params;

  try {
    const contributorsData = await fetchFromGithub(`/repos/${username}/${repoName}/contributors`);
    return NextResponse.json(contributorsData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}