import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'routers/Home';
import Search from 'routers/Search';
import TV from 'routers/TV';
import Header from 'components/Header';

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Redirect form="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
