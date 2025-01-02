import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./app/auth";

export async function middleware(req: NextRequest) {
  const isLoggedIn = await auth();
  const { nextUrl } = req;
  const validAdmins = ["jooyosef173@gmail.com", "yosefarafa198@gmail.com"];
  if (nextUrl.pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (
    nextUrl.pathname === "/dashboard" &&
    !validAdmins.includes(isLoggedIn.user?.email as string)
  ) {
    return NextResponse.json({
      status: "err",
      message: "SORRY..., You Are Not Site Owner!",
    });
  }
 
}
export const config = {
  matcher: ["/", "/pricing", "/portfolio", "/dashboard", "/projects:id*"],
};
