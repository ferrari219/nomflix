import React from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Sections from 'components/Sections';
import Poster from 'components/Poster';

const Div = styled.div`
	input {
		all: unset;
	}
`;

const SearchPresenter = ({
	movieResult,
	tvResult,
	searchTerm,
	loading,
	error,
	handleChange,
	handleSubmit,
}) =>
	loading ? (
		<Loader />
	) : (
		<Div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={searchTerm} onChange={handleChange} />
			</form>

			{movieResult && movieResult.length > 0 && (
				<Sections title="movieResult">
					{movieResult.map((item) => (
						<Poster
							imgUrl={item.poster_path}
							title={item.original_title}
							year={item.release_date.substring(0, 4)}
							isMovie={true}
						/>
					))}
				</Sections>
			)}
			{tvResult && tvResult.length > 0 && (
				<Sections title="tvResult">
					{tvResult.map((item) => (
						<Poster
							imgUrl={item.poster_path}
							title={item.original_name}
							year={String(item.first_air_date).substring(0, 4)}
						/>
					))}
				</Sections>
			)}
			{JSON.stringify(movieResult)}
			{JSON.stringify(tvResult)}
		</Div>
	);

export default SearchPresenter;
