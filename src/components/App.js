import React from 'react';
import GlobalStyles from 'components/styles/globalStyle';
import Router from 'components/Router';

const App = () => {
	return (
		<section>
			<Router />
			<GlobalStyles />
		</section>
	);
};

export default App;
