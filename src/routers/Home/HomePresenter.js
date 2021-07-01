import React from 'react';
import Loader from 'components/Loader';
import Sections from 'components/Sections';
import Poster from 'components/Poster';

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<>
			{nowPlaying && nowPlaying.length > 0 && (
				<Sections title="nowPlaying">
					{nowPlaying.map((item) => (
						<Poster imgUrl={item.poster_path} />
					))}
				</Sections>
			)}
			{upcoming && upcoming.length > 0 && (
				<Sections title="upcoming">
					{upcoming.map((item) => item.original_title)}
				</Sections>
			)}
			{popular && popular.length > 0 && (
				<Sections title="popular">
					{popular.map((item) => item.original_title)}
				</Sections>
			)}
			<div>{JSON.stringify(nowPlaying)}</div>
		</>
	);
// console.log('HomePresenter nowPlaying:', nowPlaying);

export default HomePresenter;
