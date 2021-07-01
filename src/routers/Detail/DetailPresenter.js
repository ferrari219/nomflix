import React from 'react';
import Loader from 'components/Loader';

const DetailPresenter = ({ result, error, loading }) =>
	loading ? <Loader /> : <div>{JSON.stringify(result)}</div>;
// console.log(result);

export default DetailPresenter;
