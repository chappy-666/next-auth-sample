import { NextResponse } from 'next/server';
import { getUserIdOrThrow } from '@/lib/auth';

export async function GET() {
	const userId = await getUserIdOrThrow();
	return NextResponse.json({ message: 'hello', userId });
}
