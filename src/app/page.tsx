import SignIn from './components/sign-in';

export default function Home() {
	return (
		<div className="bg-white px-4 sm:px-6 lg:px-8 py-16">
			<div className="space-y-6 mx-auto max-w-5xl text-center">
				<h1 className="font-bold text-gray-900 text-4xl">
					Next Auth Sample ( 5系 )
				</h1>
				<p className="text-gray-600 text-lg">
					このページは公開用のランディングページのサンプルです。
					<br className="sm:hidden" />
					アカウントをお持ちの方は、ログインしてください。
				</p>

				<div className="flex justify-center mt-8">
					<div className="bg-gray-100 shadow-md px-6 py-4 rounded-xl">
						<SignIn />
					</div>
				</div>
			</div>
		</div>
	);
}
