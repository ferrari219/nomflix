import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import {} from 'api';
class HomeContainer extends Component {
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		loading: true,
		error: null,
	};
	render() {
		const { nowPlaying, upcoming, popular, loading, error } = this.state;
		return (
			<HomePresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default HomeContainer;
