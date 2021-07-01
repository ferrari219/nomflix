import React from 'react';
import Loader from 'components/Loader';

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
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={searchTerm} onChange={handleChange} />
			</form>
			{JSON.stringify(movieResult)}
			{JSON.stringify(tvResult)}
		</div>
	);

export default SearchPresenter;
