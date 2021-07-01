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
						<Poster
							key={item.id}
							id={item.id}
							imgUrl={item.poster_path}
							title={item.original_title}
							year={item.release_date.substring(0, 4)}
							isMovie={true}
						/>
					))}
				</Sections>
			)}
			{upcoming && upcoming.length > 0 && (
				<Sections title="upcoming">
					{upcoming.map((item) => (
						<Poster
							key={item.id}
							id={item.id}
							imgUrl={item.poster_path}
							title={item.original_title}
							year={item.release_date.substring(0, 4)}
							isMovie={true}
						/>
					))}
				</Sections>
			)}
			{popular && popular.length > 0 && (
				<Sections title="popular">
					{popular.map((item) => (
						<Poster
							imgUrl={item.poster_path}
							title={item.original_title}
							year={String(item.release_date).substring(0, 4)}
							isMovie={true}
						/>
					))}
				</Sections>
			)}
			<div>{JSON.stringify(nowPlaying)}</div>
		</>
	);
// console.log('HomePresenter nowPlaying:', nowPlaying);

export default HomePresenter;
