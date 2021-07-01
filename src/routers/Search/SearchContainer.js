import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from 'api';
class SearchContainer extends Component {
	state = {
		movieResult: null,
		tvResult: null,
		searchTerm: '',
		loading: false,
		error: null,
	};

	handleChange = (e) => {
		// const value = e.target.value;
		const {
			target: { value },
		} = e;
		this.setState({
			searchTerm: value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { searchTerm } = this.state;
		const { searchByTerm } = this;
		// console.log(searchTerm);
		if (searchTerm !== '') {
			searchByTerm();
		}
	};
	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });
		try {
			const {
				data: { results: movieResult },
			} = await movieApi.search(searchTerm);
			const {
				data: { results: tvResult },
			} = await tvApi.search(searchTerm);
			// console.log(movieResult);
			this.setState({
				movieResult,
				tvResult,
			});
		} catch {
			this.setState({ error: "Can't find results." });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const { movieResult, tvResult, searchTerm, loading, error } =
			this.state;
		const { handleSubmit, handleChange } = this;
		return (
			<SearchPresenter
				movieResult={movieResult}
				tvResult={tvResult}
				searchTerm={searchTerm}
				loading={loading}
				error={error}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		);
	}
}

export default SearchContainer;
