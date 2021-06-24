import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { pColor } from 'components/styles/globalStyle';

//style
const Header = styled.header`
	width: 100%;
	height: 50px;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
	ul {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
`;
const Li = styled.li`
	width: 80px;
	border-bottom: 3px solid ${(props) => (props.current ? pColor : 'transparent')};
	transition: border-bottom 0.5s ease-in-out;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
`;

const HeaderComp = withRouter((props) => {
	// console.log(props);
	return (
		<Header>
			<ul>
				<Li current={props.location.pathname === '/'}>
					<Link to="/">M</Link>
				</Li>
				<Li current={props.location.pathname === '/tv'}>
					<Link to="/tv">T</Link>
				</Li>
				<Li current={props.location.pathname === '/search'}>
					<Link to="/search">Search</Link>
				</Li>
			</ul>
		</Header>
	);
});

export default HeaderComp;
