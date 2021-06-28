import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Headers from 'components/Headers';
import Home from 'routers/Home/HomePresenter';
import TV from 'routers/TV';
import Search from 'routers/Search';

const Routers = () => {
	return (
		<Router>
			<Headers />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Redirect form="*" to="/" />
			</Switch>
		</Router>
	);
};

export default Routers;
