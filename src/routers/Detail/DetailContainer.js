import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from 'api';
class DetailContainer extends Component {
	constructor(props) {
		super(props);
		// console.log('constructor: ', props);
		const {
			history: {
				location: { pathname },
			},
		} = props;
		this.state = {
			result: null,
			error: null,
			loading: true,
			isMovie: pathname.includes('/movie/'), //true, false
		};
	}
	async componentDidMount() {
		console.log('componentDidMount: ', this.props);
		const {
			history: { push }, //경로 없을 경우 돌아갈 Fc
			match: {
				params: { id }, // 이 값으로 찾음
			},
		} = this.props;
		const { isMovie } = this.state;
		const parseId = parseInt(id);
		// console.log(typeof parseId); //number
		if (isNaN(parseId)) {
			return push('/'); //해당 안되는 id값일 경우 return할 페이지로 이동
		}
		let result = null;
		try {
			// console.log(await movieApi.movieDetail(22));
			// await movieApi.movieDetail(parseId);
			if (isMovie)
				({ data: result } = await movieApi.movieDetail(parseId));
			else ({ data: result } = await tvApi.showDetail(parseId));

			// console.log(result);
		} catch {
			this.setState({
				error: "can't find Anything",
			});
		} finally {
			this.setState({
				loading: false,
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
