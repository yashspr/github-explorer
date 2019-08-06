import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from './Repos';
import Spinner from '../layout/Spinner';

export class User extends Component {

	static propTypes = {
		user: PropTypes.object.isRequired,
		repos: PropTypes.array.isRequired,
		getUserInfo: PropTypes.func.isRequired,
		getReposInfo: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const username = this.props.match.params.login;
		this.props.getUserInfo(username);
		this.props.getReposInfo(username);
	}

	render() {
		const {user, repos, loading} = this.props;

		return (
			<div className="container mt-5">

				{loading ? <Spinner /> : ""}

				<div className="row my-3">
					<Link to='/' className="btn btn-secondary">Back to Home</Link>

				</div>
				{
					user && 
					<>
						<div className="row card">
							<div className="card-header">
								<h2>{user.name}</h2>
							</div>
							<div className="card-body p-4 col-12">
								<div className="row">
									<div className="col-md-4 mr-4">
										<img className="d-block rounded img-fluid mb-2" src={user.avatar_url} alt="User profile pic" />
										<h4>{user.login}</h4>
										<p>Status: {user.hireable ? "Hireable" : "Not For Hire"}</p>
									</div>
									<div className="col-md-6">
										<h3><strong>Bio</strong></h3>
										<p className="lead">{user.bio}</p>
										<a href={user.html_url} className="btn btn-secondary">Visit Profile</a>
									</div>
								</div>
							</div>
						</div>

						<div className="row card my-3">
							<div className="card-body text-center">
								<span class="badge badge-primary">Followers <span class="badge badge-light">{user.followers}</span></span> &nbsp;
								<span class="badge badge-secondary">Following <span class="badge badge-light">{user.following}</span></span> &nbsp;
								<span class="badge badge-info">Public Repositories <span class="badge badge-light">{user.public_repos}</span></span> &nbsp;
								<span class="badge badge-dark">Public Gists <span class="badge badge-light">{user.public_gists}</span></span>
							</div>
						</div>
					</>
				}

				{repos && 
					<>
						<h3 className="text-center">Public Repositories</h3>
						<Repos repos={repos} />
					</>
				}

			</div>
		)
	}
}

export default User
