import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import axios from 'axios';

export class App extends Component {

	state = {
		users: null,
		loading: false
	};

	getUsers = async (username) => {

		this.setState({loading: true, users: null});

		const instance = axios.create({
			baseURL: "https://api.github.com/",
			headers: {
				"Authorization": "token 096419c07b33988fc97d74277bf4ceae470fd84e"
			},
			responseType: "json"
		});

		const data = await instance.get('/search/users', { params: { q: username } });
		console.log(data);
		this.setState({ loading: false, users: data.data.items });

	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users getUsers={this.getUsers} users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
