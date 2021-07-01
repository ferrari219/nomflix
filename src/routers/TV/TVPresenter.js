import React from 'react';
import Loader from 'components/Loader';

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
	loading ? <Loader /> : <div>{JSON.stringify(topRated)}</div>;
// console.log('TVPresenter topRated:', topRated);

export default TVPresenter;
