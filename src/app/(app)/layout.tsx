import Header from './components/layout/header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col bg-gray-50 min-h-screen text-gray-800">
			{/* 上部バナーなど */}
			<div className="place-items-center grid bg-indigo-100 h-8 text-indigo-800 text-sm">
				<span className="leading-none">protected</span>
			</div>

			{/* ヘッダー */}
			<Header />

			{/* メイン */}
			<main className="flex-1 mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-5xl">
				{children}
			</main>

			{/* フッター */}
			<footer className="bg-gray-200 mt-8 py-4 text-gray-600 text-sm text-center">
				footer &copy; {new Date().getFullYear()}
			</footer>
		</div>
	);
}
