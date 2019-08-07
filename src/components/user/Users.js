import React, { useContext } from 'react';
import UserItem from '../user/UserItem';
import Spinner from '../layout/Spinner';
import GitHubContext from '../../context/github/githubContext';

const Users = (props) => {

	const context = useContext(GitHubContext);
	const {users, loading} = context;
	
	return (
		<div>
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
