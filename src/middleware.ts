import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = ['/'];

export async function middleware(req: NextRequest) {
	const session = await auth();
	const pathname = req.nextUrl.pathname;

	const isAuthed = !!session?.user;

	// 認証済みユーザーが "/" に来たら、/dashboard にリダイレクト
	if (isAuthed && pathname === '/') {
		return NextResponse.redirect(new URL('/dashboard', req.url));
	}

	const isPublic = PUBLIC_PATHS.includes(pathname);
	if (!isAuthed && !isPublic) {
		// 未認証ユーザーはLPにリダイレクト
		return NextResponse.redirect(new URL('/', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
