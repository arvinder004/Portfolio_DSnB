import type { VercelRequest, VercelResponse } from "@vercel/node";
import { kv } from "@vercel/kv";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Optional security: Verify a secret token to prevent unauthorized triggers
  const authHeader = req.headers.authorization;
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const githubUsername = "arvinder004";
  const githubToken = process.env.GITHUB_PAT; // Optional, but helps with rate limits

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };
    if (githubToken) {
      headers.Authorization = `token ${githubToken}`;
    }

    // Fetch user profile
    const profileRes = await fetch(`https://api.github.com/users/${githubUsername}`, { headers });
    if (!profileRes.ok) throw new Error("Failed to fetch Github profile");
    const profile = await profileRes.json();

    // Fetch repositories
    const reposRes = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`, { headers });
    if (!reposRes.ok) throw new Error("Failed to fetch Github repos");
    const repos = await reposRes.json();

    const publicReposCount = profile.public_repos;
    const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
    const topRepos = repos
      .filter((r: any) => !r.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5)
      .map((r: any) => ({
        name: r.name,
        stars: r.stargazers_count,
        description: r.description,
        language: r.language,
        url: r.html_url,
      }));

    const stats = {
      username: githubUsername,
      publicRepos: publicReposCount,
      totalStars,
      topRepos,
      lastUpdated: new Date().toISOString(),
    };

    // Store in Redis
    await kv.set("github_stats", stats);

    console.log("[github-sync] Successfully updated Github stats in Redis.");
    return res.status(200).json({ success: true, stats });
  } catch (error) {
    console.error("[github-sync] Error fetching Github stats:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
