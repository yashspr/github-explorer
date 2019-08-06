import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = (props) => {
	const {repo} = props;

	return (
		<div className="row d-block my-3 p-3 border">
			<h3>
				<a href={repo.html_url}>{repo.name}</a>
			</h3>
			<br />
			<p className="text-muted">{repo.description}</p>
		</div>
	)
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
}

export default RepoItem
