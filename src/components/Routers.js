import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Headers from 'components/Headers';
import Home from 'routers/Home';
import TV from 'routers/TV';
import Search from 'routers/Search';
import Detail from 'routers/Detail';

const Routers = () => {
	return (
		<Router>
			<Headers />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/show/:id" component={Detail} />
				<Redirect form="*" to="/" />
			</Switch>
		</Router>
	);
};

export default Routers;
