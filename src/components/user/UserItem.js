import React, { Component } from 'react';

export class UserItem extends Component {

	render() {

		const { id, avatar_url, login: username, html_url:profile_url } = this.props;

		return (
			<div className="col-md-3 col-sm-6 border p-4">
				<img src={avatar_url} className="img-fluid rounded-circle" alt=""></img>
				<div className="text-center">
					<p>{username}</p>
					<a href={profile_url} className="btn btn-primary">Read More</a>
				</div>
			</div>
		)
	}
}

export default UserItem
