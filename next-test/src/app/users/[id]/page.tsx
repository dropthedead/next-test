import { Suspense, useEffect } from 'react';
import UserPageContent from '../components/userpagecontents';
import Loading from '../loading';
interface UserData {
	id: string;
	name: string;
	email: string;
	address: {
		city: string;
		street: string;
		suite: string;
	};
	phone: string;
	website: string;
}
export default async function UserPage({ params }: { params: { id: string } }) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);
	const userData: UserData = await response.json();

	if (!userData) {
		return <div>Пользователь не найден</div>;
	}

	return (
		<Suspense fallback={<Loading />}>
			<UserPageContent userData={userData} />
		</Suspense>
	);
}
