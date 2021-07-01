import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
	position: relative;
	margin: 0;
	.temp-bg {
		height: 18rem;
		margin: 0;
		background-color: #333;
		border-radius: 0.5rem;
	}
`;
const Bg = styled.div`
	width: auto;
	height: 18rem;
	background-image: url(${(props) => props.bgUrl});
	background-size: cover;
	opacity: 0.3;
`;
const Detail = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;
	opacity: 0;
	&:hover,
	&:focus {
		background-color: #666;
		opacity: 1;
	}
	p {
		font-size: 1.6rem;
		font-weight: 600;
		text-align: center;
	}
	span {
		font-size: 1.4rem;
	}
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => {
	return (
		<Div>
			<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
				{/* <div className="temp-bg"></div> */}
				<Bg
					className="bg"
					bgUrl={
						imgUrl
							? `https://image.tmdb.org/t/p/w185/${imgUrl}`
							: require('assets/img/noPosterSmall.png').default
					}
				/>
				<Detail>
					<p>{title}</p>
					<span>{year}</span>
				</Detail>
			</Link>
		</Div>
	);
};

export default Poster;
