import { movieApi, tvApi } from 'api';
import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: '',
		loading: false,
		error: null,
	};

	handleSubmit = () => {
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.searchByTerm();
		}
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({
			loading: true,
		});
		try {
			const {
				data: { results: movieResults },
			} = await movieApi.movieResults();
			const {
				data: { results: tvResults },
			} = await tvApi.tvResults();
			this.setState({
				movieResults,
				tvResults,
			});
		} catch {
			this.setState({
				error: 'cant find results',
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	};

	render() {
		const { movieResults, tvResults, searchTerm, loading, error } =
			this.state;
		const { handleSubmit } = this;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				loading={loading}
				error={error}
				handleSubmit={handleSubmit}
			/>
		);
	}
}

export default SearchContainer;
