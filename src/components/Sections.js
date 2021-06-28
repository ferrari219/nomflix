import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
	span {
		font-size: 16px;
		font-weight: 600;
	}
`;
const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
	margin-top: 25px;
`;

const Sections = ({ title, children }) => {
	return (
		<Div>
			<span>{title}</span>
			<Grid>{children}</Grid>
		</Div>
	);
};

Sections.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default Sections;
