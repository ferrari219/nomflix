import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from 'api';

class DetailContainer extends Component {
	constructor(props) {
		super(props);
		const {
			location: { pathname },
		} = props;
		console.log(pathname);
		this.state = {
			result: null,
			error: null,
			loading: true,
			isMovie: pathname.includes('/movie/'),
		};
	}

	async componentDidMount() {
		// console.log('constructor-props:', this.props);
		const {
			match: {
				params: { id },
			},
		} = this.props;
		const parseId = parseInt(id);
		const { isMovie } = this.state;
		let result = null;
		try {
			if (isMovie) {
				({ data: result } = await movieApi.movieDetail(parseId));
			} else {
				({ data: result } = await tvApi.showDetail(parseId));
			}
			console.log(result);
		} catch {
			this.setState({ error: "Can't find anything." });
		} finally {
			this.setState({
				loading: false,
				result,
			});
		}
	}

	render() {
		const { result, error, loading } = this.state;
		return (
			<DetailPresenter result={result} error={error} loading={loading} />
		);
	}
}

export default DetailContainer;
