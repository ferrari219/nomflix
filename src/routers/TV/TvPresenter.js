import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sections from 'components/Sections';

const Div = styled.div`
	padding: 0 10px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) =>
	loading ? null : (
		<Div>
			{topRated && topRated.length > 0 && (
				<Sections title="Top Rated Shows">
					{topRated.map((show) => (
						<span key={show.id}>{show.name}</span>
					))}
				</Sections>
			)}
			{popular && popular.length > 0 && (
				<Sections title="Top Rated Shows">
					{popular.map((show) => (
						<span key={show.id}>{show.name}</span>
					))}
				</Sections>
			)}
			{airingToday && airingToday.length > 0 && (
				<Sections title="Top Rated Shows">
					{airingToday.map((show) => (
						<span key={show.id}>{show.name}</span>
					))}
				</Sections>
			)}
		</Div>
	);

TvPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default TvPresenter;
