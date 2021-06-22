import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { pColor } from 'Components/styles/Globalstyle';

//style
const Header = styled.header`
	width: 100%;
	height: 50px;
	ul {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
`;
const Li = styled.li`
	width: 80px;
	border-bottom: 3px solid ${(props) => (props.current ? pColor : 'transparent')};
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
`;

const HeaderComp = withRouter((props) => {
	console.log(props);
	return (
		<Header>
			<ul>
				<Li current={props.location.pathname === '/'}>
					<Link to="/">Movie</Link>
				</Li>
				<Li current={props.location.pathname === '/tv'}>
					<Link to="/tv">TV</Link>
				</Li>
				<Li current={props.location.pathname === '/search'}>
					<Link to="/search">Search</Link>
				</Li>
			</ul>
		</Header>
	);
});

export default HeaderComp;
