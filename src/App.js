import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from './components/pages/About';
import NotFound from './components/layout/404';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from './components/user/User';
import GithubState from './context/github/GithubState';

export function App(props) {

	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/user/:login" component={User} />
						<Route exact path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</GithubState>
	);
}

export default App;
