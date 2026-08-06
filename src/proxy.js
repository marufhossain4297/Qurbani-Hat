import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4'])

import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const isLoggedIn = session

    if(isLoggedIn){
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/my-profile', '/booking', '/details-page/:path*', '/animals']
}