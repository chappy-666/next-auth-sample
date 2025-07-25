import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_JP({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next Auth Sample ( v5 )',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${notoSans.className} antialiased`}>{children}</body>
		</html>
	);
}
