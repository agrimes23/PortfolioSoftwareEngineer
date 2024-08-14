import { NextResponse } from 'next/server';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME

export async function GET() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      return NextResponse.json({ error: `GitHub API returned status ${response.status}` }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}