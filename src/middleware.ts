import { NextResponse } from "next/server";
export default function Middleware(req: any) {

  //If the router is about or start with about with will redirect to item page.
  //   if (req.nextUrl.pathname.startsWith("/about")) {
  //     return NextResponse.redirect(new URL("/item", req.url));
  //   }

  //   This will take the config and if there is any URL match with the config then it will redirect to item page.
  return NextResponse.redirect(new URL("/item", req.url));
}

export const config = {
  matcher: ["/about/:path*", "/anyURL/:path*"], // star (*) means -> it will redirect to all the child routes also.
};
