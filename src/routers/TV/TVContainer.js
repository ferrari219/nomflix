import React, { Component } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from 'api';

class TVContainer extends Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
			const topRated = await tvApi.topRated();
			const popular = await tvApi.popular();
			const airingToday = await tvApi.airingToday();
			this.setState({
				topRated,
				popular,
				airingToday,
			});
		} catch {
			this.setState({
				error: "can't find T",
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	}

	render() {
		const { topRated, popular, airingToday, loading, error } = this.state;
		return (
			<TVPresenter
				topRated={topRated}
				popular={popular}
				airingToday={airingToday}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default TVContainer;
