import React from 'react';
import Loader from 'components/Loader';

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
	loading ? <Loader /> : <div>Home</div>;
// console.log('HomePresenter nowPlaying:', nowPlaying);

export default HomePresenter;
