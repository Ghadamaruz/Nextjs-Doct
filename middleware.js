import { NextResponse } from 'next/server'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {
    try {
        const { isAuthenticated } = getKindeServerSession();
        const authenticated = await isAuthenticated();
        
        if (!authenticated) {
            const currentPath = request.nextUrl.pathname;
            return NextResponse.redirect(
                new URL(`/api/auth/login?post_login_redirect_url=${currentPath}`, request.url)
            );
        }
        
        return NextResponse.next();
    } catch (error) {
        console.error('Authentication error:', error);
        // Redirect to home page with error parameter in case of authentication errors
        return NextResponse.redirect(
            new URL('/?auth_error=true', request.url)
        );
    }
}
 
// Protected routes that require authentication
export const config = {
    matcher: [
        '/details/:path*',
        '/my-booking/:path*',
        '/profile/:path*'
    ]
}