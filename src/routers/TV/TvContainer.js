import React, { Component } from 'react';
import TvPresenter from './TvPresenter';

class TvContainer extends Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		loading: true,
		error: null,
	};
	render() {
		const { topRated, popular, airingToday, loading, error } = this.state;
		return (
			<TvPresenter
				topRated={topRated}
				popular={popular}
				airingToday={airingToday}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default TvContainer;
