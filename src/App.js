import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import About from './components/pages/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './components/user/User';
import GithubState from './context/github/GithubState';

export function App(props) {

	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" render={props => (
						<div className="container">
							<Users />
						</div>
					)} />
					<Route path="/user/:login" render={props => (
						<User {...props} />
					)} />
					<Route exact path="/about" component={About} />
				</div>
			</Router>
		</GithubState>
	);
}

export default App;
