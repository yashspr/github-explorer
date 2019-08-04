import React, { Component } from 'react';
import UserItem from '../user/UserItem';

export class Users extends Component {

	formSubmit = (e) => {
		e.preventDefault();
		this.props.getUsers(document.querySelector('#username_search').value);
	}

	render() {
		return (
			<div>
				<form className="form-inline">
					<input type="text" className="form-control mb-2 mr-sm-2" id="username_search" placeholder="Search for a user" />
					<button type="submit" className="btn btn-primary mb-2" onClick={this.formSubmit}>Submit</button>
				</form>
				<div className="row">
					{this.props.users && this.props.users.map((user, index) => {
						return (
							<UserItem {...user} />
						)
					})}
				</div>
			</div>
		)
	}
}

export default Users;
