import React, { useEffect } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const SignIn = () => {
	const [user] = useAuthState(auth);
	const handleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};
	const history = useHistory();

	useEffect(() => {
		if (user) history.push('/');
	}, [user, history]);

	return (
		<div className='w-full min-h-vh90 flex justify-center items-center'>
			<button
				className='button flex items-center space-x-2'
				onClick={handleSignIn}
			>
				<span>Sign In With Google</span>

				<FaGoogle />
			</button>
		</div>
	);
};

export default SignIn;
