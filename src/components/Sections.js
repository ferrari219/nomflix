import React from 'react';
import styled from 'styled-components';
import { Heading3 } from 'components/globalStyle';

//styling
const Section = styled.section`
	:not(:last-child) {
		margin-top: 2.5rem;
		margin-bottom: 5.5rem;
	}
	h3 {
		${Heading3}
	}
	> div {
		display: grid;
		grid-template-columns: repeat(auto-fill, 12.5rem);
		grid-gap: 2.5rem;
		margin-top: 2.5rem;
	}
`;

const Sections = ({ title, children }) => {
	return (
		<Section>
			<h3>{title}</h3>
			<div>{children}</div>
		</Section>
	);
};

export default Sections;
