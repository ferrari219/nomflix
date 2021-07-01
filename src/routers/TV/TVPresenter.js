import React from 'react';
import Loader from 'components/Loader';
import Sections from 'components/Sections';
import Poster from 'components/Poster';

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<>
			{topRated && topRated.length > 0 && (
				<Sections title="topRated">
					{topRated.map((item) => (
						<Poster
							imgUrl={item.poster_path}
							title={item.original_name}
							year={String(item.first_air_date).substring(0, 4)}
						/>
					))}
				</Sections>
			)}
			{popular && popular.length > 0 && (
				<Sections title="popular">
					{popular.map((item) => (
						<Poster
							imgUrl={item.poster_path}
							title={item.original_name}
							year={String(item.first_air_date).substring(0, 4)}
						/>
					))}
				</Sections>
			)}
			{airingToday && airingToday.length > 0 && (
				<Sections title="airingToday">
					{airingToday.map((item) => (
						<Poster
							imgUrl={item.poster_path}
							title={item.original_name}
							year={String(item.first_air_date).substring(0, 4)}
						/>
					))}
				</Sections>
			)}
			<div>{JSON.stringify(topRated)}</div>
		</>
	);
// console.log('TVPresenter topRated:', topRated);

export default TVPresenter;
