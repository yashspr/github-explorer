import React from 'react';
import PropTypes from 'prop-types';

export function UserItem(props) {
	const { id, avatar_url, login: username, html_url: profile_url } = props;

	return (
		<div className="col-md-2 col-sm-5 mr-3 mt-3 border p-4">
			<img src={avatar_url} className="w-75 h-auto mx-auto img-fluid rounded-circle d-block mb-2" alt=""></img>
			<div className="text-center">
				<div><strong>{username}</strong></div>
				<div className="mb-2">{id}</div>
				<a href={profile_url} className="btn btn-sm btn-primary">Read More</a>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	html_url: PropTypes.string.isRequired,
	avatar_url: PropTypes.string.isRequired,
};

export default UserItem;
