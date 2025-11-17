import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Protect admin routes: require header `x-admin-key` matching server env `ADMIN_API_KEY`
  if (pathname.startsWith("/admin")) {
    const adminKey = process.env.ADMIN_API_KEY || "";
    const provided = req.headers.get("x-admin-key") || "";

    if (!adminKey) {
      // If server not configured, return 503 with guidance
      return new NextResponse(
        "Admin access is disabled on this deployment. Set ADMIN_API_KEY in env to enable.",
        { status: 503 }
      );
    }

    if (provided !== adminKey) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
