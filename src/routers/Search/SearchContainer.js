import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from 'api';

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
		console.log('searchTerm:', searchTerm);
		if (searchTerm !== '') {
			this.searchTerm();
		}
	};

	searchTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });
		try {
			const {
				data: { result: movieResults },
			} = await movieApi.search(searchTerm);
			const {
				data: { result: tvResults },
			} = await tvApi.search(searchTerm);
			this.setState({
				movieResults,
				tvResults,
			});
		} catch {
			this.setState({ error: 'Cant find results.' });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const { movieResults, tvResults, searchTerm, loading, error } =
			this.state;
		const { handleSubmit } = this;
		// test
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
