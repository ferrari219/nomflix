import React from 'react';

const SearchPresenter = ({
	movieResult,
	tvResult,
	searchTerm,
	loading,
	error,
	handleChange,
	handleSubmit,
}) => {
	// console.log(movieResult);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={searchTerm} />
			</form>
		</div>
	);
};

export default SearchPresenter;
