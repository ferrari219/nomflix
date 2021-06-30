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
		</div>
	);
// console.log(movieResult, tvResult);

export default SearchPresenter;
