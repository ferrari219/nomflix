import React, { Component } from 'react';
import TVPresenter from './TVPresenter';

class TVContainer extends Component {
	state = {
		error: null,
		loading: true,
	};
	render() {
		return <TVPresenter />;
	}
}

export default TVContainer;
