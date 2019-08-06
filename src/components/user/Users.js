import React from 'react';
import UserItem from '../user/UserItem';
import Spinner from '../layout/Spinner';
import Search from '../layout/Search';
import PropTypes from 'prop-types';

export function Users(props) {

	const {users, loading, getUsers, clearUsers} = props;

	return (
		<div>
			<Search getUsers={getUsers} clearUsers={clearUsers} />
			{loading ? <Spinner /> : ""}
			<div className="row justify-content-between">
				{users && users.map((user, index) => {
					return (
						<UserItem {...user} key={index} />
					)
				})}
			</div>
		</div>
	)
}

Users.propTypes = {
	getUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	users: PropTypes.array.isRequired,
};

export default Users;
