import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username')
  const repoName = searchParams.get('repoName');

  console.log("username: " + JSON.stringify(username))
  console.log("username: " + JSON.stringify(repoName))

  if (!repoName) {
    return NextResponse.json({ error: 'Repo name is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    if (!response.ok) {
      return NextResponse.json({ error: `GitHub API returned status ${response.status}` }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}