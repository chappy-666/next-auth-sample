'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
	const [msg, setMsg] = useState('');

	const fetchMsg = async () => {
		const res = await fetch('/api/tasks');
		const data = await res.json();
		setMsg(data.message);
	};

	useEffect(() => {
		fetchMsg();
	}, []);

	return <div>message: {msg}</div>;
}
