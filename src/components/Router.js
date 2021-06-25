import React from 'react';
import Header from 'components/Header';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'routers/Home';
import TV from 'routers/TV';
import Search from 'routers/Search';
import Detail from 'routers/Detail';

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tv" component={TV} />
					<Route path="/search" component={Search} />
					<Route path="/movie/:id" component={Detail} />
					<Route path="/show/:id" component={Detail} />
					<Redirect form="*" to="/" />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default Router;
