import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const proto = host.includes("localhost") ? "http" : "https";
  const origin = `${proto}://${host}`;

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    redirect_uri: `${origin}/api/callback`,
    scope: "repo,user",
    state: crypto.randomUUID(),
  });

  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params}`
  );
}
