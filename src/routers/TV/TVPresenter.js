import React from 'react';

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
	loading ? null : <div>TV</div>;
// console.log('TVPresenter topRated:', topRated);

export default TVPresenter;
