import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [user] = useAuthState(auth);

	return (
		<Route
			{...rest}
			render={(props) => {
				return user ? <Component {...props} /> : <Redirect to='/sign-in' />;
			}}
		></Route>
	);
};

export default PrivateRoute;
