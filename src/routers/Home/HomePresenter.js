import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sections from 'components/Sections';

const Div = styled.div`
	padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
	loading ? null : (
		<Div>
			{nowPlaying && nowPlaying.length > 0 && (
				<Sections title="Now Playing">
					{nowPlaying.map((movie) => movie.title)}
				</Sections>
			)}
			{upcoming && upcoming.length > 0 && (
				<Sections title="Upcoming Movies">
					{upcoming.map((movie) => movie.title)}
				</Sections>
			)}
			{popular && popular.length > 0 && (
				<Sections title="Popular Movies">
					{popular.map((movie) => movie.title)}
				</Sections>
			)}
		</Div>
	);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upcoming: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default HomePresenter;
