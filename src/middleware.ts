import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest){
    const isLogin = false;
    if (!isLogin){
        return NextResponse.redirect(new URL("/login", request.url))
        //return NextResponse.rewrite(new URL("/login", request.url))
    }
}

export const config = {
    matcher: ["/about"]
}