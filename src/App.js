import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	state = {
		data: [],
	};

	loadingData = async () => {
		try {
			const { data } = await axios.get('https://reqres.in/api/users?delay=1');
			// const response = await axios.get('https://ferrari219.github.io/data1.json');
			// const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
			this.setState({
				data: data,
			});
		} catch (e) {
			console.log(e);
		}
	};

	componentDidMount() {
		const { loadingData } = this;
		loadingData();
	}
	render() {
		return (
			<div>
				<p>{JSON.stringify(this.state.data.support && this.state.data.support.url)}</p>
				<p>
					<br />
				</p>
				{/* <p>{JSON.stringify(this.state.data.data[0].email)}</p> */}
				{/* <p>{JSON.stringify(this.state.data.mainInfo)}</p> */}
				{/* {mainInfo.map((item) => (
					<test myname={item.myname} job={item.job} />
				))} */}
				{/* <p>{JSON.stringify(myname)}</p> */}
				{/* <p>{JSON.stringify(this.state.data.subInfo.)}</p> */}
				{/* <p>{JSON.stringify(data)}</p> */}
			</div>
		);
	}
}

export default App;
