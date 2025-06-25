import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, response: Response) {
  return Response.json({ githubToken: process.env.GHToken });
}
