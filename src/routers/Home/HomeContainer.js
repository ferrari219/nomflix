import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from 'api';
class HomeContainer extends Component {
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		try {
			const {
				data: { results: nowPlaying },
			} = await movieApi.nowPlaying();
			const {
				data: { results: upcoming },
			} = await movieApi.upcoming();
			const {
				data: { results: popular },
			} = await movieApi.popular();
			// console.log(await (await movieApi.nowPlaying()).data.results);
			this.setState({
				nowPlaying,
				upcoming,
				popular,
			});
			// console.log(JSON.stringify(this.state));
		} catch {
			this.setState({
				error: 'cant find Movies information',
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	}

	render() {
		const { nowPlaying, upcoming, popular, error, loading } = this.state;
		return (
			<HomePresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				error={error}
				loading={loading}
			/>
		);
	}
}

export default HomeContainer;
