import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sections from 'components/Sections';
import Loader from 'components/Loader';

const Div = styled.div`
	padding: 0 20px;
	form {
		margin-bottom: 50px;
		width: 100%;
		input {
			all: unset;
			font-size: 28px;
			width: 100%;
		}
	}
`;

const SearchPresenter = ({
	movieResults,
	tvResults,
	searchTerm,
	loading,
	error,
	handleSubmit,
	onChange,
}) => {
	return (
		<Div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Search m or t..."
					value={searchTerm}
					onChange={onChange}
				/>
			</form>
			{loading ? (
				<Loader />
			) : (
				<>
					{movieResults && movieResults.length > 0 && (
						<Sections title="M results">
							{movieResults.map((movie) => (
								<span key={movie.id}>{movie.title}</span>
							))}
						</Sections>
					)}
					{tvResults && tvResults.length > 0 && (
						<Sections title="M results">
							{tvResults.map((show) => (
								<span key={show.id}>{show.name}</span>
							))}
						</Sections>
					)}
				</>
			)}
		</Div>
	);
};

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default SearchPresenter;
