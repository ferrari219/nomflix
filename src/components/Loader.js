import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	margin-top: 20px;
	font-size: 28px;
`;

const Loader = () => {
	return (
		<div>
			<span role="img" aria-label="Loading">
				⏰
			</span>
		</div>
	);
};

export default Loader;
