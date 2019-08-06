import React from 'react';
import UserItem from '../user/UserItem';
import Spinner from '../layout/Spinner';
import Search from '../layout/Search';

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

export default Users;
