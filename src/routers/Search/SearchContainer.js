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

	handleSubmit = (e) => {
		e.preventDefault();
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.searchByTerm();
		}
	};
	onChange = (e) => {
		// const value = e.target.value;
		const {
			target: { value },
		} = e;
		this.setState({
			searchTerm: value,
		});
	};
	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({
			loading: true,
		});
		try {
			const {
				data: { results: movieResults },
			} = await movieApi.search(searchTerm);
			const {
				data: { results: tvResults },
			} = await tvApi.search(searchTerm);
			console.log(movieResults, tvResults);
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
		const { handleSubmit, onChange } = this;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				loading={loading}
				error={error}
				handleSubmit={handleSubmit}
				onChange={onChange}
			/>
		);
	}
}

export default SearchContainer;
