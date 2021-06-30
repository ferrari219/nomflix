import React from 'react';

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
	loading ? null : <div>Home</div>;
// console.log('HomePresenter nowPlaying:', nowPlaying);

export default HomePresenter;
