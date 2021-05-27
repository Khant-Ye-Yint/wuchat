import React from 'react';

import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignOutButton from './SignOutButton';

const Title = () => {
	const [user] = useAuthState(auth);

	return (
		<div className='w-full h-vh10 px-5 flex justify-between items-center'>
			<h1 className='my-3 text-3xl font-bold font-mont text-yellow'>Wuchat</h1>
			{user && <SignOutButton />}
		</div>
	);
};

export default Title;
