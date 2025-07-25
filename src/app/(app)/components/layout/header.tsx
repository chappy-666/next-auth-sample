import Image from 'next/image';

import { auth } from '@/auth';
import SignOut from './sign-out';

export default async function Header() {
	const session = await auth();
	return (
		<header className="bg-white border-gray-200 border-b">
			<div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-5xl">
				<h1 className="font-semibold text-gray-900 text-xl">
					Next Auth Sample
				</h1>
				<div className="flex flex-row gap-4">
					{session?.user?.image && (
						<Image
							src={session?.user.image}
							alt={session?.user.name ?? 'User Avatar'}
							width={40}
							height={40}
							className="rounded-full"
						/>
					)}
					<nav>{<SignOut />}</nav>
				</div>
			</div>
		</header>
	);
}
