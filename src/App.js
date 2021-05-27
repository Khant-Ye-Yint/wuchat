import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './component/SignIn';
import ChatRoom from './component/ChatRoom';
import PrivateRoute from './component/PrivateRoute';
import Title from './component/Title';

const App = () => {
	return (
		<Router>
			<Title />
			<Switch>
				<PrivateRoute exact path='/' component={ChatRoom} />
				<Route exact path='/sign-in' component={SignIn} />
			</Switch>
		</Router>
	);
};

export default App;
