import React, { Component } from 'react';
import TvPresenter from './TvPresenter';
import { tvApi } from 'api';
import Loader from 'components/Loader';

class TvContainer extends Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
			const {
				data: { results: topRated },
			} = await tvApi.topRated();
			const {
				data: { results: popular },
			} = await tvApi.popular();
			const {
				data: { results: airingToday },
			} = await tvApi.airingToday();
			// console.log(topRated);
			this.setState({
				topRated,
				popular,
				airingToday,
			});
		} catch {
			this.setState({
				error: 'cant find TV information',
			});
		} finally {
			this.setState({ loading: false });
		}
	}

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
