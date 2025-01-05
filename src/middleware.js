import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log('Middleware is running',request);
    return NextResponse.next(); // Proceed with the request
}