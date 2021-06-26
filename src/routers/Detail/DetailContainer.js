import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
// console.log();
class DetailContainer extends Component {
	state = {
		result: null,
		error: null,
		loading: true,
	};

	componentDidMount() {
		const {
			match: {
				params: { id },
			},
			history: { push },
		} = this.props;
		console.log(id);
		const parseId = parseInt(id);
		if (isNaN(parseId)) {
			return push('/');
		}
	}

	render() {
		console.log(this.props);
		const { result, error, loading } = this.state;
		return (
			<DetailPresenter result={result} error={error} loading={loading} />
		);
	}
}

export default DetailContainer;
