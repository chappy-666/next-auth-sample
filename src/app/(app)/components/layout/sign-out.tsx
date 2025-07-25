import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';

export default async function SignOut() {
	const onSignOut = async () => {
		'use server';
		await signOut();
	};
	return (
		<div className="flex flex-row items-center gap-4">
			<form action={onSignOut}>
				<button
					type="submit"
					className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 shadow-sm px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:text-black text-sm transition-colors hover:cursor-pointer"
				>
					<LogOut className="w-4 h-4" />
					<span>Sign out</span>
				</button>
			</form>
		</div>
	);
}
