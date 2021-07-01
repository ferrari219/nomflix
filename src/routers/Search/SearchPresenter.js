import React from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Sections from 'components/Sections';
import Poster from 'components/Poster';
import Message from 'components/Message';

const Div = styled.div`
	input {
		all: unset;
	}
`;

const SearchPresenter = ({
	movieResult,
	tvResult,
	loading,
	searchTerm,
	error,
	handleChange,
	handleSubmit,
}) => (
	<Div>
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={searchTerm}
				onChange={handleChange}
				placeholder="Search Here"
			/>
		</form>
		{loading ? (
			<Loader />
		) : (
			<>
				{movieResult && movieResult.length > 0 && (
					<Sections title="movieResult">
						{movieResult.map((item) => (
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
				{error && <Message color="#e74c3c" text={error} />}
				{tvResult && tvResult.length > 0 && (
					<Sections title="tvResult">
						{tvResult.map((item) => (
							<Poster
								key={item.id}
								id={item.id}
								imgUrl={item.poster_path}
								title={item.original_name}
								year={String(item.first_air_date).substring(
									0,
									4
								)}
							/>
						))}
					</Sections>
				)}
				{movieResult &&
					tvResult &&
					movieResult.length === 0 &&
					tvResult.length === 0 && (
						<Message text="Nothing Found" color="#95a5a6" />
					)}
				{movieResult && JSON.stringify(movieResult)}
				{tvResult && JSON.stringify(tvResult)}
			</>
		)}
	</Div>
);

export default SearchPresenter;
