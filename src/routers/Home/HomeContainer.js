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
				data: { results: nowPlaying }
			} = await movieApi.nowPlaying();
			// const nowPlaying = await (await movieApi.nowPlaying()).data.results;
			// const {results: nowPlaying} = await (await movieApi.nowPlaying()).data;
			console.log(await movieApi.nowPlaying());
			this.setState({
				nowPlaying
			});
			// console.log(nowPlaying);
		} catch {
			this.setState({
				error: 'Cant find movie information'
			})
		} finally {
			this.setState({
				loading:false
			})
		}
	} 
	

	render() {
		const { nowPlaying, upcoming, popular, error, loading } = this.state;
		return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />;
	}
}

export default HomeContainer;
