import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const proto = host.includes("localhost") ? "http" : "https";
  const origin = `${proto}://${host}`;

  const state = crypto.randomUUID();

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    redirect_uri: `${origin}/api/callback`,
    scope: "repo,user",
    state,
  });

  const res = NextResponse.redirect(
    `https://github.com/login/oauth/authorize?${params}`
  );
  res.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: proto === "https",
    sameSite: "lax",
    path: "/",
    maxAge: 300,
  });
  return res;
}
