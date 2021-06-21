import React from 'react';
import Header from 'components/Header';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'routers/Home';
import TV from 'routers/TV';
import Search from 'routers/Search';

const router = () => {
	return (
		<Router>
			<>
				<Header />
			</>
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Redirect form="*" to="/" />
			</Switch>
		</Router>
	);
};

export default router;
