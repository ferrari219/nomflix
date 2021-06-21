import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	height: 50px;
`;

const HeaderComponent = withRouter((props) => {
	console.log(props);
	return (
		<Header>
			<ul>
				<li current={props.location.pathname === '/'}>
					<Link to="/">Home</Link>
				</li>
				<li current={props.location.pathname === '/tv'}>
					<Link to="/tv">TV</Link>
				</li>
				<li current={props.location.pathname === '/search'}>
					<Link to="/search">Search</Link>
				</li>
			</ul>
		</Header>
	);
});

export default HeaderComponent;
