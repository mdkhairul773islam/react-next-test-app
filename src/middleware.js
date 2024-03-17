import { NextResponse } from "next/server";
import { parse } from 'cookie';

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const cookies = parse(request.headers.get('cookie') || '');
  const token = cookies.token;
  // console.log('token', token);

  if (!token && request.nextUrl.pathname !== "/login") {
    url.pathname = "/login";

    return NextResponse.redirect(url);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/login", "/"],
};
