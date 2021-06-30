import React from 'react';

const SearchPresenter = ({
	movieResult,
	tvResult,
	searchTerm,
	loading,
	error,
	handleChange,
	handleSubmit,
}) =>
	loading ? null : (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={searchTerm} onChange={handleChange} />
			</form>
		</div>
	);
// console.log(movieResult, tvResult);

export default SearchPresenter;
