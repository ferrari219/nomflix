import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from 'api';
class HomeContainer extends Component {
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
			const nowPlaying = await movieApi.nowPlaying();
			const upcoming = await movieApi.upcoming();
			const popular = await movieApi.popular();
			// console.log(nowPlaying);
			this.setState({
				nowPlaying,
				upcoming,
				popular,
			});
		} catch {
			this.setState({
				error: "can't find M",
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	}

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
