import Link from 'next/link';

interface User {
	id: string;
	name: string;
}

export default async function Users() {
	const usersData = await fetch(
		'https://jsonplaceholder.typicode.com/users'
	).then((response) => response.json());
	return (
		<div>
			{usersData.map((user: User) => (
				<div key={user.id}>
					<Link href={`/users/${user.id}`} as={`/users/${user.id}`}>
						<div>{user.name}</div>
					</Link>
				</div>
			))}
			<div></div>
		</div>
	);
}
