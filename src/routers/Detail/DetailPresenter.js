import React from 'react';

const DetailPresenter = ({ result, error, loading }) =>
	loading ? null : <div>Detail</div>;
// console.log(result);

export default DetailPresenter;
