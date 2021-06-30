import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Inherit, Color } from 'components/globalStyle';
import styled from 'styled-components';

const Header = styled.header`
	width: 100%;
	height: 8rem;
	ul {
		display: flex;
		${Inherit}
	}
`;
const Li = styled.li`
	flex: 1;
	border-bottom: 0.3rem solid
		${(props) => (props.current ? Color.pColor : 'transparent')};
	transition: border-bottom 0.3s linear;
	${Inherit}
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		${Inherit}
	}
`;

const Headers = withRouter(({ location: { pathname } }) => {
	// console.log(props.location.pathname);
	console.log(pathname);
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
