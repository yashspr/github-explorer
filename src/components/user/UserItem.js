import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export function UserItem(props) {
	const { id, avatar_url, login: username} = props;

	return (
		<div className="col-md-2 col-sm-5 mr-3 mt-3 border p-4">
			<img src={avatar_url} className="w-75 h-auto mx-auto img-fluid rounded-circle d-block mb-2" alt=""></img>
			<div className="text-center">
				<div><strong>{username}</strong></div>
				<div className="mb-2">{id}</div>
				<Link to={`/user/${username}`} className="btn btn-sm btn-primary">Read More</Link>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	id: PropTypes.number.isRequired,
	login: PropTypes.string.isRequired,
	html_url: PropTypes.string.isRequired,
	avatar_url: PropTypes.string.isRequired,
};

export default UserItem;
