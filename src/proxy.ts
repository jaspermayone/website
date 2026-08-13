// Hotlink protection for the photography gallery. Blocks other sites from
// embedding /images/photography/* (raw files and /_next/image variants).
// Requests with no referer (direct visits, the image optimizer's internal
// fetch, curl) pass through — this guards against embedding, not downloading.
import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIX = "/images/photography/";

const isAllowedReferer = (referer: string): boolean => {
  try {
    const host = new URL(referer).host;
    return (
      host === "jaspermayone.com" ||
      host.endsWith(".jaspermayone.com") ||
      host.startsWith("localhost") ||
      host.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
};

export default function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const target =
    pathname === "/_next/image" ? (searchParams.get("url") ?? "") : pathname;

  if (!target.startsWith(PROTECTED_PREFIX)) {
    return NextResponse.next();
  }

  const referer = request.headers.get("referer");
  if (referer && !isAllowedReferer(referer)) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/images/photography/:path*", "/_next/image"],
};
