import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
`;
const Span = styled.span`
	color: ${(props) => props.color};
`;

const Message = ({ text, color }) => {
	return (
		<Div>
			<Span color={color}>{text}</Span>
		</Div>
	);
};

Message.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Message;
