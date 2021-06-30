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
		const {
			target: { value },
		} = e;
		// console.log(value);
		this.setState({
			searchTerm: value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { searchTerm } = this.state;
		const { searchByTerm } = this;
		// console.log(searchTerm);
		// 입력이 끝났다면 함수 실행!
		if (searchTerm !== '') searchByTerm();
	};
	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });
		try {
			console.log(await movieApi.search('code'));
			console.log(await tvApi.search('code'));
			const movieResult = await movieApi.search(searchTerm);
			const tvResult = await tvApi.search(searchTerm);
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
