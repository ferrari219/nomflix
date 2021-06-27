import { movieApi, tvApi } from 'api';
import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
class DetailContainer extends Component {
	constructor(props) {
		super(props);
		console.log('Detail construc:',props);
		// const pathname = props.location.pathname;
		const { location: { pathname } } = props;
		console.log(pathname)
		this.state = {
			result: null,
			error: null,
			loading: true,
			isMovie: pathname.includes('/movie/')
		};
	}
	

	async componentDidMount() {
		const {
			match: {
				params: { id },
			},
			history: { push },
		} = this.props;
		console.log(id);
		const { isMovie } = this.state;
		const parseId = parseInt(id);
		if (isNaN(parseId)) {
			return push('/');
		}

		let result = null;
		try {
			if (isMovie) {
				({ data: result } = await movieApi.movieDetail(parseId));
				// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
			}
			else {
				const request = await tvApi.showDetail(parseId);
				result = request.data;
			}
		} catch {
			this.setState({ error: 'cant find anything' });
		} finally {
			this.setState({ loading: false }, result);
		}
	}

	render() {
		console.log(this.props);
		const { result, error, loading } = this.state;
		console.log('result: ', result);
		return (
			<DetailPresenter result={result} error={error} loading={loading} />
		);
	}
}

export default DetailContainer;
