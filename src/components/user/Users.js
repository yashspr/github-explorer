import React from 'react';
import UserItem from '../user/UserItem';
import Spinner from '../layout/Spinner';

export function Users(props) {

	const formSubmit = (e) => {
		e.preventDefault();
		props.getUsers(document.querySelector('#username_search').value);
	}

	return (
		<div>
			<form className="form-inline">
				<input type="text" className="form-control mb-2 mr-sm-2" id="username_search" placeholder="Search for a user" />
				<button type="submit" className="btn btn-primary mb-2" onClick={formSubmit}>Submit</button>
			</form>
			<Spinner />
			<div className="row">
				{props.users && props.users.map((user, index) => {
					return (
						<UserItem {...user} />
					)
				})}
			</div>
		</div>
	)
}

export default Users;
