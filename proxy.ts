import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  if (!isLoggedIn) {
    return Response.redirect(
      new URL("/auth", req.url)
    );
  }
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/workspace/:path*",
    "/project/:path*",
    "/settings/:path*",
  ],
};