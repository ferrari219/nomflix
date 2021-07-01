import React from 'react';
import Loader from 'components/Loader';
import styled from 'styled-components';

const Section = styled.section`
	position: relative;
	width: 100%;
	height: calc(100vh - 50px);
	padding: 50px;
`;
const Backdrop = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgUrl});
	background-position: center center;
	background-size: cover;
	opacity: 0.2;
	filter: blur(2px);
`;
const Content = styled.div`
	display: flex;
	flex-direction: row;
`;
const Cover = styled.div`
	width: 30%;
	height: 70rem;
	background-image: url(${(props) => props.bgUrl});
	background-position: center center;
	background-size: cover;
	border-radius: 5px;
`;
const Info = styled.div`
	width: 70%;
	padding-left: 5rem;
	h3 {
		margin-bottom: 2rem;
	}
	p {
	}
`;

const DetailPresenter = ({ result, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<>
			<Section>
				<Backdrop
					bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
				/>
				<Content>
					<Cover
						bgUrl={`https://image.tmdb.org/t/p/original${result.poster_path}`}
					/>
					<Info>
						<h3>{result.original_name}</h3>
						<p>{result.overview}</p>
					</Info>
				</Content>
			</Section>
			{/* <div>{JSON.stringify(result)}</div> */}
		</>
	);
// console.log(result);

export default DetailPresenter;
