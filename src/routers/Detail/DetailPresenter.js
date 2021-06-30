import React from 'react';
import Loader from 'components/Loader';

const DetailPresenter = ({ result, error, loading }) =>
	loading ? <Loader /> : <div>Detail</div>;
// console.log(result);

export default DetailPresenter;
