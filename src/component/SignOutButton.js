import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () => {
	return (
		<button onClick={() => auth.signOut()} className='button'>
			Sign Out
		</button>
	);
};

export default SignOutButton;
