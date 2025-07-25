import { signIn } from '@/auth';
import { siGithub, siGoogle } from 'simple-icons';

export default async function SignIn() {
	const onSignIn = async (formData: FormData) => {
		'use server';
		const provider = formData.get('provider')?.toString();
		if (provider === 'github' || provider === 'google') {
			await signIn(provider, { redirect: true, redirectTo: '/dashboard' });
		}
	};
	return (
		<form action={onSignIn} className="flex flex-row gap-4">
			<button
				name="provider"
				value="github"
				className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 shadow-md px-4 py-2 rounded-xl text-white transition duration-200 hover:cursor-pointer"
				type="submit"
			>
				<svg
					role="img"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-white w-5 h-5"
				>
					<title>{siGithub.title}</title>
					<path d={siGithub.path} />
				</svg>
				<span>Signin</span>
			</button>
			<button
				name="provider"
				value="google"
				className="flex items-center gap-2 bg-white hover:bg-gray-100 shadow-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-800 transition duration-200 hover:cursor-pointer"
				type="submit"
			>
				<svg
					role="img"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-white w-5 h-5"
				>
					<title>{siGoogle.title}</title>
					<path d={siGoogle.path} fill="#4285F4" />
				</svg>
				<span>Signin</span>
			</button>
		</form>
	);
}
