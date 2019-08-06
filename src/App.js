import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import About from './components/pages/About';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from './components/user/User';

export class App extends Component {

	state = {
		users: null,
		loading: false,
		user: null,
		repos: null
	};

	instance = axios.create({
		baseURL: "https://api.github.com/",
		headers: {
			"Authorization": "token 096419c07b33988fc97d74277bf4ceae470fd84e"
		},
		responseType: "json"
	});

	getUsers = async (username) => {
		this.setState({loading: true, users: null});
		const data = await this.instance.get('/search/users', { params: { q: username } });
		console.log(data);
		this.setState({ loading: false, users: data.data.items });
	}

	clearUsers = () => {
		this.setState({users: null});
	}

	getUserInfo = async (username) => {
		this.setState({user: null, loading: true});
		const data = await this.instance.get(`/users/${username}`);
		console.log(data);
		this.setState({user: data.data, loading: false});
	}

	getReposInfo = async (username) => {
		this.setState({repos: null ,loading: true});
		const data = await this.instance.get(`/users/${username}/repos`);
		console.log(data);
		this.setState({repos: data.data, loading: false});
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" render={props => (
						<div className="container">
							<Users getUsers={this.getUsers} users={this.state.users} loading={this.state.loading}
								clearUsers={this.clearUsers} />
						</div>
					)} />
					<Route path="/user/:login" render={props => (
						<User {...props} user={this.state.user} repos={this.state.repos} loading=
										{this.state.loading} getUserInfo={this.getUserInfo}
										getReposInfo={this.getReposInfo} />
					)} />
					<Route exact path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
