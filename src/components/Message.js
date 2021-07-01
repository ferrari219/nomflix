import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	justify-content: center;
	width: 100vw;
`;
const Text = styled.span`
	color: ${(props) => props.color};
`;

const Message = ({ text, color }) => {
	return (
		<Section>
			<Text color={color}>{text}</Text>
		</Section>
	);
};

export default Message;
