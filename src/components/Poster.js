import React from 'react';
import styled from 'styled-components';

const Div = styled.div``;
const Bg = styled.div`
	width: auto;
	height: 18rem;
	background-image: url(${(props) => props.bgUrl});
	background-size: cover;
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => {
	return (
		<Div>
			<Bg
				className="bg"
				bgUrl={
					imgUrl
						? `https://image.tmdb.org/t/p/w185/${imgUrl}`
						: require('../assets/img/noPosterSmall.png')
				}
			></Bg>
			<div className="detail">title, year, rating</div>
		</Div>
	);
};

export default Poster;
