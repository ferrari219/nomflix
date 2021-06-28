import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from 'components/globalStyle';

//styling
const Header = styled.header`
	width: 100%;
	height: 50px;
	background: ${Color.bColor};
	ul {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
	}
`;
const Li = styled.li`
	flex: 1;
	width: 100%;
	height: 100%;
	border-bottom: 3px solid
		${(props) => (props.current ? Color.pColor : 'transparent')};
	transition: border-bottom 0.5s ease-in-out;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		color: ${Color.wColor};
	}
`;

const Headers = withRouter(({ location: { pathname } }) => {
	// console.log(Color.pColor);
	// console.log(pathname);
	return (
		<Header>
			<ul>
				<Li current={pathname === '/'}>
					<Link to="/">M</Link>
				</Li>
				<Li current={pathname === '/tv'}>
					<Link to="/tv">T</Link>
				</Li>
				<Li current={pathname === '/search'}>
					<Link to="/search">S</Link>
				</Li>
			</ul>
		</Header>
	);
});

export default Headers;
