import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
class SearchContainer extends Component {
	state = {
		movieResult: null,
		tvResult: null,
		searchTerm: '',
		loading: false,
		error: null,
	};

	render() {
		const { movieResult, tvResult, searchTerm, loading, error } =
			this.state;
		return (
			<SearchPresenter
				movieResult={movieResult}
				tvResult={tvResult}
				searchTerm={searchTerm}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default SearchContainer;
