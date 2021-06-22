import React from 'react';
import Header from 'Components/Header';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routers/Home';
import TV from 'Routers/TV';
import Search from 'Routers/Search';

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tv" component={TV} />
					<Route path="/search" component={Search} />
					<Redirect form="*" to="/" />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default Router;
