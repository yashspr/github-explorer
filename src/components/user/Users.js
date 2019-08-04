import React from 'react';
import UserItem from '../user/UserItem';
import Spinner from '../layout/Spinner';
import Search from '../layout/Search';

export function Users(props) {

	const {users, loading, getUsers} = props;

	return (
		<div>
			<Search getUsers={getUsers} />
			{loading ? <Spinner /> : ""}
			<div className="row">
				{users && users.map((user, index) => {
					return (
						<UserItem {...user} />
					)
				})}
			</div>
		</div>
	)
}

export default Users;
